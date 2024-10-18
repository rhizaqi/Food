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

    static async allMyOrder (req, res){
        try {
            const {userId} = req.params

            const myOrders = await Order.findAll({
                where:{
                    userId
                }
            })

            res.status(200).json({
                myOrders
            })
            
        } catch (error) {
            // console.log(error,`one order`);
            throw error
        }
    }

    static async userOneOrder(req,res){
        try {
            const {orderId} = req.params

            console.log(orderId,`??`);
            
            const currentOrder = await Order.findOne({
                where : {
                    orderId
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