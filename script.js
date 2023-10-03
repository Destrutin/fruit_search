const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	str = str.toLowerCase();

	results = fruit.filter(fruits => {
		const fruitsLC = fruits.toLowerCase();
		return fruitsLC.includes(str);
	})
	return results;
}

function searchHandler(e) {
	console.log('searchHandler called');
	const inputVal = e.target.value;
	const results = search(inputVal);

	if(results.length > 0) {
		suggestions.classList.add('has-suggestions');
		// suggestions.style.display = 'block';
		// suggestions.style.opacity = '1';
		// suggestions.style.pointerEvents = 'auto';
		suggestions.style.visibility = 'visible';
	} else {
		suggestions.classList.remove('has-suggestions');
		// suggestions.style.display = 'none';
		// suggestions.style.opacity = '0'; 
    	// suggestions.style.pointerEvents = 'none';
		suggestions.style.visibility = 'hidden'
	}
	showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	console.log("showSuggestions called");
	suggestions.innerHTML = '';
	if(inputVal === '') {
		return;
	}
	results.forEach(result => {
		const li = document.createElement('li');
		const suggestion = result.toLowerCase();
		const inputText = inputVal.toLowerCase();
		if(suggestion.includes(inputText)) {
			const bSpan = document.createElement('span');
			bSpan.style.fontWeight = 'bold';
			bSpan.textContent = result.slice(0, inputVal.length);
			const remainingText = document.createTextNode(result.slice(inputVal.length));
			li.appendChild(bSpan);
			li.appendChild(remainingText);
		}
		suggestions.appendChild(li);
	});
}

function useSuggestion(e) {
	const clickedSuggestion = e.target;
	if(clickedSuggestion.tagName === 'LI') {
		input.value = clickedSuggestion.textContent;
		suggestions.innerHTML = '';
	};
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
// suggestions.addEventListener('mouseover', (e) => {
// 	const suggestion = e.target;
// 	if(suggestion.tagName === 'LI') {
// 		const allSuggestions = suggestions.querySelectorAll('li');
// 		allSuggestions.forEach(sugg => {
// 			sugg.style.backgroundColor = 'transparent';
// 		});
// 		suggestion.style.backgroundColor = 'orangered';
// 	}
// });