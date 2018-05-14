var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, '/dist')));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/jewelry');

var ProductSchema = new mongoose.Schema({
    name: {type: String, minlength: 3},
    price: {type: String, minlength: 1},
    description: {type: String, required: true},
    pic: {type: String, required:true}
})
mongoose.model('Product', ProductSchema);
var Product = mongoose.model('Product');

var UserSchema = new mongoose.Schema({
    username: {type: String, minlength: 3},
    email: {type: String, minlength: 1},
    password: {type: String, required: true}
    
})
mongoose.model('User', UserSchema);
var User = mongoose.model('User');
//route to create new products
app.post('/api/newProduct', (req,res)=>{
    var newProduct = new Product({name: req.body.name, price: req.body.price, description: req.body.description, pic: req.body.pic});
    newProduct.save(function(err){
        if(err){
            res.json(err);
        }else{
            console.log("object created")
            res.json(newProduct);
        }
    })
})

//get all products
app.get('/api/products', (req,res)=>{
    Product.find({}, (err, foundProducts)=>{
        if (err) {
            res.json(err);
        } else {
            res.json(foundProducts);
        }
    })
})

//get one product
app.get('/api/products/:id', (req,res)=>{
    Product.findOne({_id: req.params.id}, (err, foundProduct)=>{
        if (err) {
            res.json(err);
        } else {
            res.json(foundProduct);
        }
    })
})

//edit a product
app.put('/api/products/:id', (req,res)=>{
    Product.findOne({ _id: req.params.id }, (err, foundProduct) => {
        if (err) {
            res.json(err);
        } else {
            foundProduct.name = req.body.name;
            foundProduct.price = req.body.price;
            foundProduct.pic = req.body.pic;
            foundProduct.save((err)=>{
                if(err){
                    res.json(err);
                }else{
                    res.json(foundProduct);
                }
            })
        }
    })
})

//remove a product
app.delete('/api/products/:id', (req,res)=>{
    Product.remove({_id: req.params.id}, (err)=>{
        res.json({message: 'product deleted'});
    })
})


app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./dist/index.html"))
});

app.listen(8000, ()=>{
    console.log('listening on port 8000');
});