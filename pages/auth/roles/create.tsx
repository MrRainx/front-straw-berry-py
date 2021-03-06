import { useMutation, useQuery } from '@apollo/client';
import RolFormContainer from '@containers/Auth/roles/form';
import PrivateLayout from 'src/layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import AuthQueries from '@graphql/Auth/queries.gql';
import AuthMutations from '@graphql/Auth/mutations.gql';

const CreateRolContainer = ({ items, title }) => {
  const methods = useForm({ mode: 'onChange' });
  const router = useRouter();

  const { data, loading } = useQuery(AuthQueries.getSimple);

  const [createRol] = useMutation(AuthMutations.createRol);

  const onSubmit = async (input) => {
    input.permisos = input.permisos.map((e) => e.id);
    await createRol({ variables: { input } });
    router.push('/auth/roles');
  };

  return (
    <FormProvider {...methods}>
      <PrivateLayout title="Roles de Usuario" loading={loading}>
        <RolFormContainer
          items={items}
          title={title}
          loading={loading}
          permisosDisponibles={data?.permisos}
          onSubmit={onSubmit}
        />
      </PrivateLayout>
    </FormProvider>
  );
};

CreateRolContainer.getInitialProps = () => {
  let title = 'Agregar Rol';
  const items = [
    { title: 'Roles de Usuario', href: '/auth/roles' },
    { title: 'Agregar Rol', active: true },
  ];

  return {
    items,
    title,
  };
};

export default CreateRolContainer;
