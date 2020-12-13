(function() {
    var obj = function() {
        var me = this,
            crowdProcess = require(__dirname + '/vendor/crowdProcess/crowdProcess.js'),
            CP = new crowdProcess(),
            MYSQL = require(__dirname + '/vendor/mysql/node_modules/mysql');
        
        this.call = (opt, inData, callback) => {
            try {
                me[opt](inData, callback);
            } catch(e) {
                callback(__dirname + ':' + e.message);
            }  
        }      
        this.run = (inData, callback) => {
            try {
                var cfg = {
                    host: inData.dockerEnv.main_ip,
                    port : parseInt(inData.dockerEnv.siteConfig.unidx * 10000) + parseInt(inData.dockerEnv.siteConfig.docker.ports[0]),
                    user: 'root',
                    password: inData.dockerEnv.rootKey.key,
                    multipleStatements: true
                };
                var connection = MYSQL.createConnection(cfg);
                var sql_str = 'SHOW databases;';
                sql_str = 'USE mysql; CREATE USER IF NOT EXISTS "appUser11"@"%" IDENTIFIED BY "password";';
                sql_str += 'GRANT ALL PRIVILEGES ON * . * TO "appUser11"@"%"; FLUSH PRIVILEGES;';
                sql_str += 'CREATE DATABASE IF NOT EXISTS `resyDocker`; SHOW databases; USE mysql; SELECT * FROM user WHERE `User` like "appUser%";'
                connection.query(sql_str, function (error, results, fields) {
                    connection.end();
                    callback((error) ? error : results);
                });
            } catch(e) {
                callback(__dirname + ':' + e.message);
            }
        }
        this.checkUserSetting = (inData, callback) => {
            try {
                var cfg = {
                    host: inData.dockerEnv.main_ip,
                    port : parseInt(inData.dockerEnv.siteConfig.unidx * 10000) + parseInt(inData.dockerEnv.siteConfig.docker.ports[0]),
                    user: 'root',
                    password: inData.dockerEnv.rootKey.key,
                    multipleStatements: true
                };
                var connection = MYSQL.createConnection(cfg);
                var sql_str = 'SHOW databases;';
                sql_str = 'USE mysql; CREATE USER IF NOT EXISTS "appUser11"@"%" IDENTIFIED BY "password";';
                sql_str += 'GRANT ALL PRIVILEGES ON * . * TO "appUser11"@"%"; FLUSH PRIVILEGES;';
                sql_str += 'CREATE DATABASE IF NOT EXISTS `resyDocker`; SHOW databases; USE mysql; SELECT * FROM user WHERE `User` like "appUser%";'
                connection.query(sql_str, function (error, results, fields) {
                    connection.end();
                    callback((error) ? error : results);
                });
            } catch(e) {
                callback(__dirname + ':' + e.message);
            }
        }
    }
    module.exports = obj;
})()
