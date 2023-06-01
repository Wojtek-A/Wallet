const definition = {
  openapi: '3.0.0',
  info: {
    title: 'Wallet App',
    version: '1.0.0',
    description: 'Group project Wallet',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
    contact: {
      name: 'Wallet App',
      url: '',
    },
  },
  components: {
    schemas: {},
    securitySchemes: {
      Bearer: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  host: 'localhost:3001',
  basePath: '/',
  tags: [
    {
      name: 'Users Controller',
    },
    {
      name: 'Transactions Controller',
    },
    {
      name: 'Transactions Categories',
    },
    {
      name: 'Transactions Summary',
    },
  ],
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  servers: [
    {
      url: 'http://localhost:3001/',
    },
  ],
};

export const swaggerOptions = {
  definition,
  apis: ['./routes/*.js', './models/*.js'],
};
