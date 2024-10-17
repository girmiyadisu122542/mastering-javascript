//  let promise = new Promise(function(resolve, reject) {
//     //do something
//  })

let  count = true;
let countValue = new Promise(function(resolve, reject) {
    if(count)
        resolve("There is a count value");
    else 
        reject("There is no count value");
});

console.log(countValue);

const p = new Promise((resolve, reject) =>{
    let a = 1 + 2;
    if(a === 7) 
        resolve("Success");
    else
        reject("Error");
});

p.then((message) => {

    console.log(message);    
}).catch(err =>{
    console.log(err);
    
})

