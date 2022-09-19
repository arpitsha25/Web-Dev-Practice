// 1.
// alert("hello world");
// this will create a pop up message in browser with a message hello world


// 2.
// javascript code can be writeen in a html file in three ways
// ->inline js (written within the html tag with a script attribute )
// ->internal js (written within the script tags inside the html file)
// ->external js (written in otherfile which is later linked to the html file using script src)


// 3.
// comments in javascript:
// single line comment : use  //
// multi line comment : use  /* text */


//4.
//variables in javascript:
// let -> its scope is at block level
// var -> its scope is throughout the program
// const -> its value doesnt change throutgh program

// 5.
// Datatypes in javascript:

// var v1 =25;                  //number
// console.log(v1);

// var v2 =25.656;              //numer
// console.log(v2);

// var v3 ='arpit'              //string
// console.log(v3);

// var v4 = undefined;
// var v5;                      //undefined
// console.log(v4);
// console.log(v5);

// var v6 = null                 //null
// console.log(v6);

// var v7 = 8;
// var v8 =9;
// console.log(v7 == v8);       //boolean

// 6.
// Operators in JavaScript:
// ->arithmetic operators
// ->assignment operators
// ->comparision operators
// ->bitwise operators
// ->logical operators
// ->String operators

// arithmetic operations :

// var v1 =10;
// let v2 = 5;

// console.log('v1 + v2 = ', v1+v2);
// console.log('v1 - v2 = ', v1-v2);
// console.log('v1 * v2 = ', v1*v2);
// console.log('v1 / v2 = ', v1/v2);
// console.log('v1 % v2 = ', v1%v2);
// console.log('v1 ** v2 = ', v1**v2);

// assignment operations :

// console.log('v1 += 50 =', v1+=50);
// console.log('v1 -= 50 =', v1-=50);
// console.log('v1 *= 50 =', v1*=50);
// console.log('v1 /= 50 =', v1/=50);
// console.log('v1 %= 50 =', v1%=50);
// console.log('v1 **= 50 =', v1**=50);

// comparision operations :

// console.log('v1 == v2 =', v1==v2);
// console.log('v1 >= v2 =', v1>=v2);
// console.log('v1 <= v2 =', v1<=v2);
// console.log('v1 > v2 =', v1>v2);
// console.log('v1 < v2 =', v1<v2);
// console.log('v1 != v2 =', v1 != v2);

//logical operations :

// console.log('v1 && v2 =', v1 && v2);
// console.log('v1 || v2 =', v1 || v2);
// console.log('!v1 =', !v1);

//string operations:

// var v3 = 'arpit';
// var v4 = 'sharma';
// console.log('v3 = ', v3);
// console.log('v4 = ', v4);
// console.log('v3 + v4 =', v3+v4);        //concatenation of two strings

// v3+=' is a good boy';
// console.log('v3 =',v3);


// conditional statements in javascript :
//  -> if statement
//  -> if else statement
//  -> if else if statement
//  -> nested if statement

//  ->while loop
//  ->do while loop
//  ->for loop
//  ->switch statement
//  ->break and continue statement


// if
// let age = 25;
// if(age>=18)
// {
//   console.log('can vote');
// }
// else{
//   console.log("can't vote");
// }

// while
// while(age >= 18)
// {
//   console.log("can vote ")
//   age --;
// }

// do while
// do{
// console.log(age);
// }
// while(age < 18);

// for
// for(let i=0;i<10;i++)
// {
//   console.log(i);
// }

// break and continue
// for(let u=i=0;i<10;i++)
// {
//   if(i==5)
//   {
//     break;
//   }

//   if(i==3)
//   {
//     continue;
//   }
//   console.log(i);
// }

// switch case
// var num = 5;
// switch(num)
// {
// case 1 :
// console.log('one');
// break
// case 2 :
// console.log('two');
// break;
// case 3 :
// console.log('three');
// break;
// case 4 :
// console.log('four');
// break;
// case 5 :
// console.log('five');
// break
// default:
//   console.log('not forn 1-5');
//   break;
// }

//functions in javascript:
//functions are used to reduce the redundancy if the program
// it enhances reusability of a code snippet

// function average(a, b)
// {
//   return((a+b)/2);
// }
// c1 = average(10,20);
// c2 = average(25,54);
// console.log(c1, c2);


// string methods in javascript :


// var s1 = 'arpit sharma is working in TCS '
// var s2 = 'company';
// console.log(s1.length);                        //length of string
// console.log(s1.indexOf('p'));                  // index of certain char or string within string
// console.log(s1.lastIndexOf('i'));              // shows the last index of certain char or a substring
// console.log(s1.slice(7,18));                   //it extracts the part of an string as per the start and end index
// console.log(s1.slice(-17,-9));                  //slicing also accepts negative values which means string from back side
// console.log(s1.substring(4,11));                //subsrtin is same as slice, but it donot accepts -ve values
// console.log(s1.substr(8,5));                    //is is also same as slice but the second value in it the length of substring that to be extracted
// console.log(s1.replace('sharma', 'boy'));        //it replaces a certain word or character in the string
// console.log(s1.toUpperCase());                   //transforms whole string into upper case
// console.log(s1.toLowerCase());                  //transforms whole string into lower case
// console.log(s1.concat(' ' + s2));                //concat function adds the text to our existing stiring


// Arrays in javascript :

// In javascript arrays are special type ofobjects that can store multiple values
// index of array elements starts form 0 till n-1
// e.g :

// const myarray = [];            intializing an empty array

// array of strings
// const array1 =['car' , 'bus' , 'bike' , 'scooter' , 'truck'];

// for(let i=0;i<array1.length;i++)
// {
//   console.log(array1[i]);
// }

// array of numbers
// const array2 =[256, 45 , 798 , 22 , 65 , 55 , 45 , 52];
// for(let i=0;i<array2.length;i++)
// {
//   console.log(array2[i]);
// }

// array of mixed data
// const array3 =['car' , null , 45.654 , undefined , 422 , true];
// for(let i=0;i<array3.length;i++)
// {
//   console.log(array3[i]);
// }


//Arrays methods in javascript :

// const array1 = ['car', 'bus', 'biike', 'scooter', 'truck'];
// const array2 = ["hello" , 8456 , 15.4520];

// array1.push("tempo");                              //it appends element to the end of an array
// array1.unshift("cart");                            //it append element to the starting of an array
// array1.pop();                                      //it removes one element from the end of an array
// array1.shift();                                    //it removes one element from the start of an array
// console.log(array1.length)                         //shows the lenght of an array
// array1.sort();                                     // it sorts an array in ascending order
// console.log(array1.slice(1,3));                    //it prints the desired part of an array
// array1.splice(2 , 0 , 'train ' ,'aeroplane');      //At position 2, add 2 elements remove 0 elements
// array1.toString();                                  //converts whole array to s string type
// const array3 = array1.concat(array2);               //merges two or more arrays to one array

// console.log(array1);
// console.log(array3);


//DOM MANIPULATION IN JAVASCRIPT :

//The Document Object Model (DOM) is an application programming interface (API) for manipulating HTML documents.
// console.log("dom ")
// var a = document;
// //a =document.all;
// //a =document.forms;
// //a =document.forms[1];
// a = document.links;
// console.log(a);
//console.log(typeof(a));


// SELECTING ELEMENTS

// 1. getElementById
// 2  getElementsByName
// 3. getElementsByTagName
// 4. getElementsByClassName
// 5. select element using css slectors


//1 :
/* getElementById is a method of document object which returns
  an list elements with matching IDs */

//let temp = document.getElementById("p1")
//console.log("temp");

//let temp = document.getElementById("p1").innerHTML = "hiii";
//console.log(temp);

//2 :
/* getElementsByName is a method of document object which returns
  an list elements with matching attribute names */

// let temp = document.getElementsByName("btnname");
// document.getElementById("p1").innerHTML

//3 :
/* getElementsByTagName is a method of document object which returns
  an list elements with matching tag names */

// let temp = document.getElementsByTagName('div')
// console.log(temp);
// console.log(temp.length);

// 4 :
/* getElementsByClassName is a method of document object which returns
  an list elements with matching class names */

// let temp = document.getElementById("menu");
// let temp2 = document.getElementsByClassName("item");

// temp2[1].innerHTML = "c++";

// 5 :
/* The querySelector() is a method of the Element interface.
The querySelector() method allows you to select the first
element that matches one or more CSS selectors. */

// let temp = document.querySelector("div");
// temp.style.backgroundColor = "yellow";

// let temp = document.querySelectorAll(".item");
// for(let i = 0; i < temp.length; i++)
// {
//   temp[i].style.backgroundColor = "yellow";
// }


// ------------------------------------------------------------

// EVENTS IN JAVASCRIPT :

// events are the operations excuted after a certain activity

// 1. onclick() :

// USING ONCLICK IN HTML FILE

/*{ <input type="button" value="Save" onclick="alert('Clicked!')"></input> */

/*{ <script>
    function showAlert() {
        alert('Clicked!');
    }
</script>
<input type="button" value="Save" onclick="showAlert()"></input>}*/

// 2. using event fucntion seperately

// function clicked(){
// document.getElementById("menu").innerText = "hii";
// }

// function clicked() {
//   document.getElementById("cont").style.backgroundColor = "yellow";
// }

//3.  using event listeners

// addEventListener() – register an event handler
// removeEventListener() – remove an event handler

// let btn = document.getElementById("cont")
// console.log(btn);
// btn.addEventListener('click',function() {
//     alert('It was clicked!');
// });

// btn.addEventListener('mouseover',function(){
// alert("mouse over container 1");
// });


// btn.addEventListener('click', (event) => {
//   alert("clicked in the container1");
// });


// let btn = document.querySelector('#btn');

// btn.addEventListener('mouseover',(event) => {
//     alert("mouse over")
// });

// ----------------------------------------------------

// SET TIMEOUT AND SET INTERVAL :

// setTimeout allows us to run a function once after the interval of time.

// setInterval allows us to run a function repeatedly, starting after the
// interval of time, then repeating continuously at that interval.



// below code will execute the function after 2 seconds

// funcc = () =>{
//   alert("set time out fired")
// }
// setTimeout(funcc , 2000);


// below code will execute the code after 2 seconds and continously trigger that
// fucntion after an interval pf 2 seconds

// funcc = () =>{
//   alert("set time out fired")
// }
// let id = setInterval(funcc , 2000);


// in order to stop the contiouslly triggerd function
// clearInterval funtion is used

// setTimeout(()=>{clearInterval(id); alert("stopping the set interval")},10000);

