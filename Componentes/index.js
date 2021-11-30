import { Video } from "./playVideo.js";

window.onload = () => {
    const animaVideo = new Video()
    document.addEventListener('scroll', animaVideo.scrollVideo.bind(animaVideo))
}
