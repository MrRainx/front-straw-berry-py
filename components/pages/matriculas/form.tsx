import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import CustomTextInput from '@components/forms/CustomTextInput';
import CustomInputNumber from '@components/forms/CustomInputNumber';
import CustomTextArea from '@components/forms/CustomTextArea';
import FooterButtonsForm from '@components/Buttons/FooterButtonsForm';
import CustomDropDown from '@components/forms/CustomDropDown';
import { getId } from '@utils/funciones';

const MatriculaFormContainer = ({
  title,
  items,
  onSubmit,
  aulas = [],
  alumnos = [],
  defaultData,
}: {
  title: string;
  items: any[];
  aulas: any[];
  alumnos: any[];
  onSubmit: CallableFunction;
  defaultData?: any;
}) => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: defaultData,
  });

  const localOnSubmit = async (input) => {
    input.aula = getId(input.aula);
    input.alumno = getId(input.alumno);
    await onSubmit(input);
  };

  const { handleSubmit, watch } = methods;
  console.log(alumnos);

  const matricula = {
    cedula: '11111111111',
    apellidos: 'RODRIGUEZ GUZMAN',
    nombres: 'MARCOS DAVIDDAVIDDAVID',
    lugar: 'Cuenca',
    fechaNacimiento: '17/10/2020'
  };

  const DetailItemView = ({ className, label, value }) => {
    return (
      <div className={className}>
        <h6>
          <strong>{label}: </strong>{value}
        </h6>
      </div>
    );
  };

  return (
    <main className="container-fluid">
      <BreadCrumbTitle title={title} items={items} />
      <FormProvider {...methods}>
        <div className="row justify-content-center">
          <div className="col-md-6 jumbotron rounded">
            <form onSubmit={handleSubmit(localOnSubmit)}>
              <Form.Row>
                <div className="col-md-12">
                  <CustomDropDown
                    label="Seleccione Alumno:"
                    name="alumno"
                    optionLabel="persona.str"
                    filter
                    options={alumnos}
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>
                <div className="col-md-12">
                  <CustomDropDown
                    label="Seleccione Aula:"
                    name="aula"
                    optionLabel="nombre"
                    filter
                    options={aulas}
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>
                <div className="col-md-12">
                  <CustomTextArea
                    label="Tratamiento:"
                    name="tratamiento"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>
                <div className="col-md-12">
                  <CustomTextArea
                    label="Diagnóstico:"
                    name="diagnostico"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <CustomTextInput
                    label="Matrícula:"
                    name="matricula"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <CustomInputNumber
                    label="Número de Matrícula:"
                    name="numeroMatricula"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>
                <div className="col-md-12">
                  <CustomInputNumber
                    label="Aporte Voluntario:"
                    name="aporteVoluntario"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>
                <div className="col-md-12">
                  <CustomTextArea
                    label="Diagnóstico Final:"
                    name="diagnosticoFinal"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>
              </Form.Row>
              <FooterButtonsForm loading={false} hrefBack="/matriculas" />
            </form>
          </div>

          <div className="col-md-6 jumbotron border border-blue rounded h-100 ">
            <div className="p-grid">
              <h4 className="text-underline">Datos personales:</h4>

              <DetailItemView
                className="p-md-12"
                label="CÉDULA"
                value={matricula?.cedula}
              />

              <DetailItemView
                className="p-md-6"
                label="APELLIDOS"
                value={matricula?.apellidos}
              />
              <DetailItemView
                className="p-md-6"
                label="NOMBRES"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-12"
                label="LUGAR"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="FECHA DE NACIMIENTO"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="EDAD"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="DISCAPACIDAD"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="CARNET CONADIS"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-12"
                label="DIRECCIÓN DOMICILIARIA"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="PROVINCIA"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="CANTÓN"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="PARROQUIA"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="SECTOR"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="CORREO ELECTRÓNICO"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="TELÉFONO"
                value={matricula?.nombres}
              />

              <h4 className="text-underline">Datos Del Padre:</h4>
              <DetailItemView
                className="p-md-12"
                label="CÉDULA"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="NOMBRES"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="APELLIDOS"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-12"
                label="OCUPACIÓN"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-12"
                label="DIRECCIÓN"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="TELÉFONO"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="CELULAR"
                value={matricula?.nombres}
              />

              <h4 className="text-underline">Datos De la Madre:</h4>
              <DetailItemView
                className="p-md-12"
                label="CÉDULA"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="NOMBRES"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="APELLIDOS"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-12"
                label="OCUPACIÓN"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-12"
                label="DIRECCIÓN"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="TELÉFONO"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="CELULAR"
                value={matricula?.nombres}
              />

              <h4 className="text-underline">En caso de emergencia comunicar a:</h4>
              <DetailItemView
                className="p-md-12"
                label="CÉDULA"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="NOMBRES"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="APELLIDOS"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="TELÉFONO"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="CELULAR"
                value={matricula?.nombres}
              />

              <h4 className="text-underline">Datos Del Alumno:</h4>
              <DetailItemView
                className="p-md-12"
                label="NIVEL AL QUE ASISTE"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-12"
                label="PROMOVIDO"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-12"
                label="TRATAMIENTO QUE RECIBE"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-12"
                label="DIAGNÓSTICO"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="MATRÍCULA"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="APORTE VOLUNTARIO"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="FECHA"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="NOMBRE DEL REPRESENTANTE"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="FIRMA"
                value={matricula?.nombres}
              />
              <DetailItemView
                className="p-md-6"
                label="RELACIÓN"
                value={matricula?.nombres}
              />
            </div>
          </div>
        </div>
      </FormProvider>
    </main>
  );
};

export default MatriculaFormContainer;
