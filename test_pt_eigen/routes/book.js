const express = require("express")
const BookController = require("../controller/BookController")
const router = express.Router()

    /**
 * @swagger
 * /books:
 *   get:
 *     summary: Retrieve a list of all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: A list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The book ID
 *                     example: 1
 *                   code:
 *                     type: string
 *                     description: The book code
 *                     example: "K001"
 *                   title:
 *                     type: string
 *                     description: The book title
 *                     example: "The Great Gatsby"
 *                   author:
 *                     type: string
 *                     description: The book author
 *                     example: "F. Scott Fitzgerald"
 *                   stock:
 *                     type: integer
 *                     description: The book stock
 *                     example: 1
 *       500:
 *         description: Internal server error
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 description: The book code
 *                 example: "ISBN123456"
 *               title:
 *                 type: string
 *                 description: The book title
 *                 example: "The Great Gatsby"
 *               author:
 *                 type: string
 *                 description: The book author
 *                 example: "F. Scott Fitzgerald"
 *               stock:
 *                 type: integer
 *                 description: The number of books in stock
 *                 example: 5
 *     responses:
 *       201:
 *         description: The book was created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The book ID
 *                   example: 1
 *                 code:
 *                   type: string
 *                   description: The book code
 *                   example: "ISBN123456"
 *                 title:
 *                   type: string
 *                   description: The book title
 *                   example: "The Great Gatsby"
 *                 author:
 *                   type: string
 *                   description: The book author
 *                   example: "F. Scott Fitzgerald"
 *                 stock:
 *                   type: integer
 *                   description: The number of books in stock
 *                   example: 5
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 * /books/{id}:
 *   put:
 *     summary: Update a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The book ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 description: The book code
 *                 example: "ISBN123456"
 *               title:
 *                 type: string
 *                 description: The book title
 *                 example: "The Great Gatsby"
 *               author:
 *                 type: string
 *                 description: The book author
 *                 example: "F. Scott Fitzgerald"
 *               stock:
 *                 type: integer
 *                 description: The number of books in stock
 *                 example: 5
 *     responses:
 *       200:
 *         description: The book was updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The book ID
 *                   example: 1
 *                 code:
 *                   type: string
 *                   description: The book code
 *                   example: "ISBN123456"
 *                 title:
 *                   type: string
 *                   description: The book title
 *                   example: "The Great Gatsby"
 *                 author:
 *                   type: string
 *                   description: The book author
 *                   example: "F. Scott Fitzgerald"
 *                 stock:
 *                   type: integer
 *                   description: The number of books in stock
 *                   example: 5
 *       400:
 *         description: Bad request
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal server error
*   delete:
 *     summary: Delete a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The book ID
 *     responses:
 *       204:
 *         description: The book was deleted successfully
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal server error
 */
router.get("/", BookController.GetAllBook)
router.post("/", BookController.PostBook)
router.put("/:id", BookController.PutBook)
router.delete("/:id", BookController.DeleteBook)
router.get("/:id", BookController.GetBookById)

module.exports = router