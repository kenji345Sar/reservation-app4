var express = require("express");
var app = express();

const mongoose = require('mongoose');
const config = require('./config/dev')
const SampleDb = require('./sample-db')
const productRoutes = require('./routes/products')


mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
      const sampleDb = new SampleDb()
      sampleDb.initDb()
      // sampleDb.pushProductsToDb()
    }
)


// app.get('/product', function (req, res) {
//   res.json({ user: 'tobi' })
// })
app.use('/api/v1/products', productRoutes)



/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

// mongodb+srv://test:<password>@cluster0.46xic.mongodb.net/<dbname>?retryWrites=true&w=majority
