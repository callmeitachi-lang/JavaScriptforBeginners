let car = {

   color:"Red",
   wheel:"4",
   value:600000,
   milege:21.23,

   carcolor : function()
   {
console.log(this.color);
   }
,
   carwheel :function()
   {
      console.log(this.wheel);
   }
,

 cardetails : function()
 {
  console.log(this.color);
  console.log(this.wheel);
  console.log(this.value);
  console.log(this.milege);
 
 }


}

console.log(car.carcolor());
console.log(car.cardetails());
console.log(car.carwheel());

// In Objects we use for in loop

for(let t in car)
{

console.log(car[t])

}
console.log(car["color"])

