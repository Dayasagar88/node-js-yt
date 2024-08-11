const express = require("express");
const router = express.Router();

const MenuItems = require("./../models/MenuItems");


//POST route to add menu item
router.post("/", async (req, res) => {
    try {
      const data = req.body;
      //Create a new menu item document using the mongoose model
      const item = new MenuItems(data);
  
      //Save the item to database
      const response = await item.save();
      console.log("Item saved successfully");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  router.get("/", async (req, res) => {
    try {
      const data = await MenuItems.find();
      console.log("Menu data received successfully");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });


  router.get("/:taste", async (req, res) => {
    try{
        const taste = req.params.taste;
        if(taste === "spicy" || taste === "sour" || taste === "sweet"){
            response = await MenuItems.find({taste : taste});
            console.log("taste")
            console.log(response)          
            res.status(200).json(response);
        }else{
            res.status(404).json({error: "Invalid taste"});
        }
    }catch(err){
        console.log(err)
        res.status(500).json({error : "Internal server error"})       
    }
  })

  router.put("/:id", async  (req, res) => {
    try{
      const itemId = req.params.id;
      const item = req.body;

      const response = await MenuItems.findByIdAndUpdate(itemId, item);
      if(!response){
        return res.status(404).json({error : "Data not found"});
      }

      console.log("Item updated successfully");
      res.status(200).json({message: `Item updated successfully`})
      
    }catch(err){
       console.log(err);
       res.status(500).json({error : "Internal server error"})
    }
  })

  router.delete("/:id" ,async  (req, res) => {
    try{
      const itemId = req.params.id;
      const response = await MenuItems.findByIdAndDelete(itemId);
      if(!response){
        res.status(404).json({error : "Data not found"})
      }
      res.status(200).json({message : "Item deleted succussfully"})
      console.log("Item deleted succussfully")
    }catch(err){
      console.log(err);
      res.status(500).json({error : "Internal server error"})
    }
  })


  module.exports = router;
  