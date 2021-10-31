const Order = require("../Model/orderModel");
const Event = require("../Model/eventsModel")
exports.Order = async (req, res) => {
  try {
// req.body.quantity <= tickets to book
// update event find by id
const find = await Event.findById(req.body.order._id)
const ticketsLeft = find.qty - req.body.order.qty

await Event.findByIdAndUpdate(req.body.order._id,{qty:ticketsLeft})
    
    await Order.create(req.body);
    res.status(201).json({ message: "Order created" });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};


exports.Find = async (req, res)=> {
  try{
    const guests = await Order.find({})
      res.status(200).json({
        message:"guests are finded",
        guests
      })
    
  }catch (error){
    res.status(201).json({
      message: error.message
    })
  }
}

