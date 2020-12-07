(function() {
    var obj = function(path, callback) {
        this.run = () => {
            callback(path);
        }
    }
    module.exports = obj;
})()
