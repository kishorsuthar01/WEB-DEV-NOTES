// function myname(){
//     console.log("kishor");
// }
// setTimeout(myname,5000)

// let promise=new Promise((resolve,reject)=>{
//     let success=false;
//     if(success){
//         resolve("promise fulfield")
//     }
//     else{
//        reject("promise reject")
//     }

// })

// promise.then((massage)=>{
//     console.log("the massage is :"+massage);
    
// }).catch((error)=>{
//     console.log("error :"+error);
// })


// let promise=new Promise((resolve,reject)=>{
//  setTimeout(resolve,1000,"first")
// })
// let promise1=new Promise((resolve,reject)=>{
//  setTimeout(resolve,2000,"second")
// })
// let promise2=new Promise((resolve,reject)=>{
//  setTimeout(resolve,1000,"third")
// })

// Promise.all([promise,promise1,promise2])
// .then((massage)=>{
//     console.log(massage);
// }).catch((error)=>{
//     console.error(error)
// }).finally((massage)=>{
// console.log("me to run hunga");
// })

function outer(){
    let name ="kishor"
    function innerfunction(){
        
        console.log(name);
    }
    return innerfunction;
}
let hello=outer()
hello()