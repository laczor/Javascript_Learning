
class MyMap<T> {  //<T> is the type of the stored object elements
//this is the private variable, which stored unkown array of string keys, and T type values, which is basically an empty object
    private map: {[key: string]: T} = {};
//Add a new key item to the object
    setItem(key: string, item: T) {
        this.map[key] = item;
    }
//retrive the item
    getItem(key: string) {
        return this.map[key];
    }
//make this an empty object
    clear() {
        this.map = {};
    }
//You can loop over the keys in the map object
    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem("apples", 10);
numberMap.setItem("bananas", 2);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem("apples", "10");
stringMap.setItem("bananas", "2");
console.log(stringMap.getItem("apples"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();