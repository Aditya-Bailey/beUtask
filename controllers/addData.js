const User = require('../models/userModel');
const Order = require('../models/orderModel');


module.exports = {

    // add data (dummy data)

    addData: (req, res) => {
        try {
            var userData = [{
                userId: 1,
                name: 'Rahul',
            },
            {
                userId: 2,
                name: 'Ramesh',

            },
            {
                userId: 3,
                name: 'Ankita'
            }]
            // loop to add data to the data base
            userData.forEach((e) => {
                User.create({ name: e.name, userId: e.userId })
            })

            const orderData = [{
                orderId: 1,
                userId: 1,
                subtotal: 500,
                date: new Date()
            },
            {
                orderId: 2,
                userId: 2,
                subtotal: 400,
                date: new Date()
            },
            {
                orderId: 3,
                userId: 1,
                subtotal: 150,
                date: new Date()
            },
            {
                orderId: 4,
                userId: 1,
                subtotal: 700,
                date: new Date()
            },
            {
                orderId: 5,
                userId: 3,
                subtotal: 200,
                date: new Date()
            },
            {
                orderId: 6,
                userId: 3,
                subtotal: 1500,
                date: new Date()
            },
            {
                orderId: 7,
                userId: 1,
                subtotal: 1200,
                date: new Date()
            },
            {
                orderId: 8,
                userId: 2,
                subtotal: 1600,
                date: new Date()
            },
            {
                orderId: 9,
                userId: 2,
                subtotal: 900,
                date: new Date()
            },
            {
                orderId: 10,
                userId: 1,
                subtotal: 700,
                date: new Date()
            }]
            orderData.forEach((x) => {
                Order.create({ orderId: x.orderId, userId: x.userId, subtotal: x.subtotal, date: x.date })
            })
            return res.json({ success: true, message: 'successfully added' })

        } catch (e) {
            res.json({
                "status": false,
                "message": "error encountered"
            });
        }
    }
}