var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

var el = document.getElementById("planets");

function returnPlanets(planet){
	el.innerHTML += planet + " ";
}

planets.forEach(returnPlanets);

// Use the map method to create a new array where the first letter of each planet is capitalized

function firstCap(element){
	return element[0].toUpperCase() + element.slice(1);
}

el.innerHTML += "<br>" + planets.map(firstCap);



// Use the filter method to create a new array that contains planets with the letter 'e'




el.innerHTML += "<br>" + planets.filter(function(element){
	if (element.indexOf("e") !== -1) {
		return element;
	}
});

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

el.innerHTML += "<br>" + words.reduce(function(first, second){
	return first + " " + second;
});






