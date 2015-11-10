// var sum = function(x, y){
// 	return(x+y); 
// }; 

// console.log(sum(1, 3)); 

// var isEqual = function(x, y){
// 	return(x===y); 
// }
// console.log(isEqual(1, 2)); 
// console.log(isEqual(1, 1)); 

var discountPercentage = function (price, percent){
	if ((percent > 99.9) || (percent < 0.01)){
		Window.alert("discount cannot be more than 99% or lower than 0.01%"); 
	}
	percent = percent/100; 
	console.log("Total discount amount is $" + price*percent); 
}
discountPercentage(10, 100); 