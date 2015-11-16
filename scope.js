// var globalVar = 8; 

// function scopes(){
// 	var localScope = 5; 
// 	return localScope + globalVar; 
// }
// console.log(scopes()); 

// function printMe(x){
// 	return function(){
// 		console.log(x); 
// 	}
// }
// var y = printMe(1); 
// y(); 

// function helloHigherOrder(){
// 	console.log("Hello"); 
// 	return function(){
// 		console.log("Good-Bye"); 
// 	}
// }
// var y = helloHigherOrder(); 
// y(); 


// function add(x){
// 	return function(y){
// 		console.log(x+y); 
// 	}
// }

// var num = add(6); 
// num(9); 

// function arrayFun(){
// 	var nums = [1,2,3,4,5,6,7,8,9,10]; 
// 	return function(y){
// 		console.log(nums[y]); 
// 	}
// }
// var y = arrayFun(); 
// y(3);



// function evenOdd(x, e, o){
// 	if ((x%2)==0){
// 		e()
// 	}else{
// 		o(); 
// 		} 
// }

// function even(){
// 	console.log("even"); 
// }
// function odd(){
// 	console.log("odd"); 
// }
// var y = evenOdd(2, even, odd); 


//CALLBACK FUNCTION
// function exFunction(boo, fun1, fun2){
// if (boo == true){
// 	fun1("true");
// }else{ 
// 	fun2("false");
// 	}
// }

// function truthy(message){
// 	console.log("success: "+ message); 
// }
// function falsey(error){
// 	console.log("error: " + error); 
// }
// var x = exFunction(true, truthy, falsey);

//CLOSURE
// function myFunction(x){
// 	return function(y){
// 		console.log(x+y); 
// 	}
// }
// var z = myFunction(10); 
// var m = z(5); 