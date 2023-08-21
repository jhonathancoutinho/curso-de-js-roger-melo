/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/
const uls = document.querySelector('ul')

Array.from(uls.children).forEach( element =>{
  element.classList.add('video')
})

/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/

const h2 = document.querySelector('h2')

console.log(h2.parentElement)

/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/

const h1s = document.querySelector('h1')

console.log(h1s.nextElementSibling)

/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

console.log(uls.previousElementSibling)


/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/
const lis = document.querySelectorAll('li')

lis.forEach(li =>{
  li.addEventListener('click', event=>{
    console.log(event.target)
  })
})


/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
}, {
  name: 'Como refatorar um for loop | JavaScript',
  length: '00:04:18'
}, {
  name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}]

const button = document.querySelector('button')
let index = 0

button.addEventListener('click', ()=>{
    if(index < videos.length){
      const video = videos[index]
      const li = document.createElement('li')
      li.textContent = `${video.name} | ${video.length}`
      uls.append(li)
      index++
    } else {
      alert('Não a mais vídeos a ser adicionado')
    }
})


/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/

const bodyHome = document.querySelector('body')

h1s.addEventListener('click', ()=>{
    bodyHome.remove()
})