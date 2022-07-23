// console.log('helllo');

// var a = 10;
// const b = 20;
// let c = 30;
// c = 40;
// console.log(c)



// function sum(x,y){
//     return x + y
// }
// console.log(sum(20,30))


// sum=(a,b)=>{
//     return a + b
// }
// console.log(sum(80,20))

// multi=(num)=> num * num
// console.log(multi(10));



//  const multifly = multi=(X,Y)=>{
//     return X * Y
//  }
//  console.log(multi(10,20))



// const firstName = 'Mahidy Hasan';
// const lastName = 'Faysal';

// const fullName = `FirstName is "${firstName.toUpperCase()}" and lastName is "${lastName.toUpperCase()}"`
// console.log(fullName);



// const age = 24;

// if(age >= 18){
//     console.log('You can vote')
// }else{
//     console.log("You can't vote")
// }


// console.log(age >= 18? "you can vote" : 'you can\'t vote');


// const voter = age >= 18 && age <= 25 && 'You can vote';
// console.log(voter)




// const nums = [1,2,3,4];

// function double(){
//     let arr = []
//     for(i = 0; i < num.length; i++){
//         arr.push(num[i] * 2)
//     }
//     return arr
// }
// console.log(double(num))



// function double(){
//     let doubleArr= []
//     for(let num of nums){
//         doubleArr.push(num * 2)
//     }
//     return doubleArr
// }
// console.log(double(nums));\



//Declarative......
// const doubleNums = nums.map((num)=> {
//     return num * 3
// })
// console.log(doubleNums);



//map
// const nums = [10,20,30];
// function multiple(){
//     return nums.map((num)=>{
//         return num * 10
//     })
// }
// console.log(multiple());




//find
// const nums = [1,2,3,4,5,6,7,8,9];
// function findElm(elm){
//   return elm.find(num =>{
//        return num % 2=== 0
//   })

// }
// console.log(findElm(nums));




//filter
// const nums = [10,20,30,40,50,60];
// function filterElm(elements){
//     return elements.filter((elm)=>{
//         return elm > 10
//     })

// }
// console.log(filterElm(nums));



//destructuring
// const person = {
//     name : 'mahidy Hasan',
//     age : 23,
//     from : 'Barisal'
// }

// const  {name,age,from} = person; 
// console.log(name, age, from);
// console.log(`Name :  ${name}, Age : ${age}, From : ${from}`);




//rest operator
// const myInfo = {
//     name : 'mahidy hasan',
//     age : 22,
//     from : 'Barisal'
// }
// const {name,...restInfo} = myInfo;
// console.log(`My name is ${name}.`);
// console.log(restInfo);


// const elments = [1,2,3]
// function sum(x,y,z){
//     return x + y + z
// }
// console.log(sum(...elments))


// const arr = [1,2,3,4,5];
// const [x,y,...z] = arr
// console.log(x);
// console.log(y);
// console.log(z)


//spread

// function nums(x,y,...z){
//     console.log(`X = ${x}, Y = ${y}, Z = ${z}`)
// }

// (nums(10,20,30,40,50))


// let Info = {
//     name : 'Mahidy',
//     age : 22,
//     from : 'Barisal'
// }

// let newInfo = {
//     ...Info,
//     profession : 'Student'
// }
// console.log(newInfo)


// const arr = [1,2,3,4];
// const newArr = [...arr, 5,6,7];
// console.log(newArr)




// function personInfo({name,age, from}){
//     return {
//         name , age, from
//     }
// }


// const person = {
//     name : 'mahidy',
//     age : 22,
//     from : 'Barisal'
// }

// console.log(personInfo(person))






//Class 

// class Person {
//     name = 'Mahidy'
//     age = 22


//     showInfo(){
//         return this.name + ' , ' + this.age
//     }
// }

// const person = new Person();
// console.log(person);




//Class(Dinamically value access)

// class Person{
//     constructor(myName, myAge){
//         this.name = myName,
//         this.age = myAge
//     }

//     showInfo(){
//         return this.name + " , " + this.age
//     }

// }

// const person = new Person('Mahidy', 30);
// console.log(person.showInfo());



// class MyBio{

//     constructor(name,age,live){
//         this.name = name,
//         this.age = age,
//         this.live = live
//     }

//     showMyInfo(){
//         return this.name + ',' + this.age + ',' + this.live
//     }
// }

// const bio = new MyBio('Hasan Mahmud', 30, 'Chittogong');
// console.log(bio);
// console.log(bio.showMyInfo());



