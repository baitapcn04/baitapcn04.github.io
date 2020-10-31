var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Bé tập tính' });
});

router.post('/', function(req, res, next) {
    const num01 = req.body.num01;
    const num02 = req.body.num02;
    const cal = req.body.cal;

    var result = 0;
    if (cal == "cong") {
        result = parseFloat(num01) + parseFloat(num02);
        res.render('index', { title: 'Bé tập tính', num01, num02, result, cal, check_cong: 'checked' });
    } else if (cal == "tru") {
        result = parseFloat(num01) - parseFloat(num02);
        res.render('index', { title: 'Bé tập tính', num01, num02, result, check_tru: 'checked' });
    } else if (cal == "nhan") {
        result = parseFloat(num01) * parseFloat(num02);
        res.render('index', { title: 'Bé tập tính', num01, num02, result, check_nhan: 'checked' });
    } else if (cal == "chia") {
        result = parseFloat(num01) / parseFloat(num02);
        res.render('index', { title: 'Bé tập tính', num01, num02, result, check_chia: 'checked' });
    }
    // res.render('index', { title: 'Bé tập tính', num01, num02, result, cal });
});

module.exports = router;