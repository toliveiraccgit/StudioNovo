import { Animacoes } from "./animacoes.js";
import { Scroll } from "./tituloScrol.js"


window.onload = () => {
    const animaVideo = new Animacoes()
    document.addEventListener('scroll', animaVideo.scrollVideo.bind(animaVideo))

    const scroll = new Scroll()
    document.addEventListener('scroll', scroll.scrollTitulo.bind(scroll))   
}
new Animacoes()

import { AbreMenu } from "./menuComponente.js";

new AbreMenu()
