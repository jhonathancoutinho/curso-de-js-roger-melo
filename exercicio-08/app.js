/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/

// function calculate (number1 = 0, number2 = 0) {
//   return number1 * number2
// }

// const resultCalculate = calculate(2, 2)

// console.log(resultCalculate)


/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/

// const division = function (number01 = 0,  number02 = 0) {
//         return number01 / number02
//  }

//  const resultDivision = division(8, 4)

// console.log(resultDivision)

/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/
// function valueReceived (number1 = 0) {
  
//   for (let i = 0; i < number1; i++){
//     let counter = i + 1
//     console.log(`Esta é a ${counter}ª vez que essa string é exibida.`)
//   }
// }

//  valueReceived(7)


/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']


// function newArray (millennialWords) {
//   let newMillenniaWords = []
//   for (let i = 0; i < millennialWords.length; i++) {
//     newMillenniaWords.push(millennialWords[i].toUpperCase())
//   }
//   return newMillenniaWords
// }

// const result = newArray(millennialWords)

// console.log(result)
/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]



// function positiveNumber (randomNumbers) {
//   let countPositive = []

//     for (let i = 0; i < randomNumbers.length; i++) {
//       if(randomNumbers[i] > 0){
//         countPositive.push(randomNumbers[i])
//       } 
//     }
//     return countPositive.length
// }
// const resultPositive = positiveNumber(randomNumbers)


// console.log(`O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${resultPositive} positivos e ${ randomNumbers.length - resultPositive} negativos.`)


/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

// const oddNumbers = [83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42]
// let newOddNumbers = []

// function getOddNumbers(oddNumbers){

// for (let i = 0; i < oddNumbers.length; i++){
//     if(oddNumbers[i] % 2 !== 0){
//       newOddNumbers.push(oddNumbers[i])
//     }
//   }
//   return newOddNumbers
// }

// getOddNumbers(oddNumbers)

// console.log(newOddNumbers)

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]

// let frase = []


// function newFrase (functions){
// for ( let i = 0; i < functions.length; i++){
//     frase.push(functions[i]())
//   }
//   return frase
// }

// newFrase(functions)

// console.log(frase.join(' '))