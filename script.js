//variavel de controle do laço principal
let jogarNovamente = "SIM";

while (jogarNovamente.toUpperCase() === "SIM") {

  alert("JOGO DA ADIVINHAÇÃO\n\nO COMPUTADOR VAI ESCOLHER UM NÚMERO.\nTENTE ADIVINHAR EM ATÉ 7 TENTATIVAS");

  //escolha do nível de dificuldade
  let nivel = prompt(
    "ESCOLHA O NÍVEL DE DIFICULDADE:\n" +
    "1 - FÁCIL (1 a 20)\n" +
    "2 - MÉDIO (1 a 50)\n" +
    "3 - DIFÍCIL (1 a 100)"
  );
  nivel = Number(nivel);

  //define o limite máximo de acordo com o nível escolhido
  let limiteMaximo;
  if (nivel === 1) {
    limiteMaximo = 20;
  } else if (nivel === 2) {
    limiteMaximo = 50;
  } else {
    limiteMaximo = 100;
  }

  //gera o número secreto aleatório
  let numeroSecreto = Math.floor(Math.random() * limiteMaximo) + 1;

  //variáveis de controle do jogo
  let tentativas = 0;
  const maxTentativas = 7;
  let acertou = false;

  //pontuação inicial do jogador
  let pontuacao = 100;

  //laço das tentativas do jogador
  while (tentativas < maxTentativas && !acertou) {

    let palpite = Number(prompt(
      "TENTATIVA " + (tentativas + 1) + " DE " + maxTentativas + ":\n" +
      "DIGITE UM NÚMERO ENTRE 1 E " + limiteMaximo + ":"
    ));

    tentativas++;

    if (palpite === numeroSecreto) {
      acertou = true;
    } else if (palpite > numeroSecreto) {
      alert("O NÚMERO SECRETO É MENOR");
      pontuacao -= 10;
    } else {
      alert("O NÚMERO SECRETO É MAIOR");
      pontuacao -= 10;
    }
  }

  //resultado final do jogo
  if (acertou) {
    if (pontuacao < 0) {
      pontuacao = 0;
    }
    alert(
      "PARABÉNS!\n\n" +
      "VOCÊ ACERTOU\n" +
      "NÚMERO DE TENTATIVAS UTILIZADAS: " + tentativas + "\n" +
      "PONTUAÇÃO: " + pontuacao + " pontos"
    );
  } else {
    alert(
      "VOCÊ PERDEU\n\n" +
      "SUAS TENTATIVAS ACABARAM.\n" +
      "O NÚMERO SECRETO ERA: " + numeroSecreto
    );
  }

  //pergunta se o jogador quer jogar novamente
  jogarNovamente = prompt("QUER JOGAR DE NOVO? (SIM/NAO)");

  if (jogarNovamente === null) {
    jogarNovamente = "NAO";
  }
}