export class AbreMenu{
    constructor() {
        this.menuFixo = document.querySelector('#navbar')
        this.menuAberto = document.querySelector('#menu-aberto')

        this.botaoAbreMenu = document.querySelector('#botao__hamburguer')
        this.botaoFechaMenu = document.querySelector('#botao-fecha-menu')

        this.conteudoMenu = document.querySelector('#animacao__menu-opacity')

        this.conteudo = document.querySelector('#body')

        this.botaoAbreMenu.addEventListener('click', this.abrirMenu.bind(this))
        this.botaoFechaMenu.addEventListener('click', this.fechaMenu.bind(this))
    }

    abrirMenu(){
        const menuAberto = this.menuAberto
        const menuFixo = this.menuFixo
        const conteudoMenu = this.conteudoMenu
        const conteudo = this.conteudo
        menuAberto.style.animation = `menuDown .7s ease-in-out forwards`
        menuFixo.style.opacity = ` 0 `
        conteudoMenu.style.animation = ` opacidadeMenu 1.4s ease-in-out forwards `
        conteudo.style.scrollbarWidth = ` none `

    }

    fechaMenu(){
        const menuAberto = this.menuAberto
        const menuFixo = this.menuFixo
        const conteudoMenu = this.conteudoMenu
        menuAberto.style.animation = `menuUp .7s ease-in-out backwards`
        menuFixo.style.opacity = ` 1 `
        conteudoMenu.style.animation = ` opacidadeMenu 1.4s ease-in-out backwards `
    }

}