const { Op, literal } = require("sequelize");
const {Member, Borrowing} = require("../models/index")

class MemberController {
    static async GetAllMember(req, res, next) {
        try {
            let data = await Member.findAll({
                attributes: ['id', 'code', 'name',
                    [
                        literal(`(
                        SELECT COUNT(*)
                        FROM "Borrowings"
                        WHERE "Borrowings"."MemberId" = "Member".id
                        AND "Borrowings".return_date IS NULL
                        )`),
                        'current_borrow_book'
                    ]
                ],
                include: [{
                    model: Borrowing,
                    where: {
                        return_date: {
                            [Op.eq]: null
                        } 
                    },
                }]
            })

            res.status(201).json(data)
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async GetMemberById(req, res, next) {
        try {
            const {id} = req.params

            let data = await Member.findByPk(id)

            res.status(201).json(data)
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async PostMember(req, res, next) {
        try {
            const {code, name} = req.body

            let data = await Member.create({code, name})

            res.status(201).json(data)
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async PutMember(req, res, next) {
        try {
            const {code, name} = req.body
            const {id} = req.params

            let data = await Member.update({code, name}, {
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

    static async DeleteMember(req, res, next) {
        try {
            const {id} = req.params

            let data = await Member.findByPk(id)

            await Member.destroy({
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

module.exports = MemberController