// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).ready(
  function () {
    $("#formCadastro").submit(function (e) {
      e.preventDefault();
      Cadastrar();
    })
  }
)

function Cadastrar() {
  let parametros = {
    Nome: $("#nome").val(),
    Email: $("#email").val(),
    Mensagem: $("#mensagem").val(),
  }
  $.post("/Home/Cadastrar", parametros)

    .done(
      function (data) {
        if (data.status == "OK") {
          $("#formCadastro").after('<p>Obrigado por nos enviar uma mensagem. Em breve lhe retornamos através do email informado.</p>');
          $("#formCadastro").hide();
        } else {
          $("#form").after('<h4>Erro ao enviar cadastro</h4>');
          $("#form").hide();
        }
      }
    ).fail(function () {

    })
}
