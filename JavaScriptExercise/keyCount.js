function calFun() {
	var elemts = document.getElementById('buttonId').getElementsByClassName('prescreen-button');
	elemts[0].disabled = true;
	document.getElementById("input").disabled = true;
// get the table content.
	var textPerLine = $('#input').val().split('\n');
	$("#result").show();
	$("#area").show();
	var map = {};
	for(var i = 0;i < textPerLine.length;i++){
		textParts = textPerLine[i].split(":");
		var value = parseInt(textParts[1]);
// Process only if value is not an integer and line contains data.
		if(/\S/.test(textParts) && !(isNaN(value))){
// If key is already present, sum up the values else create an entry in a map.
			if(textParts[0] in map){
				map[textParts[0]] = map[textParts[0]] + value;
			}else{
				map[textParts[0]] = value;
			}
		}
	}
// Display result
// Also check for palindrome and if it is, add class to prescreen-palindrome to that key.	
	for (var x in map){
		var dateSpan = document.createElement("span");
		dateSpan.innerHTML = "The total for " + x + " is " + map[x]+ '<br />';
		if(isKeyPalindrome(x)){
			dateSpan.className = "prescreen-palindrome";
		}else{
			dateSpan.className = "prescreen-output";
		}
		document.getElementById("result").appendChild(dateSpan);
	} 
}

// Convert to lower case to treat uppercase and lowercase letters as the same.
// Remove non-alphanumeric characters.
// Then check for palindrome. 
function isKeyPalindrome(key) {
	key = key.toLowerCase();
	key = key.replace(/\W/g,'');
	var inputHalfLength = key.length/2;
	var indexStartBack  = key.length-1;
// As palindrome is the same as backward as forward, execute the loop for (string length)/2.
	for(var cnt = 0; cnt < inputHalfLength; cnt++){
		if(key.charAt(cnt) != key.charAt(indexStartBack)){
			return false;
		}else{
			indexStartBack--;
		}
	} 
	return true;               
}

// Hide result area.
// Reset textarea with default values.
function resetFun() {
	document.getElementById("input").disabled = false;
	$("#result").find('span').remove();
	$("#result").hide();
	$("#area").hide();
	var elemts = document.getElementById('buttonId').getElementsByClassName('prescreen-button');
	elemts[0].disabled = false;
	var text = ["John: 2","Jane: 3","John: 4","Jane: 5","Bob: 3","Hannah: 6","Ah, Satan sees Natasha!: 18"];
	$('#input').val(text.join('\n'));
}

