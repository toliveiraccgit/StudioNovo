export class AbreMenu{
    constructor() {
        this.menuFixo = document.querySelector('#navbar')
        this.menuAberto = document.querySelector('#menu-aberto')

        this.botaoAbreMenu = document.querySelector('#botao__hamburguer')
        this.botaoFechaMenu = document.querySelector('#botao-fecha-menu')

        this.conteudoMenu = document.querySelector('#animacao__menu-opacity')

        this.botaoAbreMenu.addEventListener('click', this.abrirMenu.bind(this))
        this.botaoFechaMenu.addEventListener('click', this.fechaMenu.bind(this))
    }

    abrirMenu(){
        const menuAberto = this.menuAberto
        const menuFixo = this.menuFixo
        const conteudoMenu = this.conteudoMenu
        menuAberto.style.animation = `menuDown .6s ease-in-out forwards`
        menuFixo.style.opacity = ` 0 `
        conteudoMenu.style.animation = ` opacidadeMenu 1s ease-in-out forwards `

    }

    fechaMenu(){
        const menuAberto = this.menuAberto
        const menuFixo = this.menuFixo
        const conteudoMenu = this.conteudoMenu
        menuAberto.style.animation = `menuUp .6s ease-in-out backwards`
        menuFixo.style.opacity = ` 1 `
        conteudoMenu.style.animation = ` opacidadeMenu .1s ease-in-out backwards `
    }

}