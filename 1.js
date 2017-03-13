//push
let a = ["1","2"];
console.log(a);
a.push('3');
console.log(a);

//slice
let b = ['zero','one','two','three'];
let sliced = b.slice(1,3);
console.log(b);
console.log(sliced);

//foreach method
var colors = ['red','green','blue'];
colors.foreach(
  (color)=> console.log(color)
)

//use forEach to add HTML elements
$(document).ready(function(){
 colors.forEach(
   (color)=>$('body').append(`<div>${color}</div>`)
 );
});


//MAP 1
var numbers=[1,2,3];
var doublenumbers;
//loop method
doublemumbers=[];
for(var i=0;i<numbers.length;i++){
  doublenumbers.push(numbers[i]*2);
}
console.log(doublenumbers);
// forEach method
doublenumbers=[];
doublenumbers=numbers.map(
  (numbers)=>number*2
);
console.log(doublenumbers);


//MAP 2
var cars=[
  {model:'Buick',price:'cheap'},
  {model:'BMW',price:'expensive'}
];
var price = cars.map((cars)=>car.price);
console.log(prices);

let state={a:1,b:2,c:3}
console.log(state)
state={...state,d:4}
console.log(state)
state={...state,a:10}
console.log(state)


//spread operator
function adder (base,...numbers){
numbers.forEach(function(number){
  console.log(base+number);
});
}
adder(3,5,7,1);
