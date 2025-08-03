// docs/swagger.js
import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Restful API (e-commerce) Docs",
      version: "1.0.0",
      description: "API documentation for e-commerce backend (Mini API project)",
    },
    servers: [
      {
        // url: 'https://chitchat-api-ebon.vercel.app', // change to your actual backend base URL
        url: "http://localhost:3000", // change to your actual backend base URL
      },
    ],
  },
  apis: ["./router/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
