
function Carray(){

    var elements = arguments;

    for(var i=0;i < elements.length;i++){

        var element = elements[i];

        this[i] = element
    }
    this.length = elements.length;
}

Carray.prototype.foreach = function(callback){

    for(var i=0;i < this.length;i++){

        var element = this[i];

        callback(element);
    }
}
Carray.prototype.find = function(callback){

    for(var i=0;i < this.length;i++){

        var element = this[i];

        var matches = callback(element);

        if(matches){
            return element;
        }
    }
}