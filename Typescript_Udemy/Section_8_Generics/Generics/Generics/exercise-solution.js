var MyMap = /** @class */ (function () {
    function MyMap() {
        this.elementType = [];
    }
    MyMap.prototype.setItem = function (key, item) {
        this.mapArray.push({
            itemkey: key,
            value: item
        });
    };
    MyMap.prototype.getItem = function (key) {
        this.mapArray.forEach(function (element) {
            if (element.itemkey == key) {
                return element;
            }
        });
        return false;
    };
    MyMap.prototype.clear = function () {
        var _this = this;
        // this.mapArray = this.mapArray.splice();
        this.mapArray.forEach(function (element) { return _this.mapArray.shift(element); });
    };
    MyMap.prototype.printMap = function () {
        this.mapArray.forEach(function (element) { return console.log(element); });
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
