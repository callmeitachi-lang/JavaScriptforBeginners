function hello()
{

var h=10;
console.log(h)

}


hello();

// the difference between let and var is that let scope 
//is within the block and var can be accessed outiside the function block
/***
 * Difference between var and let keywords
var is function scoped
let is block scoped 
var attaches the variables to the DOM window, hence its not recommended to use
Going a head, we will use let in place of var.
Practical Demonstration
 */

function hello1(){

let g=10;
console.log(g)


}
console.log(g)
hello1();


