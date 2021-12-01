export class Video{
    constructor() {
        this.video = document.querySelector('.video')
        this.posicaoTela = document.querySelector('#body')
        this.posicaoTelaVideo = document.querySelector('#secao__video')
    }

    scrollVideo() {
        window.requestAnimationFrame(this.calculoScroll.bind(this));
    }

    calculoScroll() {
        const posicaoVideo = this.posicaoTela.getBoundingClientRect()['y'];
        const posicaoSecao = this.posicaoTelaVideo.getBoundingClientRect()['y']
        
        if(posicaoVideo <= -180) {
            this.video.style.width = `${-posicaoVideo/10.7}vw`
            this.video.style.height = `${-posicaoVideo/9.4}vh`
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

}