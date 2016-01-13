
if (!Array.prototype.smap) {
    Array.prototype.smap = function(callback, thisObject) {
        var fun = function(item){
            return [callback(item)];
        };
        return this.map(fun);
    }
}

