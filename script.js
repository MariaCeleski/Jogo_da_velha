var jogador = 'x';
var jogada = 0; 

function checaJogo(id) {
  var src = checaImagem(id)
  var cpu = document.getElementById('cpu').checked;
  
  if (src == "branco.png") {
    document.getElementById(id).src = "imagens/" + jogador + ".png";
    jogada++;

    if (checaVitoria()) {
      alert("Fim do jogo!\nVitória do " + jogador);
      location.reload();
    }

    if (jogada >= 9 && !checaVitoria()) {
      alert("JOGO EMPATADO");
      location.reload();
    }

    if (jogador == "x") {
      jogador = "o";
    } else {
      jogador = "x";
    }
}
  if (cpu && jogador == "o" && !(checaVitoria())){
  checaJogo(jogadaDoComputador());
}
}
 
function jogadaDoComputador() {
  if (checaImagem("cel5") == "branco.png") {
    // console.log("cel5")
    return "cel5";
    // return "cel4";
    // return "cel7";
    // return "cel3";
  }
  var temp =  "cel" + Math.floor((Math.random() * 9 )+ 1);
  console.log(temp)
  return temp
  
}   
  
  
function checaImagem(id) {
  var src = document.getElementById(id).src;
  return src.substring(src.length - 10, src.length);
}

function checaVitoria() {
  if (
    checaImagem("cel1") == checaImagem("cel2") &&
    checaImagem("cel1") == checaImagem("cel3") &&
    checaImagem("cel1") != "branco.png"
  ) {
    return true;
  }
  if (
    checaImagem("cel4") == checaImagem("cel5") &&
    checaImagem("cel4") == checaImagem("cel6") &&
    checaImagem("cel4") != "branco.png"
  ) {
    return true;
  }
  if (
    checaImagem("cel7") == checaImagem("cel8") &&
    checaImagem("cel7") == checaImagem("cel9") &&
    checaImagem("cel7") != "branco.png"
  ) {
    return true;
  }
  if (
    checaImagem("cel1") == checaImagem("cel4") &&
    checaImagem("cel1") == checaImagem("cel7") &&
    checaImagem("cel1") != "branco.png"
  ) {
    return true;
  }
  if (
    checaImagem("cel2") == checaImagem("cel5") &&
    checaImagem("cel2") == checaImagem("cel8") &&
    checaImagem("cel2") != "branco.png"
  ) {
    return true;
  }
  if (
    checaImagem("cel3") == checaImagem("cel6") &&
    checaImagem("cel3") == checaImagem("cel9") &&
    checaImagem("cel3") != "branco.png"
  ) {
    return true;
  }
  if (
    checaImagem("cel1") == checaImagem("cel5") &&
    checaImagem("cel1") == checaImagem("cel9") &&
    checaImagem("cel1") != "branco.png"
  ) {
    return true;
  }
  if (
    checaImagem("cel3") == checaImagem("cel5") &&
    checaImagem("cel3") == checaImagem("cel7") &&
    checaImagem("cel3") != "branco.png"
  ) {
    return true;
  }
  return false;
}
