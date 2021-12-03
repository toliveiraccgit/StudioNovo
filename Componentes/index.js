import { Video } from "./playVideo.js";
import { Carousel } from "./carrousel.js"
import { Scroll } from "./tituloScrol.js"


window.onload = () => {
    const animaVideo = new Video()
    document.addEventListener('scroll', animaVideo.scrollVideo.bind(animaVideo))

    const scroll = new Scroll()
    document.addEventListener('scroll', scroll.scrollTitulo.bind(scroll))   
}


const anterior = '[data-anterior]'
const proximo = '[data-proximo]'
const listaProdutos = '[data-lista-produtos]'

new Carousel(anterior, proximo, listaProdutos)
new Video()
