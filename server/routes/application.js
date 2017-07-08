var express = require('express');
var router = express.Router();

router.get('/app/me/', (req, res)=>{
	res.send(req.isAuthenticated() ? req.user : '0');
});

module.exports = router;