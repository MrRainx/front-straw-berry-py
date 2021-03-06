import { useLazyQuery, useMutation } from '@apollo/client';
import HrefButton from '@components/Buttons/HrefButton';
import { createNota, updateNota } from '@graphql/Notas/mutations.gql';
import { getNotasAlumno } from '@graphql/Notas/queries.gql';
import { Column } from 'primereact/column';
import { confirmPopup } from 'primereact/confirmpopup';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import React, { useState } from 'react';
import { AiOutlineWarning } from 'react-icons/ai';
import { DateTimeColumn, OptionesColumn } from 'src/components/table/columns';
import useCustomToast from 'src/hooks/useCustomToast';
import DialogFormActividad from './DialogFormActividad';
import DialogImprimirReporte from './DialogImprimirReporte';

const NotasContainer = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const [isVisible, setVisible] = useState<boolean>(false);
  const [showInfoReporte, setShowInfoReporte] = useState(false);
  const { addInfoToast, addSuccessToast } = useCustomToast();

  const [create, { loading: loadingCreate }] = useMutation(createNota);
  const [update, { loading: loadingUpdate }] = useMutation(updateNota);

  const [getNotas, { loading: loadingNotas }] = useLazyQuery(getNotasAlumno, {
    onCompleted: ({ notas }) => {
      if (notas.length === 0) {
        addInfoToast(
          'No se han encontrado registros de notas con la información seleccionada',
        );
      }
      setData(notas);
    },
  });

  const [selectedPeriodo, setSelectedPeriodo] = useState(null);
  const [selectedAula, setSelectedAula] = useState(null);
  const [selectedAlumno, setSelectedAlumno] = useState(null);

  const [notas, setData] = useState(null);

  const toggle = () => {
    setVisible(!isVisible);
    setTimeout(() => {
      setSelectedItem(null);
    }, 100);
  };

  const HeaderDropDown = ({
    id,
    label,
    options,
    value,
    onChange,
    optionLabel = 'nombre',
  }) => {
    return (
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <Dropdown
          inputId={id}
          className="w-100 p-inputtext-sm"
          optionLabel={optionLabel}
          placeholder="Seleccione"
          options={options}
          value={value}
          filter
          onChange={onChange}
        />
      </div>
    );
  };

  const onClickEditar = (rowData) => {
    setSelectedItem(rowData);
    setVisible(true);
  };

  const onClickConfirmEliminar = async (rowData) => {
    const nota = {
      ...rowData,
      authEstado: 'D',
      alumnoAula: selectedAlumno.id,
      componente: rowData.componente.id,
      createdAt: undefined,
      id: undefined,
      evidencias: undefined,
    };

    await update({ variables: { id: rowData.id, input: nota } });
    addInfoToast(`Se ha eliminado el registro "${rowData.titulo}"`);
    getNotas({ variables: { idAlumno: selectedAlumno.id } });
  };

  const onClickEliminar = async (rowData, { evt }) => {
    confirmPopup({
      target: evt.currentTarget,
      message: (
        <div className="d-flex flex-row">
          <div className="align-self-center mr-2 ml-n3">
            <AiOutlineWarning color="#e74c3c" fontSize="30px" />
          </div>
          <p>Estas seguro de eliminar esta actividad?</p>
        </div>
      ),
      //@ts-ignore
      header: <h6>Confirmación</h6>,
      acceptLabel: 'SI',
      rejectLabel: 'NO',
      accept: () => {
        onClickConfirmEliminar(rowData);
      },
    });
  };

  const onSubmit = (accion: 'add' | 'upt') => async (formData) => {
    formData.alumnoAula = selectedAlumno.id;
    toggle();
    if (accion === 'add') {
      await create({ variables: { input: formData } });
      addSuccessToast('Se ha agregado el registro exitosamente');
    } else {
      await update({ variables: { id: selectedItem.id, input: formData } });
      addSuccessToast('Se ha editado el registro exitosamente');
    }
    getNotas({ variables: { idAlumno: selectedAlumno.id } });
  };

  const onClickImprimirReporte = () => {
    setShowInfoReporte(true);
  };

  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col-lg-4 text-left">
          <HeaderDropDown
            id="periodo_dropDown"
            options={data?.periodos}
            value={selectedPeriodo}
            label="Periodos Lectivos"
            onChange={({ value }) => {
              setSelectedPeriodo(value);
              setSelectedAula(null);
              setSelectedAlumno(null);
              setData([]);
            }}
          />
        </div>
        <div className="col-lg-4 text-left">
          <HeaderDropDown
            id="aulas_dropDown"
            label="Aulas"
            options={selectedPeriodo?.aulas}
            value={selectedAula}
            onChange={({ value }) => {
              setSelectedAula(value);
              setSelectedAlumno(null);
              setData([]);
            }}
          />
        </div>
        <div className="col-lg-4 text-left">
          <HeaderDropDown
            id="alumnos_dropDown"
            label="Alumnos"
            value={selectedAlumno}
            options={selectedAula?.alumnos}
            optionLabel="alumno.personaStr"
            onChange={async ({ value }) => {
              if (value?.estadoMatricula === 'Anulada') {
                addInfoToast('La matrícula de este alumno esta Anulada');
              }
              setSelectedAlumno(value);
              getNotas({ variables: { idAlumno: value.id } });
            }}
          />
        </div>
      </div>
      <div className="d-inline-flex flex-wrap w-100 justify-content-center justify-content-md-between">
        <HrefButton
          label="Registrar"
          onClick={toggle}
          className="my-1"
          icon="pi pi-plus"
          disabled={
            selectedAlumno === null ||
            selectedPeriodo.estado === 'CERRADO' ||
            selectedAlumno.estadoMatricula !== 'Creada'
          }
          permiso="APORTE_ACADEMICO__AGREGAR"
        />

        <HrefButton
          label="Descargar reporte"
          icon="pi pi-paperclip"
          onClick={onClickImprimirReporte}
          className="my-1"
          disabled={selectedAlumno === null}
          permiso="APORTE_ACADEMICO__IMPRIMIR_REPORTE_MATRIZ_INFORME"
        />
      </div>
    </div>
  );

  return (
    <main className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12">
          <DataTable
            header={header}
            value={notas}
            className="p-datatable-gridlines p-datatable-sm"
            rowGroupMode="rowspan"
            groupField="componente.nombre"
            sortMode="single"
            sortField="componente.nombre"
            sortOrder={1}
            autoLayout
            loading={loadingCreate || loadingNotas || loadingUpdate}
            emptyMessage="Por favor seleccione un Periodo Lectivo -> Aula -> Alumno"
            paginator
            rowHover
            currentPageReportTemplate="{totalRecords} registros totales"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            rows={10}
            rowsPerPageOptions={[10, 25, 50]}
            reorderableColumns
            resizableColumns
            removableSort
            stateStorage="local"
            stateKey="dt-actividades"
          >
            <Column
              header="COMPONENTES"
              field="componente.nombre"
              style={{ width: '200px' }}
            />
            <Column header="ACTIVIDADES" field="titulo" style={{ width: '200px' }} />
            <Column
              header="RESULTADO"
              field="resultado"
              style={{ width: '200px' }}
            />
            <Column
              header="OBSERVACIONES"
              field="observaciones"
              style={{ width: '200px' }}
            />
            {DateTimeColumn({
              path: 'createdAt',
              header: 'FECHA',
              className: 'text-center',
              style: { width: '150px' },
            })}
            {OptionesColumn({
              header: 'OPCIONES',
              editButton: {
                onClick: onClickEditar,
                permiso: 'APORTE_ACADEMICO__EDITAR',
                isDisabled: () =>
                  selectedPeriodo.estado === 'CERRADO' ||
                  selectedAlumno.estadoMatricula !== 'Creada',
              },
              deleteButton: {
                onClick: onClickEliminar,
                permiso: 'APORTE_ACADEMICO__ELIMINAR',
                isDisabled: () =>
                  selectedPeriodo.estado === 'CERRADO' ||
                  selectedAlumno.estadoMatricula !== 'Creada',
              },
            })}
          </DataTable>
        </div>
      </div>

      <DialogImprimirReporte
        docentes={selectedAula?.docentes}
        setShow={setShowInfoReporte}
        show={showInfoReporte}
        selectedAlumno={selectedAlumno}
      />

      <DialogFormActividad
        visible={isVisible}
        setVisible={toggle}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        accion={selectedItem ? 'upt' : 'add'}
        onSubmit={onSubmit}
        isLoading={loadingCreate || loadingUpdate}
        componentes={data?.componentes}
      />
    </main>
  );
};

export default NotasContainer;
