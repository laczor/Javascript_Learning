// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');   
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');


/*
*****What if we click while the call stack is being executed?*****
*/
// 'finished funciton'
// 'finished execution'
// 'click evenet'

/*First the call stack is executed, then it will check the queue stack, created by the event checking loop*/
/*The events will be processed in the order they happened*/