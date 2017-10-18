var mysql = require('mysql')
  , async = require('async')
  , config = require('../config')

var pool= null

exports.connect = function(done) {
  pool = mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.databaseSql
  })

  done()
}

exports.get = function() {
  return pool
}
