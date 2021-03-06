import { useMutation, useQuery } from '@apollo/client';
import AulasFormContainer from '@containers/Aulas/form';
import { updateAula } from '@graphql/Matriculas/mutations.gql';
import { getAulaByIdForm } from '@graphql/Matriculas/queries.gql';
import useCustomRouter from 'src/hooks/useCustomRouter';
import useCustomToast from 'src/hooks/useCustomToast';
import PrivateLayout from 'src/layouts/privateLayout';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const UpdateAulaContainer = ({ id }) => {
  const methods = useForm({ mode: 'onChange' });

  const { addWarningToast } = useCustomToast();

  const { loading, data } = useQuery(getAulaByIdForm, {
    variables: { id },
    onCompleted: ({ aula }) => {
      // if (periodosLectivos?.length === 0) {
      //   addWarningToast('No hay periodos lectivos abiertos.');
      //   return router.push('/matriculas/aulas');
      // }
      methods.reset(aula);
    },
  });

  const router = useCustomRouter();

  const [update, { loading: loadingUpdate }] = useMutation(updateAula);

  const onSubmit = async (input) => {
    console.log(input);

    await update({ variables: { id, input } });
    router.push('/matriculas/aulas');
  };

  return (
    <FormProvider {...methods}>
      <PrivateLayout title="Editar Aula" loading={loading || loadingUpdate}>
        <AulasFormContainer
          docentes={data?.personalByFunciones}
          title="Editar Aula"
          items={[
            {
              title: 'Aulas',
              href: '/matriculas/aulas',
            },
            {
              title: data?.aula?.nombre,
              active: true,
            },
          ]}
          loading={false}
          onSubmit={onSubmit}
          periodos={data?.periodosLectivos}
          defaultData={data?.aula}
        />
      </PrivateLayout>
    </FormProvider>
  );
};

UpdateAulaContainer.getInitialProps = ({ query }) => query;

export default UpdateAulaContainer;
