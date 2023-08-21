/*
  01

  - Faça com que ao clicar em um dos elementos dentro da div, a mensagem  
    'Clicou na div.' não seja exibida no console.
*/
// bloco const DOM
const div = document.querySelector('div')
const elementsInsideDiv = Array.from(div.children)
const h2 = document.querySelector('h2')
const egg = document.querySelector('.egg')
const button = document.querySelector('button')

//bloco eventos no DOM
elementsInsideDiv.forEach(element => {

  element.addEventListener('click', event => {
    const msnText = `Clicou no ${event.target.tagName.toLowerCase()},  filho da div.`
    event.stopPropagation()
    h2.textContent = `${msnText}` 
  })
})

div.addEventListener('click', () => {
  h2.textContent = 'Clicou na div.'
})

const copyH2 = ()=> {
  console.log('Texto copiado')
}

const cursorLocation = event=>{
  egg.textContent = `X:${event.offsetX} | Y:${event.offsetY}`
}

const changeColorEgg = () =>{
  egg.style.background = 'lightgoldenrodyellow'
}


h2.addEventListener('copy', copyH2)
egg.addEventListener('mousemove', cursorLocation)
button.addEventListener('click', changeColorEgg)
/*
  02

  - No código acima, faça com que quando um filho da div for clicado, a mensagem  
    exibida no console seja "Clicou no NOME_DA_TAG_COM_LETRAS_MINÚSCULAS, filho
    da div.".
*/

/*
  03

  - No index.html, abaixo da div sem classe, insira um h2;
  - Faça com que a mensagem de clique na div e a mensagem de clique em algum
    filho da div, ao invés de ser exibida no console, seja inserida neste h2.
*/

/*
  04

  - Faça com que quando o texto do h2 for copiado, a mensagem "Texto copiado!"  
    seja exibida no console.
*/

/*
  05

  - Faça com que o movimento do mouse dentro da div com a classe "egg" substitua
    o texto que ela tem por 
    "Eixo X: COORDENADA_EIXO_X | Eixo Y: COORDENADA_EIXO_Y".
*/

/*
  06

  - Modifique a cor do ovo para "lightgoldenrodyellow" quando o botão for 
    clicado.
*/

/*
  07

  - Se o array de pessoas abaixo conter, no mínimo, um(a) Front-end developer,
    exiba a mensagem abaixo no console.

    "O array people contém, no mínimo, um(a) Front-end developer."
*/

const people = [
  { id: 1, name: 'Pedro Henrique', profession: 'Dentista' },
  { id: 2, name: 'Fábio Alexandre', profession: 'Físico' },
  { id: 3, name: 'Thiago Ferreira', profession: 'Veterinário' },
  { id: 4, name: 'Marcelo Antonio', profession: 'Matemático' },
  { id: 5, name: 'Camilla Midori', profession: 'Engenheira Civil' },
  { id: 6, name: 'Gustavo D\'Aqui', profession: 'Gerente de Marketing' },
  { id: 7, name: 'Ana Paula', profession: 'Front-end developer' },
  { id: 8, name: 'Matheus Manucci', profession: 'Piloto' },
  { id: 9, name: 'Hamilton Silva', profession: 'Advogado' }
]

let wantedValue = 'Front-end developer'

const searchProfession = people.some(({profession}) => profession === wantedValue)

if(searchProfession){
  console.log('O array people contém, no mínimo, um(a) Front-end developer.')
} else {
  console.log('Essa profisão não existe no array')
}