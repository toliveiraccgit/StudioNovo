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
            this.video.style.width = `${-posicaoVideo/11}vw`
            this.video.style.height = `${-posicaoVideo/9.4}vh`
        }

        if (posicaoSecao <= -169.8125) {
            this.video.play()
        }else{
            this.video.pause()
            this.video.muted = false
            this.video.volume = 0.4
        }
           
        

}

}
