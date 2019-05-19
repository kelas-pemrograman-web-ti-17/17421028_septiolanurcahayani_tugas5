var express = require('express');

var router = express.Router();

router.get('/adminlte2', function(req, res, next) {
    res.render('admin/index')
})

module.exports = router;