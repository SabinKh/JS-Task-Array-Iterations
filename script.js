// ~~~~~~~~~Array Iteration(ForEach)~~~~~~~~~


// let numbers=[25,22,10,13,31];
// numbers.forEach((value,index,array)=>{
    
//     console.log(`value :${value} index :${index} array :${array}`);
// });

//  let numbers=[25,22,10,13,31];
//  for (let index = 0; index < numbers.length; index++) {
        
        
//      }
//      console.log(numbers);




// ~~~~~~~~~Array Iteration(Map)~~~~~~~~~

// let numbers=[25,22,10,13,31];
// let newArr=[];
// numbers.map(value=>{
//     newArr.push(value*2)
// })
// console.log(newArr);


// let numbers=[25,22,10,13,31];
// let newArr=numbers.map(myfunction);
// function myfunction(value){
//     return value*2;
// }
// console.log(newArr);

// let numbers=[25,22,10,13,31];
// let newArr=numbers.map(value=>{
//     return value*3;
// })
// console.log(newArr);


// let numbers=[25,22,10,13,31];
// for (let index = 0; index < numbers.length; index++) {
//     numbers[index]*=2
    
// }
// console.log(numbers);




//~~~~~~~~~Array Iteration(Filter)~~~~~~~~~

// let numbers=[25,22,10,13,31];
// let newArr=numbers.filter(value=>{
//     return value<22;
// })
// console.log(newArr);

// let numbers=[25,22,10,13,31];
// for (let index = 0; index < numbers.length; index++) {
//       if (numbers[index]>10) {
//           console.log(numbers[index]);
//       }
        
//     }



//~~~~~~~~~Array Iteration(Reduse)~~~~~~~~~


// let numbers=[1,2,3,4,5];
// let sum=numbers.reduce((total,value)=>{
//     return total+=value;
// })
// console.log(sum);


// ?
// let numbers=[1,2,3,4,5];
// let sum=0;
// for (let index = 0; index < numbers.length; index++) {
//     sum+=numbers[index]
    
// }
// console.log(sum);


// ~~~~~~~~~Array Iteration(Every)~~~~~~~~~

// let numbers=[1,2,3,4,5];
// let result=numbers.every(value=>{
//     return value>2;
// })
// console.log(result);

// let numbers=[1,2,3,4,5];
// for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index]>2) {
//         console.log(true);
//     }
//     else{
//         console.log(false);
//         break;
//     }
    
// }


// ~~~~~~~~~Array Iteration(Some)~~~~~~~~~

// let numbers=[25,22,10,13,31];
// let result=numbers.some(value=>{
//     return value>10;
// })
// console.log(result);


// let numbers=[25,22,10,13,31];
// for (let index = 0; index < numbers.length; index++) {
//         if (numbers[index]>10) {
//             console.log(true);
//             break;
//         }
       
        
//     }


// ~~~~~~~~~Array Iteration(IndexOf)~~~~~~~~~

// let numbers=[25,22,10,13,31];
// let num=numbers.indexOf(22);
// console.log(num);


// let numbers=[25,22,10,13,31];
// for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index]==10) {
//         console.log(index);
//         break;
//     }
// }


// ~~~~~~~~~Array Iteration(LastIndexOf)~~~~~~~~~

// let numbers=[25,22,10,13,22,31];
// let num=numbers.lastIndexOf(22);
// console.log(num);

// let numbers=[25,22,10,13,31];
// for (let index = numbers.length-1; index >=0;  index--) {
//     if (numbers[index]==10) {
//         console.log(index);
//         break;
//     }
// }


// ~~~~~~~~~Task1~~~~~~~~~


// let word = "Tabriz Habiyev";
// function reverse(s){
//   return s.split("").reverse().join("")
// }
// console.log(reverse(word));






