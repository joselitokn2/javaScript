
function palindromo(pal){ 
    var palabra = new String(pal);
    console.log(palabra);
    if (palabra.length > 1){
        console.log(palabra.charAt(0) + " " + palabra.charAt(palabra.length - 1))
        if((palabra.charAt(0) == palabra.charAt(palabra.length - 1))){
            return palindromo(palabra.substring(1,palabra.length-1));
        }
        else{
            return false;
        }
    }
    return true;
}

console.log(palindromo("oso")); 
console.log(palindromo("casa"));
console.log(palindromo("reconocer"));
console.log(palindromo("ordenador"));