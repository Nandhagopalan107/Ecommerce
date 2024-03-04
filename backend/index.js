 const port =4000

 
 const  express = require("express");
 const app = express();
 const  mongoose = require("mongoose");
 const jwt = require("jsonwebtoken")
 const multer = require("multer")
 const path = require("path")
 const cors = require("cors")


app.use(express.json())
app.use(cors())

//database connection
mongoose.connect("mongodb+srv://nandhagopalan107:Ecommerce@cluster0.7hkwhoz.mongodb.net/e-commerce")


//api creation
app.get("/",(req,res)=>{
    res.send("ExpressApp is running");
})


// Img storage eng

const storage = multer.diskStorage({
    destination : './Upload/images',
    filename :(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//endpoint for imgs
app.use('/images',express.static('Upload/images'))
app.get("/welcome",(req,res)=>{
    res.status(200).json({message:"welcome"})
})
app.post("/Upload",upload.single("product"),(req,res)=>{

    res.json({
        success:1 , 
        image_url : `http://localhost:${port}/images/${req.file.filename}`
    })

})

//Schema editing product
const Product = mongoose.model("Product",{
    id:{
            type : Number,
            required: true,
    },
    name:{
        type:String,
        required:true,
    },
    image :{
        type : String,
        required: true,
    },
    category:{
        type : String,
        required: true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price :{
        type : Number,
        require : true,
    },
    date:{
        type:Date,
        default : Date.now,
    },
    available:{
            type : Boolean,
            default : true,
    },

})

app.post('/addproduct',async (req,res)=>{
        const product = new Product({
            id : req.body.id,
            name : req.body.name,
            image : req.body.image,
            category : req.body.category,
            new_price : req.body.new_price,
            old_price : req.body.old_price,
        });
        console.log(product);
        await product.save();
        console.log("saved");
        res.json({
            success :true,
            name:req.body.name,

        })
       
})



app.listen(port,(error)=>{
    if(!error)
    {
        console.log("Server running on port:"+port);
    }
    else{
        console.log("Error"+error);
    }
})


