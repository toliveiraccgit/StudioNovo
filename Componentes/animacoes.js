export class Animacoes{
    constructor() {
        this.video = document.querySelector('.video-played')
        this.videoPoster = document.querySelector('.video-poster')
        this.posicaoTela = document.querySelector('#body')
        this.posicaoTelaVideo = document.querySelector('#secao__video')

        this.botaoMuta = document.querySelector('#botao__muta')
        this.botaoDesmuta = document.querySelector('#botao__desmuta')
        this.botaoPlay = document.querySelector('#botao-play')

        /*this.botaoDesmuta.addEventListener('click', this.desmutaVideo.bind(this))
        this.botaoMuta.addEventListener('click', this.mutaVideo.bind(this))*/
        this.botaoPlay.addEventListener('click', this.playVideo.bind(this))

        /*this.botaoDesmuta.addEventListener('click', this.showBotao.bind(this))
        this.botaoMuta.addEventListener('click', this.showBotao.bind(this))*/

        this.secaoCards = document.querySelector('#container__cards')
        this.secaoWorks = document.querySelector('#container__works')

       
    }

    scrollVideo() {
        window.requestAnimationFrame(this.calculoScroll.bind(this));
    }

    calculoScroll() {
        const posicaoVideo = this.posicaoTela.getBoundingClientRect()['y'];
        const posicaoSecao = this.posicaoTelaVideo.getBoundingClientRect()['y']
        
        const posicaoSecaoCards = this.secaoCards.getBoundingClientRect()['y']
        const posicaoBody = this.posicaoTela.getBoundingClientRect()['y']

        const larguraBody = screen.width

        if (larguraBody >= 1025) {
            /*if(posicaoVideo <= -180) {
                this.video.style.width = `${-posicaoBody/9.9}vw`
                this.video.style.height = `${-posicaoBody/9.18}vh`
            }*/
    
            if (posicaoSecao <= 958) {
                this.video.volume = 0.1
            }
            if (posicaoSecao > -713){
                this.video.volume = 0.4
            }
            /*
            if (posicaoSecao <= -839) {
                this.video.pause()   
            }*/

            /*if (posicaoSecao <= 3529) {
                this.secaoCards.scroll((-posicaoBody/3.3 - 10), 0)
                this.secaoWorks.style.top = ` ${-posicaoSecaoCards/75 + 8}% `
            }*/
        }

        /*if (larguraBody >= 1600) {
            if (posicaoSecao <= 5000) {
                this.secaoCards.scroll((-posicaoBody/3.8), 0)
                this.secaoWorks.style.top = ` ${-posicaoSecaoCards/75 + 8}% `
            }
        }*/
         
        console.log(posicaoSecao)
    }

    desmutaVideo() {
        this.video.muted = false
    }
    mutaVideo() {
        this.video.muted = true
    }
    playVideo(){
        this.video.play()
        this.video.currentTime = '0'
        this.video.controls = true
        this.video.volume = 0.4
        this.video.muted = false
        this.botaoPlay.style.animation = ' animaBotaoPlay .2s ease-in-out forwards '
    }

    /*showBotao() {
        const botaoMuta = this.botaoMuta
        const botaoDesmuta = this.botaoDesmuta
    
        if (this.video.muted == true) {
            botaoDesmuta.style.display = ` block `
            botaoMuta.style.display = ` none `
        }else{  
            botaoDesmuta.style.display = ` none `
            botaoMuta.style.display = ` block `
        }
    }*/
    
}