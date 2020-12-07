(function() {
    var obj = function(path, cfg) {
        this.run = (callback) => {
            callback(path);
        }
    }
    module.exports = obj;
})()
