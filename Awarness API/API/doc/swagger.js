// docs/swagger.js
import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Restful API (Gender Equality) Docs",
      version: "1.0.0",
      description:
        "API documentation for Gender Equality backend (Mini API project)",
    },
    servers: [
      {
        url: "http://localhost:3000", // Your backend URL
      },
    ],
  },
  apis: [path.join(process.cwd(), "routes", "*.js")], // <-- Correct path to route files
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
