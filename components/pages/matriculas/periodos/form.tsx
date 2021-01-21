import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import FooterButtonsForm from '@components/Buttons/FooterButtonsForm';
import CustomDatePicker from '@components/forms/CustomDatePicker';
import CustomDropDown from '@components/forms/CustomDropDown';
import CustomTextArea from '@components/forms/CustomTextArea';
import CustomTextInput from '@components/forms/CustomTextInput';
import { DATE_FORMAT, toMoment } from '@utils/date';
import { getId } from '@utils/funciones';
import moment from 'moment';
import React from 'react';
import { Form } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';

const PeriodoLectivoFormContainer: React.FC<any> = ({
  onSubmit,
  items,
  title,
  defaultData = {},
  personal = [],
  loading,
}) => {
  const methods = useForm({ mode: 'onChange', defaultValues: defaultData });
  const { handleSubmit, setError, clearErrors } = methods;

  const onLocalSubmit = async (input) => {
    await onSubmit(input);
  };

  return (
    <main className="container-fluid">
      <TitleBreadCrumb title={title} items={items} />

      <FormProvider {...methods}>
        <div className="row justify-content-center mt-5">
          <div className="col-md-10 col-lg-9 jumbotron rounded">
            <form onSubmit={handleSubmit(onLocalSubmit)}>
              <Form.Row>
                <div className="col-12">
                  <CustomTextInput
                    label="Nombre:"
                    name="nombre"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <CustomDatePicker
                    label="Fecha de Inicio:"
                    name="fechaInicio"
                    minDate={moment().subtract(5, 'years').toDate()}
                    maxDate={moment().add(1, 'years').toDate()}
                    rules={{
                      required: 'Este campo es obligatorio',
                      validate: {
                        fechaFin: (value) => {
                          const fechaFin = methods.getValues('fechaFin');

                          if (!fechaFin) {
                            setError('fechaFin', {
                              type: 'custom',
                              message: 'Seleccione una fecha de fin',
                            });
                            return true;
                          }
                        },
                        fechaFinAntes: (value) => {
                          const fechaFin = methods.getValues('fechaFin');
                          const finMoment = toMoment(fechaFin, DATE_FORMAT);
                          if (toMoment(value).isSameOrAfter(finMoment)) {
                            return 'La fecha de inicio no puede ser despues de la fecha de fin';
                          }
                          clearErrors('fechaFin');
                          return true;
                        },
                      },
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <CustomDatePicker
                    label="Fecha de Fin:"
                    name="fechaFin"
                    minDate={moment().subtract(5, 'years').toDate()}
                    maxDate={moment().add(2, 'years').toDate()}
                    rules={{
                      required: 'Este campo es obligatorio',
                      validate: {
                        fechaInicio: (value) => {
                          const fechaInicio = methods.getValues('fechaInicio');
                          if (!fechaInicio) {
                            setError('fechaInicio', {
                              type: 'custom',
                              message: 'Seleccione una fecha de inicio',
                            });
                          }
                          return true;
                        },

                        fechaInicioAntes: (value) => {
                          const fechaInicio = methods.getValues('fechaInicio');
                          const inicioMoment = toMoment(fechaInicio);
                          if (toMoment(value).isSameOrBefore(inicioMoment)) {
                            return 'La fecha de fin no puede ser antes de la fecha de fin';
                          }
                          clearErrors('fechaInicio');
                          return true;
                        },
                      },
                    }}
                  />
                </div>
                {/* <div className="col-md-6">
                  <CustomTextInput
                    label="Estado:"
                    name="estado"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div> */}
                <div className="col-md-6">
                  <CustomDatePicker
                    label="Fecha fin de clases:"
                    name="fechaFinClases"
                    minDate={moment().subtract(5, 'years').toDate()}
                    maxDate={moment().add(2, 'years').toDate()}
                    rules={{
                      required: 'Este campo es obligatorio',
                      validate: {
                        fechaFinClasesAntes: (value) => {
                          const fechaInicio = methods.getValues('fechaInicio');
                          const inicioMoment = toMoment(fechaInicio);
                          if (toMoment(value).isSameOrBefore(inicioMoment)) {
                            return 'La fecha de fin de clases no puede ser antes de la fecha de inicio';
                          }
                          return true;
                        },
                      },
                    }}
                  />
                </div>
                <div className="col-12">
                  <CustomDropDown
                    label="Coordinador/a"
                    name="coordinador"
                    optionLabel="personaStr"
                    filter
                    dataKey="id"
                    options={personal}
                    rules={{
                      setValueAs: (value) => (value ? getId(value) : value),
                      required: 'Campo obligatorio',
                    }}
                  />
                </div>
                <div className="col-12">
                  <CustomDropDown
                    label="Sub coordinador"
                    name="subCoordinador"
                    optionLabel="personaStr"
                    filter
                    dataKey="id"
                    options={personal}
                    rules={{
                      setValueAs: (value) => (value ? getId(value) : value),
                      required: 'Campo obligatorio',
                    }}
                  />
                </div>
                <div className="col-md-12">
                  <CustomTextArea name="observaciones" label="Observaciones" />
                </div>
              </Form.Row>

              <FooterButtonsForm hrefBack="/matriculas/periodos" loading={loading} />
            </form>
          </div>
        </div>
      </FormProvider>
    </main>
  );
};

export default PeriodoLectivoFormContainer;
