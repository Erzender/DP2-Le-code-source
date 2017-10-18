var con    = require('../connection')

exports.info = function(req, res) {
  	res.json({success: true, message:'Requête ok', name: req.decoded.name})
}
