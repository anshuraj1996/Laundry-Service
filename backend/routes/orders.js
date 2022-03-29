const express=require('express');
const router=express.Router();
const {json}=require('body-parser');
const orders=require('../model/orders');




router.post('/orders',async(req,res)=>{

    try {
        const {productlist,totalitems,price,details} = req.body;
        const Orders = await orders.create({
            totalitems,
            price,
            ordereddateandtime: new Date().toLocaleString(),
            productlist,
            details,
            user:req.user
           
        });
        return res.json({
            status: "success",
            message: "Order placed Succesfully",
            Orders,
        });
    } catch (e) {
        res.status(500).json({
            status: "order Not created",
            error: e.message,
        });
    }

});


router.get("/orders", async (req, res)=>{
    try {
        const getorders = await orders.find({ user: req.user }).sort({
            _id: -1,
        });
        return res.json({
            status: "success",
            getorders,
        });
    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message,
        });
    }
});

router.get('/orders/:id',async(req,res)=>{
    try{
        const order = await orders.find({_id:req.params.id});
        res.status(200).json({
            status:'success',
            order
        });

    }catch(e){
        res.status(500).json({
            status:"failed",
            message:e.message
        })
    }
});
router.put('/orders/:id',async(req,res)=>{
    try{
        const { status } = req.body;
        const statusupdate = await orders.findOne({ _id: req.params.id });

        if (!statusupdate) {
            return res.status(404).json({
                status: "Not updated",
                message: "order not created/found",
            });
        }
        const Updatestatus = await orders.updateOne({ _id: req.params.id }, {
            status,
        });

        return res.status(200).json({
            status: "success",
            message: "Status Updated",
        });
        
    }catch(e){
        res.status(500).json({
            status: "Not an authorized user to update",
            message: e.message,
        });

    }
})


module.exports=router;