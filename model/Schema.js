export const DEMO_SCHEMA = {
  storages: [],
  default: "Demo for generating Web App from module",
  $schema: "http://json-schema.org/draft-07/schema",
  id: "Demo",
  title: "Demo",
  type: "object",
  properties: {
    firstName: {
      storages: [],
      nullable: false,
      minLength: 1,
      description: "First name",
      readOnly: false,
      versionable: false,
      id: "CE_Demo_firstName",
      title: "Demo.firstName",
      type: "string",
      maxLength: 255,
    },
    lastName: {
      storages: [],
      nullable: false,
      minLength: 1,
      description: "Last name",
      readOnly: false,
      versionable: false,
      id: "CE_Demo_lastName",
      title: "Demo.lastName",
      type: "string",
      maxLength: 255,
    },
    gender: {
      storages: [],
      nullable: true,
      description: "Gender",
      readOnly: false,
      versionable: false,
      id: "CE_Demo_gender",
      title: "Demo.gender",
      enum: ["other", "female", "male"],
    },
    birthDate: {
      storages: [],
      nullable: true,
      format: "date-time",
      description: "Birth date",
      readOnly: false,
      versionable: false,
      id: "CE_Demo_birthDate",
      title: "Demo.birthDate",
      type: "string",
    },
    address: {
      storages: [],
      nullable: false,
      description: "Address",
      readOnly: false,
      versionable: false,
      id: "CE_Demo_address",
      title: "CE_Demo.address",
      $ref: "Address",
    },
  },
  required: ["firstName", "lastName"],
};

export const ADDRESS_SCHEMA = {
  storages: [],
  default: "Address for generating Web App from module",
  $schema: "http://json-schema.org/draft-07/schema",
  id: "Address",
  title: "Address",
  type: "object",
  properties: {
    city: {
      storages: [],
      nullable: false,
      minLength: 1,
      description: "City",
      readOnly: false,
      versionable: false,
      id: "CE_Address_city",
      title: "Address.city",
      type: "string",
      maxLength: 255,
    },
    state: {
      storages: [],
      nullable: false,
      minLength: 1,
      description: "State",
      readOnly: false,
      versionable: false,
      id: "CE_Address_state",
      title: "Address.state",
      type: "string",
      maxLength: 255,
    },
    country: {
      storages: [],
      nullable: true,
      description: "Country",
      readOnly: false,
      versionable: false,
      id: "CE_Address_country",
      title: "Address.country",
      enum: ["here", "there", "everywhere"],
    },
  },
  required: ["city", "country"],
};
