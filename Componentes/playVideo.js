export class Video{
    constructor() {
        this.video = document.querySelector('.video')
        this.posicaoTela = document.querySelector('#body')
        this.posicaoTelaVideo = document.querySelector('#secao__video')

        this.botaoMuta = document.querySelector('#botao__muta')
        this.botaoDesmuta = document.querySelector('#botao__desmuta')

        this.botaoDesmuta.addEventListener('click', this.desmutaVideo.bind(this))
        this.botaoMuta.addEventListener('click', this.mutaVideo.bind(this))

        this.botaoDesmuta.addEventListener('click', this.showBotao.bind(this))
        this.botaoMuta.addEventListener('click', this.showBotao.bind(this))
    }

    scrollVideo() {
        window.requestAnimationFrame(this.calculoScroll.bind(this));
    }

    calculoScroll() {
        const posicaoVideo = this.posicaoTela.getBoundingClientRect()['y'];
        const posicaoSecao = this.posicaoTelaVideo.getBoundingClientRect()['y']
        
        if(posicaoVideo <= -180) {
            this.video.style.width = `${-posicaoVideo/10}vw`
            this.video.style.height = `${-posicaoVideo/9.18}vh`
        }

        if (posicaoSecao <= -41.8125) {
            this.video.play()
            this.video.volume = 0.4
        }else{
            this.video.pause()
        }
        if (posicaoSecao <= -927.8125) {
            this.video.pause()   
        }
    }

    desmutaVideo() {
        this.video.muted = false
    }
    mutaVideo() {
        this.video.muted = true
    }

    showBotao() {
        const botaoMuta = this.botaoMuta
        const botaoDesmuta = this.botaoDesmuta
    
        if (this.video.muted == true) {
            botaoDesmuta.style.display = ` block `
            botaoMuta.style.display = ` none `
        }else{  
            botaoDesmuta.style.display = ` none `
            botaoMuta.style.display = ` block `
        }
    }


}