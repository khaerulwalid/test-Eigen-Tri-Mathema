const { Op } = require("sequelize");
const {Book, Borrowing} = require("../models/index")

class BookController {

    static async GetAllBook(req, res, next) {
        try {
            let data = await Book.findAll({
                include: [{
                    model: Borrowing,
                    where: {
                      return_date: {
                        [Op.not]: null // Mengambil hanya peminjaman yang belum dikembalikan
                      }
                    },
                    //required: false // Menggunakan left join agar buku yang tidak dipinjamkan juga termasuk
                  }]
            })

            res.status(201).json(data)
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async GetBookById(req, res, next) {
        try {
            const {id} = req.params

            let data = await Book.findByPk(id)

            if(!data) {
                throw {name: "BookNotFound", message: "Book not found"}
            }

            res.status(201).json(data)
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async PostBook(req, res, next) {
        try {
            const {code, title, author, stock} = req.body

            let data = await Book.create({code, title, author, stock})

            res.status(201).json(data)
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async PutBook(req, res, next) {
        try {
            const {code, title, author, stock} = req.body
            const {id} = req.params

            let dataBook = await Book.findByPk(id)

            if(!dataBook) {
                throw {name: "BookNotFound", message: "Book not found"}
            }

            let data = await Book.update({code, title, author, stock}, {
                where: {
                    id
                },
                returning: true
            })

            res.status(201).json(data[1][0])
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async DeleteBook(req, res, next) {
        try {
            const {id} = req.params

            let data = await Book.findByPk(id)

            if(!data) {
                throw {name: "BookNotFound", message: "Book not found"}
            }

            await Book.destroy({
                where: {
                    id
                }
            })

            res.status(201).json(data)
        } catch (err) {
            console.log(err);
            next(err)
        }
    }
}

module.exports = BookController