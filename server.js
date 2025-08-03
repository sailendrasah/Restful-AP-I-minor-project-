import express from "express";
import DB from "./DB/connectdb.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./doc/swagger.js";
import authRouter from "./router/auth.js";
import productRouter from "./router/product.js";

const PORT = 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
      <div style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 40px; line-height: 1.6;">
        <div style="max-width: 800px; margin: auto; background-color: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h1 style="color: #2c3e50;">Mini E-Commerce RESTful API</h1>
          <p style="font-size: 1.1rem;">Hi, I'm <strong>Sailendra Sah</strong>. This is a mini project built using <strong>Node.js</strong> to demonstrate a basic RESTful API for an e-commerce application.</p>
  
          <h2 style="color: #34495e;">Available Endpoints</h2>
          <ul style="font-size: 1rem; line-height: 2;">
            <li><strong>Register (POST)</strong> → <code>/auth/register</code></li>
            <li><strong>Login (POST)</strong> → <code>/auth/login</code></li>
            <li><strong>Product Listing (GET)</strong> → <code>/api/product</code></li>
          </ul>
  
          <h3 style="color: #34495e;">Product API Features</h3>
          <ul style="font-size: 1rem; line-height: 2;">
            <li>Search by product name</li>
            <li>Filter by <code>price</code>, <code>feature</code>, and <code>rating</code></li>
          </ul>
  
          <p style="margin-top: 20px;">Swagger documentation available at: <a href="http://localhost:3000/api-docs" style="color: #2980b9;">http://localhost:3000/api-docs</a></p>
  
          <p style="margin-top: 30px; font-size: 0.9rem; color: #7f8c8d;">Thank you.</p>
        </div>
      </div>
    `);
});
  
app.use("/auth", authRouter);
app.use("/api", productRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

DB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    console.log(`http://localhost:3000/api-docs`);
  });
});
