import swaggerAutogen from 'swagger-autogen';
import { DOMAIN } from './config/config.js';

const doc = {
  info: {
    title: 'Contacts and Animals API',
    description: 'Contacts API',
  },
  host: DOMAIN,
  schemes: ['https', 'http'],
  tags: [
    {
      name: 'Root',
      description: 'Root endpoint',
    },
    {
      name: 'Users',
      description: 'Endpoints for managing users',
    },
    {
      name: 'Animals',
      description: 'Endpoints for managing animals',
    },
  ],
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

swaggerAutogen()(outputFile, routes, doc);
