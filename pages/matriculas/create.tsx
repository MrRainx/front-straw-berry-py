import { useMutation, useQuery } from '@apollo/client';
import MatriculaFormContainer from '@containers/Matriculas/form';
import { createMatricula } from '@graphql/Matriculas/mutations.gql';
import { getParametrosFormMatriculaCreate } from '@graphql/Matriculas/queries.gql';
import classnames from 'classnames';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useCustomRouter from 'src/hooks/useCustomRouter';
import useCustomToast from 'src/hooks/useCustomToast';
import PrivateLayout from 'src/layouts/privateLayout';

const CreateMatriculaContainer: React.FC = () => {
  const methods = useForm({ mode: 'onChange' });

  const router = useCustomRouter();

  const { addWarningToast } = useCustomToast();

  const onCompleted = useCallback(({ alumnosSinMatricula, aulas }) => {
    if (aulas?.length === 0) {
      addWarningToast('No hay aulas registradas.');
      router.push('/matriculas');
    }

    // if (alumnosSinMatricula.length === 0) {
    //   addWarningToast(
    //     'Todos los alumnos registrados, ya tienen una matricula activa',
    //   );
    //   router.push('/matriculas');
    // }
  }, []);

  const { loading, data } = useQuery<any>(getParametrosFormMatriculaCreate, {
    onCompleted,
  });

  const [create, { loading: loadingCreate }] = useMutation(createMatricula);

  const onSubmit = async (input) => {
    const res = await create({ variables: { input } });
    console.log(res);
    router.push('/matriculas');
  };

  return (
    <FormProvider {...methods}>
      <PrivateLayout
        title="Crear Matricula"
        loadingText={classnames({
          'Cargando...': loading,
          'Guardando...': loadingCreate,
        })}
        loading={loading || loadingCreate}
      >
        <MatriculaFormContainer
          title="Crear Matricula"
          items={[
            {
              title: 'Matriculas',
              href: '/matriculas',
            },
            {
              title: 'Crear Matricula',
              active: true,
            },
          ]}
          onSubmit={onSubmit}
          //loading={loadingCreate}
          aulas={data?.aulas}
          alumnos={data?.alumnosSinMatricula}
        />
      </PrivateLayout>
    </FormProvider>
  );
};

export default CreateMatriculaContainer;
