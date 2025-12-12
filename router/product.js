import express from "express";
import getAllProduct from "../Controller/product.js";

const productRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - company
 *         - rating
 *         - createAdt
 *       properties:
 *         name:
 *           type: string
 *           example: "iPhone 14"
 *         price:
 *           type: number
 *           example: 999.99
 *         feature:
 *           type: boolean
 *           example: true
 *         company:
 *           type: string
 *           enum: [apple, Dell, mi]
 *           example: "apple"
 *         rating:
 *           type: number
 *           example: 4.5
 *         createAdt:
 *           type: string
 *           format: date-time
 *           example: "2025-08-03T10:30:00Z"
 */

/**
 * @swagger
 * tags:
 *   name: Product
 *   description: Product management and filtering
 */

/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: Get all products
 *     tags: [Product]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Search by product name
 *       - in: query
 *         name: price
 *         schema:
 *           type: number
 *         description: Filter by product price
 *       - in: query
 *         name: feature
 *         schema:
 *           type: boolean
 *         description: Filter by feature (true or false)
 *       - in: query
 *         name: rating
 *         schema:
 *           type: number
 *         description: Filter by rating
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: Sort by fields (e.g., price,-rating)
 *     responses:
 *       200:
 *         description: List of all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Server error
 */

productRouter.route("/product").get(getAllProduct);

export default productRouter;
