const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();
const path = require('path');
const cors = require('cors');


const userRouter = require('./routers/user');
const foodRouter = require('./routers/food');
const category = require('./routers/foodcategory');
const resturant = require('./routers/resturant');
const upload = require('./routers/upload');
const cart = require('./routers/cart');


const auth = require('./Auth');

const app = express();
app.options('*', cors());
  app.use(cors());
  app.use(morgan('tiny'));


mongoose.connect(process.env.DbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to database server');
}).catch(e => console.log(e));

app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.send('Welcome, to my app');
});

app.use('/api/users', userRouter);
app.use('/api/upload', upload);
app.use('/api/food', foodRouter);
app.use('/api/category', category);
app.use('/api/resturant', resturant);
app.use('/api/cart', cart);


app.use((req, res, next) => {
    let err = new Error('Not found!');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(err.status || 500);
    res.json({
        status: 'error',
        message: err.message
    });
})
app.listen(process.env.Port, () => {
    console.log(`Server is running at localhost:${process.env.Port}`);
});