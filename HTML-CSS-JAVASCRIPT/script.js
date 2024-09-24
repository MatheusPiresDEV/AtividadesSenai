var nomeGlobal;
var msgGlobal;

function conferirMensagemWhatsApp() {
  var nome = document.getElementById("nome").value;
  var mensagem = document.getElementById("mensagem").value;
  var confDiv = document.getElementById("rightDiv");

  nomeGlobal = nome;
  msgGlobal = mensagem;

  confDiv.style.display = "flex"
  document.getElementById("confNome").textContent = nome;
  document.getElementById("confMsg").textContent = mensagem;
}

function enviar() {
  var numeroTelefone = "5541988314597";

  var link =
    "https://wa.me/" +
    numeroTelefone +
    "?text=Nome: " +
    nomeGlobal +
    " - " +
    "Mensagem: " +
    msgGlobal;

  window.open(link, "_blank");
}