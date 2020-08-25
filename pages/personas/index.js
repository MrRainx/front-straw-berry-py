import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import { IndexColumn, OptionesColumn } from '@components/table/columns';
import PrivateLayout from '@layouts/privateLayout';
import Link from 'next/link';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';
import { GoPlus } from 'react-icons/go';
import { useQuery } from '@apollo/client';
import { Persona } from '@services/personas.service';

const PersonasContainer = ({ breadCrumbItems }) => {
  const { data, loading } = useQuery(Persona.getAll);

  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <Link href="/personas/create">
            <a className="btn btn-info btn-sm">
              Agregar
              <GoPlus />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );

  const persona = {};
  return (
    <PrivateLayout title="IPCA | Personas">
      <main className="container-fluid">
        <TitleBreadCrumb title="Personas" items={breadCrumbItems} />
        <div className="row justify-content-center">
          <div className="col-md-11 datatable-doc-demo">
            <DataTable
              className="p-datatable-customers shadow-lg"
              value={data?.personas}
              rowHover
              paginator
              header={header}
              currentPageReportTemplate="{totalRecords} registros totales"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              rows={10}
              rowsPerPageOptions={[10, 25, 50]}
              responsive
            >
              {IndexColumn()}
              <Column
                header="Identificación"
                field="identificacion"
                sortable
                filter
                reorderable
              />
              <Column
                header="Primer Apellido"
                field="primerApellido"
                sortable
                filter
                reorderable
              />
              <Column
                header="Segundo Apellido"
                field="segundoApellido"
                sortable
                filter
                reorderable
              />
              <Column
                header="Primer Nombre"
                field="primerNombre"
                sortable
                filter
                reorderable
              />
              <Column
                header="Segundo Nombre"
                field="segundoNombre"
                sortable
                filter
                reorderable
              />
              <Column
                header="Teléfono"
                field="telefono"
                sortable
                filter
                reorderable
              />
              <Column header="Celular" field="celular" sortable filter reorderable />
              <Column header="Correo" field="correo" sortable filter reorderable />
              <Column
                header="Ocupación"
                field="ocupacion"
                sortable
                filter
                reorderable
              />
              <Column
                header="Discapacidad"
                field="discapacidad"
                sortable
                filter
                reorderable
              />
              <Column
                header="Carnet CONADIS"
                field="carnetConadis"
                sortable
                filter
                reorderable
              />
              {OptionesColumn({
                editPath: ({ id }) => `/personas/update?id=${id}`,
                detailPath: ({ id }) => `/pages/personas/detail?id=${id}`,
              })}
            </DataTable>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

PersonasContainer.getInitialProps = async (props) => {
  return {
    breadCrumbItems: [
      {
        title: 'Personas',
        active: true,
      },
    ],
  };
};

export default PersonasContainer;
