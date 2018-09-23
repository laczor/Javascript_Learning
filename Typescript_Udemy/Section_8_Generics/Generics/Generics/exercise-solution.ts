class MyMap<T> {
    elementType : {itemkey:string;value:T};
    mapArray: Array<elementType>;
    setItem(key: string, item: T): void {
        this.mapArray.push({   
				        	itemkey:key,
				        	value:item
					       });
    }
    getItem(key: string): T | boolean {
    	this.mapArray.forEach((element) => {
    		if(element.itemkey == key){
    			return element;
    		}
    	});
        return false;
    }
    clear():void{
    	// this.mapArray = this.mapArray.splice();
    	this.mapArray.forEach((element) => this.mapArray.shift(element));
    }
    printMap():void{
    	this.mapArray.forEach((element) => console.log(element));
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();