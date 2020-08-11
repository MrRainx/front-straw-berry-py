import TitleBreadCrumb from '@components/BreadCrumb/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const AplicacionFormContainer = ({ onSubmit, items, title, loadBtn }) => {
  const { register, handleSubmit, errors } = useFormContext();

  return (
    <main className="container-fluid">
      <TitleBreadCrumb title={title} items={items} />
      <div className="row justify-content-center mt-5">
        <div className="col-11 col-md-8 col-lg-6 jumbotron">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                name="nombre"
                ref={register({ required: 'Este campo es obligatorio' })}
                isInvalid={!!errors.nombre}
              />
              <Form.Control.Feedback type="invalid">
                <ErrorMessage errors={errors} name="nombre">
                  {({ message }) => message}
                </ErrorMessage>
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Descripción:</Form.Label>
              <Form.Control
                name="descripcion"
                ref={register}
                rows="4"
                as="textarea"
              />
            </Form.Group>
            <Form.Row className="justify-content-around">
              <div className="col-md-5 my-1">
                <BtnRegresar variant="outline-danger" href="/auth/aplicaciones" />
              </div>
              <div className="col-md-5 my-1">
                <Button
                  block
                  type="submit"
                  variant="outline-primary"
                  disabled={loadBtn || false}
                >
                  {loadBtn && 'Procesando...'}
                  {!loadBtn && 'Guardar'}
                </Button>
              </div>
            </Form.Row>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AplicacionFormContainer;
