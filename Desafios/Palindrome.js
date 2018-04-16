function isPalindrome(str) {
    
    var newString = "";  
 
        for (var i = str.length - 1; i >= 0; i--) {
newString += str[i];
}
 if (newString == str) {  
    console.log("É um Palindromo!");
} 
else {
    console.log("Não é um Palindromo!");
}    
return newString + " - " + str;
}