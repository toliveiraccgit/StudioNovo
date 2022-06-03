const labelInput1 = document.querySelector('.label__input___form-contato')

function mudaCorBranco1(){
    labelInput1.style.color = ` #FDFEFF `

}

function mudaCorCinza1(){
    labelInput1.style.color = ` #666666 `
}

function preenchido1(){
    if (document.querySelector('#Nome').value && " ") {
        labelInput1.style.color = ` #FDFEFF `
    }
}


const labelInput2 = document.querySelector('#label-form-2')

function mudaCorBranco2(){
    labelInput2.style.color = ` #FDFEFF `

}

function mudaCorCinza2(){
    labelInput2.style.color = ` #666666 `
}
function preenchido2(){
    if (document.querySelector('#Nome-Empresa').value && " ") {
        labelInput2.style.color = ` #FDFEFF `
    }
}


const labelInput3 = document.querySelector('#label-form-3')

function mudaCorBranco3(){
    if( document.forms[0].email.value=="" 
       || document.forms[0].email.value.indexOf('@')==-1 
         || document.forms[0].email.value.indexOf('.')==-1){
            labelInput3.style.color = ` #FF1919 `
            document.querySelector('#Email').style.color = ` #FF1919 `
            document.querySelector('#Email').style.borderBottom = ` 2px solid #FF1919 `
         }else{
            labelInput3.style.color = ` #FDFEFF `
         }


}

function mudaCorCinza3(){
    labelInput3.style.color = ` #666666 `
}
function preenchido3(){
    if (document.querySelector('#Email').value && " ") {
        labelInput3.style.color = ` #FDFEFF `
    }
}
function checarEmail(){
    if( document.forms[0].email.value=="" 
       || document.forms[0].email.value.indexOf('@')==-1 
         || document.forms[0].email.value.indexOf('.')==-1){
            labelInput3.style.color = ` #FF1919 `
            document.querySelector('#Email').style.color = ` #FF1919 `
            document.querySelector('#Email').style.borderBottom = ` 2px solid #FF1919 `
            document.querySelector('.span__erro-email').style.display = ` block `
         }else{
            labelInput3.style.color = ` #FDFEFF `
            document.querySelector('#Email').style.color = ` #FDFEFF `
            document.querySelector('#Email').style.borderBottom = ` 2px solid #FDFEFF `
            document.querySelector('.span__erro-email').style.display = ` none `
        }
}

const labelInput4 = document.querySelector('#label-form-4')


function mudaCorBranco4(){
    labelInput4.style.color = ` #FDFEFF `

}

function mudaCorCinza4(){
    labelInput4.style.color = ` #666666 `
}

function preenchido4(){
    if (document.querySelector('#mensagem').value && " ") {
        labelInput4.style.color = ` #FDFEFF `
    }
}


function preenchidoBotao(){
    if (document.querySelector('#mensagem').value && " " && document.querySelector('#Nome').value && " " && document.querySelector('#Nome-Empresa').value && " " && document.querySelector('#Email').value && " ") {
        document.querySelector('.botao__envia___form-contato').style.backgroundColor = ` #FFFFFF ` 
    }else{
        document.querySelector('.botao__envia___form-contato').style.backgroundColor = ` #666666 ` 
    }
}
