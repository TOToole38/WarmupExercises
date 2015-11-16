function acronym(string){
 	myArray = string.split(""); 
 	secondArray = [];
 	myArray.forEach(function(element){
 		switch(element){
 			case "a": 
 				secondArray.push("Armadillo");
 				break;
 			case "b": 
 				secondArray.push("Bears"); 
 				break;
 			case "c": 
 				secondArray.push("Cobra"); 
 				break;
 			case "d": 
 				secondArray.push("Dutch Warmblood");
 				break;
 			case "e": 
 				secondArray.push("Elephants"); 
 				break;
 			case "f": 
 				secondArray.push("Fresian"); 
 				break;
 			case "g": 
 				secondArray.push("Gun Metal");
 				break;
 			case "h": 
 				secondArray.push("Hanovarian"); 
 				break;
 			case "i": 
 				secondArray.push("Indigo"); 
 				break;
 			case "j": 
 				secondArray.push("Jaguar");
 				break;
 			case "k": 
 				secondArray.push("Koala Bear"); 
 				break;
 			case "l": 
 				secondArray.push("Lions"); 
 				break;
 			case "m": 
 				secondArray.push("Matterhorn");
 				break;
 			case "n": 
 				secondArray.push("Nino"); 
 				break;
 			case "o": 
 				secondArray.push("Octogon"); 
 				break;
 			case "p": 
 				secondArray.push("Panda");
 				break;
 			case "q": 
 				secondArray.push("Quails"); 
 				break;
 			case "r": 
 				secondArray.push("Rottwieler"); 
 				break;
 			case "s": 
 				secondArray.push("Snakes");
 				break;
 			case "t": 
 				secondArray.push("Turkey"); 
 				break;
 			case "u": 
 				secondArray.push("Umbrella"); 
 				break;
 			case "v": 
 				secondArray.push("Vacation");
 				break;
 			case "w": 
 				secondArray.push("Warmblood"); 
 				break;
 			case "x": 
 				secondArray.push("XX"); 
 				break;
 			case "y": 
 				secondArray.push("YaddaYadda");
 				break;
 			case "z": 
 				secondArray.push("Zone"); 
 				break;
 			default: 
 				secondArray.push("None"); 
 		}
 	});
 			//console.log(secondArray);
 			var secondString = secondArray.join(' '); 
			console.log(secondString); 
}

acronym("wiopqeuioew");  
