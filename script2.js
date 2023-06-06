function ABC(){
    return "H";
}
console.log(ABC())
//4
var girl=function(){
    console.log(x);
    var x=20;
   };
   girl();

   //5
   var x=21;
   girl();
    console.log(x);
    function girl(){
        console.log(x);
        var x=20;
    }
    //3
    const gfg= () => {
        console.log("Hi Prepbytes!");
    }
     
    gfg();
 //6
 var x=21;
    a();
    b();
    function a(){
         x=20;
          console.log(x);
    };
    function b(){
        x=40;
        console.log(x);
    };
   
//7
function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`I am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(20, 3));
//8
// Abc();
// const Abc=function(){
//     let value=20;
//     console.log(value);
// }
//9
var a=10;
(
    function (){
    console.log(a)
    var a=20;
})();
//10
const greet=function(name){
    return function(m){

        console.log('Hi!! ${name},${m}');
    }
}
const greet_message=greet('EA23');
greet_message("Welcome To Prepbytes")
//Add
function add()
{
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  sum = numOne + numTwo;
  document.getElementById("answer").value = sum;
}
//factorial
function fact(){
const number = parseInt(document.getElementById("num").value);

    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
   document.getElementById("answer2").innerHTML=`The factorial of ${number} is ${fact}.`;

}