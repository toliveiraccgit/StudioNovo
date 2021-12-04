export class Scroll{
    constructor() {
        this.posicaoTela = document.querySelector('#body')
        this.posicaoSecaoTitulo = document.querySelector('#secao__scroll___titulo')
        this.titulo1 = document.querySelector('#scroll-1')
        this.titulo2 = document.querySelector('#scroll-2')
        this.containerTitulo = document.querySelector('#container__titulo')
    }

    scrollTitulo() {
        window.requestAnimationFrame(this.calculoScroll.bind(this));
    }

    calculoScroll() {
        const posicaoTitulo = this.posicaoSecaoTitulo.getBoundingClientRect()['y'];
        const larguraBody = screen.width

        if (larguraBody >= 1025) {
            if (posicaoTitulo <= 6530) {
                this.titulo1.style.left = ` ${posicaoTitulo/35 - 25}%`
                this.titulo2.style.right = ` ${posicaoTitulo/35 - 30}% `
            }

        }
        
    }

    

}