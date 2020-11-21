import { gql } from '@apollo/client';

export class Persona {
  static create = gql`
    mutation createPersona($input: CreatePersonaInput!) {
      createPersona(input: $input) {
        persona {
          id
          createdAt
        }
      }
    }
  `;

  static update = gql`
    mutation updatePersona($id: ID!, $input: UpdatePersonaInput!) {
      updatePersona(id: $id, input: $input) {
        persona {
          id
          createdAt
          updatedAt
        }
      }
    }
  `;

  static getAll = gql`
    query getAll {
      personas {
        id
        tipoIdentificacion
        identificacion
        primerNombre
        segundoNombre
        primerApellido
        segundoApellido
        telefono
        celular
        correo
      }
    }
  `;

  static getById = gql`
    query getById($id: ID!) {
      persona(id: $id) {
        str
        id
        tipoIdentificacion
        identificacion
        primerApellido
        segundoApellido
        primerNombre
        segundoNombre
        genero
        sexo
        tipoSangre
        fechaNacimiento
        callePrincipal
        calleSecundaria
        lugarReferencia
        numeroCasa
        telefono
        celular
        correo
        ocupacion
        nivelFormacion
        tieneDiscapacidad
        carnetConadis
        porcentajeDiscapacidad
        discapacidades {
          id
          nombre
        }
        discapacidadesDisponibles {
          id
          nombre
        }
      }
    }
  `;

  static getAllCustom = (select: string) => gql`
    query getAll {
      personas {
        id
        ${select}
      }
    }
  `;

  static getParametrosForm = gql`
    query getParametrosForm {
      discapacidades {
        id
        nombre
      }
    }
  `;

  static deleteById = gql`
    mutation deletePersona($id: ID!) {
      deletePersona(id: $id) {
        found
        deletedId
      }
    }
  `;
}

export class Discapacidad {
  static getAll = gql`
    query getAll {
      discapacidades {
        id
        nombre
        descripcion
        porcentaje
      }
    }
  `;

  static getById = gql`
    query getById($id: ID!) {
      discapacidad(id: $id) {
        id
        nombre
        descripcion
        porcentaje
        createdAt
        updatedAt
      }
    }
  `;

  static create = gql`
    mutation create($input: CreateDiscapacidadInput!) {
      createDiscapacidad(input: $input) {
        discapacidad {
          id
          createdAt
        }
      }
    }
  `;
  static update = gql`
    mutation update($id: ID!, $input: UpdateDiscapacidadInput!) {
      updateDiscapacidad(input: $input, id: $id) {
        discapacidad {
          id
          createdAt
        }
      }
    }
  `;
  static delete = gql`
    mutation delete($id: ID!) {
      deleteDiscapacidad(id: $id) {
        found
        deletedId
      }
    }
  `;
}

export class Docente {
  static getByIdDetail = gql`
    query getByIdDetail($id: ID!) {
      docente(id: $id) {
        id
        titulo
        tipoTitulo
        observaciones
        persona {
          id
          str
        }
      }
    }
  `;

  static create = gql`
    mutation createDocente($input: CreateDocenteInput!) {
      createDocente(input: $input) {
        docente {
          id
          createdAt
        }
      }
    }
  `;

  static getByIdWithParams = gql`
    query getByIdWithParams($id: ID!) {
      docente(id: $id) {
        id
        persona {
          id
          str
        }
        titulo
        tipoTitulo
        observaciones
      }
      personas {
        id
        str
      }
    }
  `;

  static update = gql`
    mutation update($id: ID!, $input: UpdateDocenteInput!) {
      updateDocente(id: $id, input: $input) {
        docente {
          id
          createdAt
        }
      }
    }
  `;
}

export class Alumno {
  static getAll = gql`
    query getAll {
      alumnos {
        id
        persona {
          id
          str
        }
        padre {
          identificacion
          primerNombre
          primerApellido
          segundoNombre
          segundoApellido
        }
        madre {
          identificacion
          primerNombre
          primerApellido
          segundoNombre
          segundoApellido
        }
        representante {
          identificacion
          primerNombre
          primerApellido
          segundoNombre
          segundoApellido
        }
      }
    }
  `;

  static create = gql`
    mutation create($input: CreateAlumnoInput!) {
      createAlumno(input: $input) {
        alumno {
          id
          createdAt
        }
      }
    }
  `;

  static update = gql`
    mutation update($id: ID!, $input: UpdateAlumnoInput!) {
      updateAlumno(id: $id, input: $input) {
        alumno {
          id
          createdAt
        }
      }
    }
  `;

  static delete = gql`
    mutation delete($id: ID!) {
      deleteAlumno(id: $id) {
        found
        deletedId
      }
    }
  `;

  static getById = gql`
    query getById($id: ID!) {
      alumno(id: $id) {
        id
        padre {
          identificacion
          primerNombre
          primerApellido
          segundoNombre
          segundoApellido
        }
        madre {
          identificacion
          primerNombre
          primerApellido
          segundoNombre
          segundoApellido
        }
        representante {
          identificacion
          primerNombre
          primerApellido
          segundoNombre
          segundoApellido
        }
      }
      personas {
        id
        str
      }
    }
  `;
}
