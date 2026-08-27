//Dados básicos
let nome = prompt("Digite seu nome: ");
let disciplina = prompt("Digite o nome da disciplina: ");
let cargaHoraria = Number(prompt("Digite a carga horária da disciplina: "));
let faltas = Number(prompt("Digite o número de faltas que possui nessa disciplina: "));

let nota1 = Number(prompt("Digite a sua nota do primeiro bimestre: "));
let nota2 = Number(prompt("Digite a sua nota do segundo bimestre: "));
let nota3 = Number(prompt("Digite a sua nota do terceiro bimestre: "));
let nota4 = Number(prompt("Digite a sua nota do quarto bimestre: "));

//Cálculos
let frequencia = (((cargaHoraria - faltas) / cargaHoraria) * 100).toFixed(2);
let media = ((nota1+nota2+nota3+nota4)/4).toFixed(2);

// Verifica se o aluno foi aprovado, está em recuperação ou reprovado
let situacao;
if ((media>=7) && (frequencia>=75)){
  situacao = "APROVADO! ";
}
else if ((media<7 && media>=5) && (frequencia>=75)){
  situacao = "RECUPERAÇÃO";
}
else if ((media<5) && (frequencia>=75)){
  situacao = "REPROVADO POR NOTA";
}
else if (frequencia<75){
  situacao = "REPROVADO POR FALTA";
}

//Verifica o desempenho do aluno
let desempenho;
if ((media>=9 && media<=10)){
  desempenho = "EXCELENTE";
}
else if ((media>=7 && media<9)){
  desempenho = "BOM";
}
else if ((media>=5 && media<7)){
  desempenho = "REGULAR";
}
else if (media<5){
  desempenho = "INSUFICIENTE";
}

//Apresentação do boletim

alert(
 `MEU BOLETIM ESCOLAR

ALUNO: ${nome}
DISCIPLINA: ${disciplina}

NOTA 1: ${nota1}
NOTA 2: ${nota2}
NOTA 3: ${nota3}
NOTA 4: ${nota4}

MÉDIA FINAL: ${media}

FALTAS: ${faltas}
FREQUÊNCIA: ${frequencia}%

SITUAÇÃO: ${situacao}
DESEMPENHO: ${desempenho}`
);