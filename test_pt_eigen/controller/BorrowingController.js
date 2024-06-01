const { Op } = require("sequelize");
const {Borrowing, penalty} = require("../models/index")

class BorrowingController {
    static async PostBorrowing(req, res, next) {
        try {
            const {MemberId, BookId} = req.body

            let hasBorrowedBooks = await Borrowing.count({
                where: {
                    BookId,
                    return_date: {
                        [Op.eq]: null
                    }
                }
            }) > 0;

            if(hasBorrowedBooks) {
                throw {name: "ErrorBookBorrow", message: "Buku sudah dipinjam oleh orang lain"}
            }

            let borrowedBooks = await Borrowing.count({
                where: {
                    MemberId,
                    return_date: {
                        [Op.eq]: null
                    }
                }
            })

            if(borrowedBooks === 2) {
                throw {name: "ErrorBookBorrow", message: "Jumlah buku yang dipinjam, tidak boleh lebih dari 2 buku"}
            }

            const borrow_date = new Date();

            const hasPenalty = await penalty.findAll({
                where: {
                    MemberId,
                    penalty_end_date: {
                        [Op.gt]: new Date()
                    }
                }
            })

            if(hasPenalty.length > 0) {
                throw {name: "ErrorBookBorrow", message: "Anda sedang memiliki penalty peminjaman sampai batas waktu 3 hari dari pengembalian buku"}
            }


            let data = await Borrowing.create({MemberId, BookId, borrow_date})

            res.status(201).json(data)
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async UpdateReturnDateBorrowingBook(req, res, next) {
        try {
            const {MemberId, BookId, return_date} = req.body
            const {id} = req.params

            let dataBook = await Borrowing.findByPk(id)

            let hasBorrowedBooks = await Borrowing.count({
                where: {
                    MemberId,
                    BookId
                }
            }) > 0;

            if(!hasBorrowedBooks) {
                throw {name: "ErrorBookBorrow", message: "Buku ini tidak anda pinjam"}
            }


            const borrowDate = new Date(dataBook.borrow_date);
            const mustReturnDate = new Date(borrowDate.setDate(borrowDate.getDate() + 7));

            
            if(new Date(return_date) > mustReturnDate) {
                const penalty_date = new Date(return_date);

                const penalty_end_date = new Date(penalty_date);
                penalty_end_date.setDate(penalty_date.getDate() + 3);

                await penalty.create({MemberId, BookId, penalty_date, penalty_end_date})
            }

            let data = await Borrowing.update({return_date}, {
                where: {
                    id
                }
            })

            res.status(201).json({
                message: "Success return book"
            })
        } catch (err) {
            console.log(err);
            next(err)
        }
    }
}

module.exports = BorrowingController