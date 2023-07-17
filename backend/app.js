const express = require("express");
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error.handler');

require("dotenv/config");
const base_api =  process.env.Base_API

app.use(cors());
app.options('*', cors())
//middle ware
app.use(express.json())
app.use(morgan('tiny'));
app.use(cors());
app.use(authJwt());
app.use(errorHandler);
// app.use('/uploads', express.static('uploads'));
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));

//#region Routers:

//  |_ Import Section:
const productRoutes =require("./routes/products")
const orderRoutes =require("./routes/orders")
const categoriesRoutes = require("./routes/categories")
const userRoutes = require("./routes/user")

//  |_ Use Section
app.use(base_api+"/products",productRoutes);
app.use(base_api+"/categories",categoriesRoutes);
app.use(base_api+"/orders",orderRoutes);
app.use(base_api+"/users",userRoutes);


//#endregion Routers...



mongoose.connect(process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'angular_express_shop'
  })
.then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  })

app.listen(3000,()=>{
    console.log("OK! 3000. " + base_api)
})