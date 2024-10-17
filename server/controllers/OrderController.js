const {Order, Food, User} = require('../models/')

module.exports = class orderController {
    static async getOrder (req, res){
        try {
            const allOrder = await Order.findAll({
                include: [
                    User, Food
                ]
            })

            res.status(200).json(allOrder)
        } catch (error) {
            throw error
        }
    }
q
    static async makeOrder (req, res){
        try {
            const {userId, foodId} = req.body

            const createOrder = await Order.create({
                userId, foodId
            })

            res.status(201).json({
                createOrder
            })
        } catch (error) {
            throw error
        }
    }

    static async myOrder (req, res){
        try {

            const {id} = req.params

            const allMyOrder = await Order.findAll({
                where:{
                    id
                }
            })

            res.status(200).json({
                allMyOrder
            })
            
        } catch (error) {
            throw error
        }
    }

    static async userOneOrder(req,res){
        try {

            const {id} = req.params
            
            const currentOrder = await Order.findOne({
                where : {
                    id
                }
            })

            res.status(200).json({
                currentOrder
            })

        } catch (error) {
            throw error
        }
    }

    
}