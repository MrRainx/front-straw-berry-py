import React from 'react';
import CustomDropdown from '@components/forms/CustomDropdown';
import CustomTextInput from '@components/forms/CustomTextInput';
import { Button, Form } from 'react-bootstrap';
import { BtnRegresar } from '@components/Buttons';
import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { useFormContext } from 'react-hook-form';
import CustomTextArea from '@components/forms/CustomTextArea';
import { getId } from '@utils/funciones';

const EstudianteFormContainer = ({ title, items, onSubmit, personas = [] }) => {
  const { handleSubmit } = useFormContext();

  const mapOnSubmit = (input) => {
    input.persona = getId(input.persona);
    input.padre = getId(input.padre);
    input.madre = getId(input.madre);
    input.representante = getId(input.representante);
    onSubmit(input);
  };

  return (
    <main className="container-fluid">
      <BreadCrumbTitle title={title} items={items} />
      <div className="row justify-content-center">
        <div className="col-md-10 jumbotron rounded">
          <form onSubmit={handleSubmit(mapOnSubmit)}>
            <Form.Row>
              <div className="col-md-6">
                <CustomDropdown
                  label="Personas:"
                  name="persona"
                  options={personas}
                  optionLabel="str"
                  filter
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomDropdown
                  label="Padre:"
                  name="padre"
                  options={personas}
                  optionLabel="str"
                  filter
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomDropdown
                  label="Madre:"
                  name="madre"
                  options={personas}
                  optionLabel="str"
                  filter
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomDropdown
                  label="Representantes:"
                  name="representante"
                  options={personas}
                  optionLabel="str"
                  filter
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Relación con el Representante:"
                  name="relacionRepresentante"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-12">
                <CustomTextArea label="Observaciones:" name="observaciones" />
              </div>
            </Form.Row>

            <Form.Row className="justify-content-between">
              <div className="col-md-5 mt-3 my-1">
                <BtnRegresar href="/personas/estudiantes" variant="outline-danger" />
              </div>
              <div className="col-md-5 mt-3 my-1">
                <Button variant="outline-primary" block type="submit">
                  Guardar
                </Button>
              </div>
            </Form.Row>
          </form>
        </div>
      </div>
    </main>
  );
};

export default EstudianteFormContainer;
