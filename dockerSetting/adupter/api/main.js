(function() {
    var obj = function(path, res) {
        this.run = () => {
            res.send(path);
        }
    }
    module.exports = obj;
})()
