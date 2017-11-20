var bcrypt = require('bcrypt');
var con    = require('../connection')
var jwt    = require('jsonwebtoken');
var app    = require('../../app');

exports.register = function(req, res) {

  if (req.body.name.length < 2){
    res.json({success:false, message:'Ce nom est un peu court'})
    return
  }
  if (req.body.password.length < 8){
    res.json({success:false, message:'Mot de passe : 8 caractères minimum'})
    return
  }

  sql = "SELECT * FROM users WHERE name='" + req.body.name + "';"
  con.get().query(sql, function(err, users) {
    if (err) throw err;
    if (users.length < 1) {
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(req.body.password, salt); //pour verifier mdp : bcrypt.compareSync(password, hash);
      sql = "INSERT INTO users (name, password, admin) VALUES ('"+ req.body.name +"', '" + hash + "', FALSE)"
      con.get().query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log('Joueur enregistré !');
  		  res.json({ success: true });
      });
    }
    else{
      res.json({ success: false, message: 'Le nom est déjà utilisé.' });
    }
  });
}

exports.authenticate = function(req, res) {

  sql = "SELECT * FROM users WHERE name= '"+ req.body.name +"';"
  con.get().query(sql, function (err, user) {

    if (err) throw err;

    if (user.length < 1) {
      res.json({ success: false, message: 'Nom invalide.' });
    } else {

      // check if password matches
      if (bcrypt.compareSync(req.body.password, user[0].password)!==true) {
        res.json({ success: false, message: 'Mauvais mot de passe.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user[0], app.get('superSecret'), {
          expiresIn: 86400 // expires in 24 hours
        });

        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }

    }

  });
}
