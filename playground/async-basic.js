
console.log('Starting app');

// registering a callback to get fired in 2s
setTimeout(()=>{
    console.log('Inside of callback');
}, 2000);

/*
    The functions in the callback queue will be executed after the call stack is empty
*/
setTimeout(()=>{
    console.log('Second time out');
}, 0);

console.log('Finishing app');

