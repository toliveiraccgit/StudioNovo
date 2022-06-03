const containerForm = document.querySelector('.container__secao___form')
const secaoForm = document.querySelector('.secao__form___contato')


function abreForm(){
    containerForm.style.display = ` flex `;

    secaoForm.style.display = ` flex `;
}

function fechaForm(){
    containerForm.style.display = ` none `;

    secaoForm.style.display = ` none `;
}

window.onclick = function(event) {
    if (event.target == containerForm | event.target == secaoForm) {
        containerForm.style.display = ` none `;

        secaoForm.style.display = ` none `;
    }
} 