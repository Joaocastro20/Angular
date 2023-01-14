
palindromo('aba'); // é palíndromo
palindromo('radar'); // é palíndromo
palindromo('xyzzyx'); // é palíndromo
palindromo('bola'); // não é palíndromo
palindromo('abcddcb'); // não é palíndromo
palindromo(''); // é palíndromo
palindromo('x'); // é palíndromo

function palindromo(s) {
  // implementar.
  let inverso = s.split('').reverse().join('')
  if(s == inverso){
    console.log('é palindromo')
  }else{
    console.log('nao é palindromo')
  }
}
