const User = require('../models/userModel');
const Order = require('../models/orderModel');


module.exports = {

    subTotal: (req, res) => {
        try {
            const query = [ 
                { $lookup : { from : 'users', localField : 'userId', foreignField : 'userId', as : 'result'} },
                { $unwind: '$result' },
                { $group : {
                    "_id": {
                        "userId": "$userId",
                        "name": "$result.name"
                    },
                noOfOrders: { $sum: 1 },
                averageBillValue: {$avg: "$subtotal"},     
            } },
            // {
            //     $addFields : {
            //         "isNumber" : { $toInt : "$averageBillValue" },
            //       },
            // },
            {$project:{
                _id: 0,
                name: "$_id.name",
                userId: "$_id.userId",
                averageBillValue: {$toInt: "$averageBillValue"},
                noOfOrders: 1,

            }}
         ]
           Order.aggregate(query).sort("userId").then((data)=>{

               console.log(data)
               return res.json({ data })
           })

        } catch (e) {
            console.log('ERROR1', e)
            res.json({
                "status": false,
                "message": "error encountered"
            });
        }
    },

    addKey: (req, res) => {
        try {
            const query = [ 
                { $lookup : { from : 'users', localField : 'userId', foreignField : 'userId', as : 'result'} },
                { $unwind: '$result' },
                { $group : {
                    "_id": {
                        "userId": "$userId",
                        "name": "$result.name"
                    },
                noOfOrders: { $sum: 1 },
            } },
            {$project:{
                _id: 0,
                name: "$_id.name",
                userId: "$_id.userId",
                noOfOrders: 1,

            }}
         ]
           Order.aggregate(query).sort("userId").then(async(data)=>{
               await data.forEach((e)=>{
                   User.findOneAndUpdate({userId:e.userId, name:e.name}, { noOfOrders: e.noOfOrders }, { returnNewDocument: true })
                    .then((doc)=>{
                        if(!doc){
                            return res.json({success: false, message: "error while updating"})
                        }
                   })
               })
               return res.json({ success: true, message: "successfully updated" })
           })

        } catch (e) {
            console.log('ERROR1', e)
            res.json({
                "status": false,
                "message": "error encountered"
            });
        }
    }
}