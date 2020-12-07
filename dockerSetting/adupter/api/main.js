(function() {
    var obj = function(myPath, pkg, cfg, callback) {
        var me = this,
            CP = new pkg.crowdProcess(),
            MYSQL = pkg.require(myPath + '/vendor/mysql/node_modules/mysql');
        this.run = () => {
            var connection = MYSQL.createConnection(cfg);
            var sql_str = 'SHOW databases;';
            connection.query(sql_str, function (error, results, fields) {
                connection.end();
                callback((error) ? error : results);
            });
        }
    }
    module.exports = obj;
})()
