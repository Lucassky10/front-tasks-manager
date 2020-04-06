const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index');

const app = express();



app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static(__dirname + '/public' ));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
    if (req.session) {
        res.locals.messages = req.session.messages;
        res.locals.userInfo = req.session.userInfo;
        req.session.messages = {};
    }
    next();
});

app.use('/', indexRouter);

app.listen(8080);

module.exports = app;