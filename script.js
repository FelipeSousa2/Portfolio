function criptografar() {
  var originalText = document.getElementById("originalText").value;
  var resultadoDiv = document.getElementById("resultado");

  // Criptografar o texto (exemplo simples, pode ser melhorado)
  var textoCriptografado = "";

  for (var i = 0; i < originalText.length; i++) {
    var charCode = originalText.charCodeAt(i);
    var encryptedCharCode = charCode + 1;
    textoCriptografado += String.fromCharCode(encryptedCharCode);
  }

  resultadoDiv.innerHTML =
    "<strong>Texto Criptografado:</strong><br />" + textoCriptografado;
}

function descriptografar() {
  var originalText = document.getElementById("originalText").value;
  var resultadoDiv = document.getElementById("resultado");

  // Descriptografar o texto (reverter a criptografia)
  var textoDescriptografado = "";

  for (var i = 0; i < originalText.length; i++) {
    var charCode = originalText.charCodeAt(i);
    var decryptedCharCode = charCode - 1;
    textoDescriptografado += String.fromCharCode(decryptedCharCode);
  }

  resultadoDiv.innerHTML =
    "<strong>Texto Descriptografado:</strong><br />" + textoDescriptografado;
}

function copiarTexto() {
  var resultadoDiv = document.getElementById("resultado");

  // Seleciona o texto dentro da div de resultado
  var textoParaCopiar = resultadoDiv.textContent || resultadoDiv.innerText;

  // Cria um elemento de input para copiar o texto para a área de transferência
  var input = document.createElement("textarea");
  input.value = textoParaCopiar;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);

  alert("Texto copiado para a área de transferência!");
}
