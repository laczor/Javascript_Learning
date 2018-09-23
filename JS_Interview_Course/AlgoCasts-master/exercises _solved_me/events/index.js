// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
	constructor(){
		this.events = {};
	}
  // Register an event handler
  on(eventName, callback) {

  	if(!this.events[eventName]){
  		this.events[eventName] = [callback];	
  	}else{
  		this.events[eventName].push(callback);
  	}
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
  	let event = this.events[eventName];
  	if (event == null){return};
  	for(let i=0;i<event.length;i++){
  		event[i]();
  	}
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
  //Delete is 100 times slover, the assigning null.	
  	// delete this.events[eventName];
  	this.events[eventName] = null;
  }
}


  let events = new Events();
  console.log('created Events Obj',events);

  const cb1 = function(){
  	console.log('event1');
  };
  const cb2 = function(){
  	console.log('event2');
  };

  events.on('click', cb1);
  events.on('click', cb2);
  events.trigger('click');
  console.log('created Events Obj2',events);
  events.off('click');

  console.log('created Events ObjFinal',events);

module.exports = Events;
