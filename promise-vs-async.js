const getUserName = async (userId) => {
    return 'Mike';
}

console.log(getUserName());   // Promise { 'Mike' }

// identical implementation
const getUserName2 = (userId) => {
    return new Promise((resolve, reject) => {
        resolve('Mike')
    });
}
console.log(getUserName2());   // Promise { 'Mike' }

// User the async function as a promise
getUserName().then((name)=>{
    console.log(name);
}).catch((e)=>{
    console.log(e);
});