(function() {
    var obj = function(path, cfg) {
        this.run = (callback) => {
            callback(cfg);
        }
    }
    module.exports = obj;
})()
