var a=5,b=4;

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)

console.log(5**4) // Its an exponential operator,where 5 will multipled 4 times 5*5*5*5



// Increment and decrement operator

var c=7;
console.log(c++) // pro incre----Here Incr will happen but output will show as 7 , If we republish the output again then it will bcm 8
console.log(c)
console.log(++c)// It will increase the value and print it directly--->pre incre

console.log(c--)  // post decre
console.log(c)
console.log(--c)// pre dre

// Assignment operator

var d=5;
d=d+5;  //Instead of this we can use a assignment operator
console.log(d) 
d+=4;
console.log(d) 
d-=5;
console.log(d) 
d/=6;
console.log(d) 
d*=9;
console.log(d) 

//Comparison operator

var e=10;
var g=11;
console.log(e==g)
console.log(e!=g)
console.log(e>g)
console.log(e<g)
console.log(e>=g)
console.log(e<=g)

// terinary operator

var r=10;
var v=5;

var f=v>r?"Hello":"world"
console.log(f)

// In case of == operator , the data comparison is specfic to any data, it will give us boolean only

var t=10,b="10";
console.log(t==b)
// So, Instead of this we can use === for two different data type 

console.log(t===b)
console.log(t!==b)

//logical operators 

var a=10,b=9;
console.log(a>b && b>a)
console.log(a>b || b<a)


const x=10; // Once constant value 
//x=5;
console.log(x)
//x=19;
//console.log(x)



