var bcrypt = require('bcrypt');
var con    = require('../connection')
var jwt    = require('jsonwebtoken');
var app    = require('../../app');

exports.info = function(req, res) {
  var json_res= {success: true, message:'Requête ok', name: ""}
  var sql = "SELECT * FROM characters WHERE id_owner="+req.decoded.id+";"
  con.get().query(sql, function (err, result, fields) {
    if (err) throw err;
    if (result.length > 0){
      res.json({success: true, message:'Requête ok', noCharacter: false, name: result[0].name})
    }
    else {
      res.json({success: true, message: 'Pas de personnage', noCharacter: true})
    }
  });
}

exports.setup = function(req, res) {
  var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), password VARCHAR(255), admin TINYINT(1));"
  con.get().query(sql, function (err, result, fields) {
    if (err) throw err;
  });
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync('admin', salt); //pour verifier mdp : bcrypt.compareSync(password, hash);
  sql = "INSERT INTO users (name, password, admin) VALUES ('admin', '" + hash + "', TRUE)"
  con.get().query(sql, function (err, result, fields) {
    if (err) throw err;
  })
  sql = "CREATE TABLE characters (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), picture VARCHAR(255), npc TINYINT(1), id_owner INT);"
  con.get().query(sql, function (err, result, fields) {
    if (err) throw err;
  })
  sql = "INSERT INTO characters (name, picture, npc, id_owner) VALUES ('Test', 'http://img15.hostingpics.net/pics/733800draco10.png', TRUE, 1)"
  con.get().query(sql, function (err, result, fields) {
    if (err) throw err;
  })
  res.json({ success: true, message:"Serveur configuré." });
}

exports.fuckup = function(req, res) {
  var sql = "DROP TABLE users;"
  con.get().query(sql, function (err, result, fields) {
    if (err) throw err;
  });
  var sql = "DROP TABLE characters;"
  con.get().query(sql, function (err, result, fields) {
    if (err) throw err;
  });
  res.json({ success: true, message:"Serveur anéanti." });
}
