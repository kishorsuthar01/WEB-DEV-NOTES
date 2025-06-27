// console.log("my name is kishor suthar")


// function example(){

//     let x=23
//     console.log(x)
// }
// example();
// console.log(x)

// let a=30
// a="kishor"
// a=34
// console.log(a)

// const a=23;
// a="kishor"
// console.log(a)

// let age=23
// let result=(age>13) ? "you can vote" : "you cannot vote"
// console.log(result)

// function kishor(a,b){
//     a=23
//     b=23
//     result=a+b
//     console.log(result)
// }

// kishor()

// function kishor(){
//     let a=23
//     let b=32
//     let result=a+b
//     console.log(result);
// }
// kishor()

// let getsum = (a,b)=>{
//     return a+b
// }
// console.log(getsum(3,23));

// let object={
// name:"kishor",
// age:19,
// weight:55,
// this:function(){
//     console.log("mera name kishor suthar hai");
// }
// }
// console.log(object);
// object.this()



// let arr=new Array('kishor','suthar','brother',23,true,12,432)
// arr.push('mitesh')
// arr.pop()
// arr.shift()
// arr.unshift('kishor')
// arr.slice(3,5)
// arr.splice(1,3,'mitesh')
// console.log(arr);


// let arr=[1,4,2,3,34,'kishor','suthar',]
// let result=arr.filter((numebr)=>{
//     return (typeof(numebr))==='number';
// })
// console.log(result);

// let arr=[23,42,12,32,123]
// let len=arr.length
// console.log(len);
// arr.forEach((index,value)=>{
//     console.log(value,index);
// })\


// let arr=[10,20,30,40,50]
// let getsum =function(arr){
//     let sum=0
//     arr.forEach((value)=>{
//         sum+=value
     
//     }
//     )
//     return sum
// }
// let len=getsum(arr)
// console.log(len);


// let arr=[10,20,30,40,50,12,31,22,12,21,21,21,312]
// let getsum=arr.reduce((value,index)=>{
// return value+index
// })
// console.log(getsum);


// function solver(number){
//     return function (number){
//         return number*number
//     }
// }
// let ans=solver(3)
// let result=ans(10)
// console.log(result);

// console.log();


// let arr=[
//     function (a,b){
//         return a+b
//     },
//     function (a,b){
//         return a-b
//     },
//     function (a,b){
//         return a*b
//     }
// ]

// let number=arr[0]
// let final=number(10,12)
// console.log(final);

// class bachho{
//     name='kishor';
//     age=12;
//     #vilage='bagra';

//     get fetchdata(){
//         return this.#vilage
//     }
     

// }
// let obj=new bachho()
// console.log(obj.fetchdata);

// function helloji(fname={name:"kishor",age:12}){
// console.log(fname);
// }


// class people{
//     name="kishor";
//     #age=20;
//     village="bagra"

//     constructor(first,second,third){
//         this.name=first;
//         this.#age=second;
//         this.village=third;

//     }

    // walking(){
    //     console.log("hello bhai ");
    // }
    // running(){
    //     console.log("mera name kishor hai");
    // }

//     get fetchdata(){
//         return this.#age
//     }

// }
// let obj=new people("mitesh",23,"ahmedabad");
// console.log(obj.village);


// function solver(){
//     return 123
// }

// function getdata(fname,lname=solver()){
//     console.log(fname,lname);
// }
// getdata("kishor")

// let srcr={
//     name:"kishor",
//     age:19,
//     village:"bagra"
// }

// let dest=Object.assign({},srcr)

// let dest={...srcr}
// srcr.name="kkroxx"
// console.log(srcr);
// console.log(dest);


// try{
    
//     console.log(c);
//     console.log("mera name kishor suthar hai");
// }
// catch(error){
// console.log("me ahmedabad me rahta hu");
// }
        


// let hy=document.querySelector('#first')

// let kkroxx=document.createElement('h1')
// kkroxx.textContent="my name is kishor"

// hy.insertAdjacentElement('')


// const t3=performance.now()
// let element=document.createElement('div')
// for(let i=0;i<=100;i++){
//     let para=document.createElement('p')
//     para.textContent="hello "+i
//    element.appendChild(para)
// }
// const t4=performance.now()
// console.log("this time is "+(t4-t3));
//  document.body.appendChild(element)


// const t1=performance.now()
// let mydiv=document.createElement('div')
// for(let i=0;i<=100;i++){
//     let para=document.createElement('p')

//     para.textContent="this  is "+i
//     mydiv.appendChild(para) 
// }
// const t2=performance.now()
// console.log("time is "+(t2-t1));

//  document.body.appendChild(mydiv)

// const t1=performance.now()
// let fregment=document.createDocumentFragment()
// for(let i=1;i<=100;i++){
//     let para=document.createElement('p')
//     para.textContent="hello para "+i
//     fregment.appendChild(para)
// }
// const t2=performance.now()
// document.body.appendChild(fregment)
// console.log(t2-t1);


