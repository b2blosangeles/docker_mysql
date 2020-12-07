(function() {
    var obj = function(path, pkg, cfg) {
        
        this.run = (callback) => {
            callback('cfg');
        }
    }
    module.exports = obj;
})()
