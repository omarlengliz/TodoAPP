const express = require('express');
const router = express.Router();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',

    info: {
        title: "Todo API",
        version: "1.0.0",
        description: "A simple Express Todo API",
      
    },
    components: {
        schemas: {
          Todo: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                description: 'The title of the todo',
              },
              description: {
                type: 'string',
                description: 'The description of the todo',
              },
              isDone: {
                type: 'boolean',
                description: 'Indicates whether the todo is done or not',
                default: false,
              },
            },
          },
        },
      },
    },
  apis: [
    path.resolve(__dirname, '../routes/*.js'), // Path to your route files
    path.resolve(__dirname, '../controllers/*.js'), // Path to your controller files
  ],
};

const specs = swaggerJsdoc(options);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = router;
