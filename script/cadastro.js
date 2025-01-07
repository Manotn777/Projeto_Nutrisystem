const form   = document.getElementById('form');
const campos = document.querySelectorAll('.validacao');
const spans  = document.querySelectorAll('.mensagem');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function erro(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeErro(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function validaEmail() {
    if (emailRegex.test(campos[0].value)) {
        removeErro(0);
    } else{
        erro(0);
    }
}


function validaTamanho(){
    if(campos[1].value.length <= 9){
        erro(1);
        validaSenha();
    } else{
        removeErro(1);
    }

}

function validaSenha() {
    if (campos[1].value == campos[2].value) {
        removeErro(2);
    } else{
        erro(2);
    }
}