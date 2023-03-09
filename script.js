document.getElementById("btnEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" &&
     document.getElementById("email").value != "" &&
     document.getElementById("telefone").value != "" ){

    alert("Prontinho! Agora você receberá as novidades por e-mail 😉")
  }else{
    alert("Por favor, preencha os campos de Nome e E-mail 😅")
  }
}
