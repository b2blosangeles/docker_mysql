(function() {
    var obj = function(myPath, pkg, cfg, callback) {
        var me = this,
            CP = new pkg.crowdProcess(),
            MYSQL = pkg.require(myPath + '/vendor/mysql/node_modules/mysql');
        this.run = () => {
            var connection = MYSQL.createConnection(cfg);
            var sql_str = 'SHOW databases;';
            sql_str = 'USE mysql; CREATE USER IF NOT EXISTS "appUser11"@"%" IDENTIFIED BY "password";';
            sql_str += 'GRANT ALL PRIVILEGES ON * . * TO appUser11"@"%"; FLUSH PRIVILEGES;';
            sql_str += 'CREATE DATABASE IF NOT EXISTS `resyDocker`; SHOW databases; USE mysql; SELECT * FROM user WHERE `User` like "appUser%";'
            connection.query(sql_str, function (error, results, fields) {
                connection.end();
                callback((error) ? error : results);
            });
        }
    }
    module.exports = obj;
})()
