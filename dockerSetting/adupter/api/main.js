(function() {
    var obj = function(myPath, pkg, cfg) {
        var me = this,
            CP = new pkg.crowdProcess(),
            MYSQL = pkg.require(myPath + '/vendor/mysql/node_modules/mysql');
        this.run = (callback) => {
            var connection = MYSQL.createConnection(cfg);
            var sql_str = 'SELECT * from user';
            connection.query(sql_str, function (error, results, fields) {
                connection.end();
                callback((error) ? error : results);
            });
        }
    }
    module.exports = obj;
})()
