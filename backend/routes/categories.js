const {Category} = require('../models/category');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const categoryList = await Category.find();

    if(!categoryList) {
        res.status(500).json({success: false})
    } 
    res.send(categoryList);
})

router.get("/:id",async (req, res) =>{

    const category = await Category.findById(req.params.id);
    if (!category){
        res.status(500).json({message:"this category doesn't exist."});
    }
    res.status(200).send(category);
})
router.post('/', async (req,res)=>{
    console.log("Herer correct")
    try {
        console.log("Herer correct")
        const category =  new Category({
            name: req.body.name,
            icon: req.body.icon,
            color: req.body.color,
        });
    console.log("Herer correct")
        const savedCategory = await category.save();

        if (!savedCategory)
            return res.status(400).send('The category could not be created!');

        res.send(savedCategory);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error", error: error.ERROR });
    }
})
router.put('/:id',async (req,res)=>{
    try {
        const category = await Category.findByIdAndUpdate(
          req.params.id,
          {
              name: req.body.name || category.name,
              icon: req.body.icon || category.icon,
              color: req.body.color || category.color,
          },
          { new: true} // return updated item
        )
        if(!category) {
            return res.status(400).send('the category cannot be created!')
        }
        res.send(category);
    } catch (error) {
        console.error(error);
        res.status(500).send('something went wrong');
    }
})
router.delete('/:id', (req, res)=>{
    Category.findByIdAndRemove(req.params.id).then(category =>{
        if(category) {
            return res.status(200).json({success: true, message: 'the category is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "category not found!"})
        }
    }).catch(err=>{
        return res.status(500).json({success: false, error: err})
    })
})


module.exports =router;