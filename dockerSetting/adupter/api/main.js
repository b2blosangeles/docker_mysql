(function() {
    var obj = function(MYSQL, dbcfg) {
        this.query = (MYSQL, data, callback) => {
            var cfg = {
                host: '10.10.10.254',
                user: 'root',
                port : '13306',
                password: passKey.key,
                database : 'mysql'
            };
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
