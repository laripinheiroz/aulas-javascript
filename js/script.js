var io = {
  num: function (msg, opts) {
    opts = opts || {};
    var isInt = opts.int === true;
    while (true) {
      var raw = prompt(msg);
      if (raw === null) return null; // cancelado
      var n = isInt ? parseInt(raw, 10) : Number(raw);
      if (!isNaN(n)) return n;
      alert("Por favor, digite um número válido.");
    }
  },
  text: function (msg) {
    var v = prompt(msg);
    return v === null ? null : v.trim();
  },
  show: function (id, value) {
    var el = document.querySelector("#out-" + id);
    if (el) el.textContent = String(value);

    if (typeof console !== "undefined" && console.log) {
      console.log("[" + id + "]", value);
    }
  }
};


var tasks = {
  1: function () {
    var a = io.num("Informe o primeiro número:");
    var b = io.num("Informe o segundo número:");
    if (a === null || b === null) return "Operação cancelada.";
    return "Soma: " + (a + b);
  },
  2: function () {
    var a = io.num("Informe o primeiro número:");
    var b = io.num("Informe o segundo número:");
    if (a === null || b === null) return "Operação cancelada.";
    return "Subtração (primeiro − segundo): " + (a - b);
  },
  3: function () {
    var a = io.num("Informe o primeiro número:");
    var b = io.num("Informe o segundo número:");
    if (a === null || b === null) return "Operação cancelada.";
    return "Multiplicação: " + (a * b);
  },
  4: function () {
    var a = io.num("Informe o dividendo:");
    var b = io.num("Informe o divisor (≠ 0):");
    if (a === null || b === null) return "Operação cancelada.";
    if (b === 0) return "Divisão por zero não é permitida.";
    return "Divisão: " + (a / b);
  },
  5: function () {
    var n = io.num("Informe um número inteiro:", { int: true });
    if (n === null) return "Operação cancelada.";
    return n % 2 === 0 ? (n + " é par.") : (n + " é ímpar.");
  },
  6: function () {
    var n = io.num("Informe um número:");
    if (n === null) return "Operação cancelada.";
    return n > 0 ? "Positivo." : n < 0 ? "Negativo." : "Zero.";
  },
  7: function () {
    var nome = io.text("Qual é o seu nome?");
    if (nome === null) return "Operação cancelada.";
    alert("Olá, " + nome + "!");
    return "Saudação enviada para " + nome + ".";
  },
  8: function () {
    var idade = io.num("Qual é a sua idade?", { int: true });
    if (idade === null) return "Operação cancelada.";
    return idade >= 18 ? "Maior de idade." : "Menor de idade.";
  },
  9: function () {
    var a = io.num("Informe o primeiro número:");
    var b = io.num("Informe o segundo número:");
    if (a === null || b === null) return "Operação cancelada.";
    return a === b ? "Os dois são iguais." : "Maior: " + Math.max(a, b);
  },
  10: function () {
    var a = io.num("Informe o primeiro número:");
    var b = io.num("Informe o segundo número:");
    if (a === null || b === null) return "Operação cancelada.";
    return a === b ? "Iguais." : "Diferentes.";
  },

  11: function () {
    var n1 = io.num("Nota 1:");
    var n2 = io.num("Nota 2:");
    var n3 = io.num("Nota 3:");
    if (n1 === null || n2 === null || n3 === null) return "Operação cancelada.";
    var media = (n1 + n2 + n3) / 3;
    var status = media >= 7 ? "Aprovado(a)" : media >= 5 ? "Recuperação" : "Reprovado(a)";
    return "Média: " + media.toFixed(2) + " • Situação: " + status;
  },
  12: function () {
    var ano = io.num("Ano de nascimento:", { int: true });
    if (ano === null) return "Operação cancelada.";
    var atual = new Date().getFullYear();
    var idade = atual - ano;
    return idade >= 16 ? "Pode votar (idade: " + idade + ")." : "Não pode votar (idade: " + idade + ").";
  },
  13: function () {
    var n = io.num("Informe um número:");
    if (n === null) return "Operação cancelada.";
    return (n >= 10 && n <= 50) ? "Está entre 10 e 50 (inclusive)." : "Fora do intervalo.";
  },
  14: function () {
    var n = io.num("Informe um número inteiro:", { int: true });
    if (n === null) return "Operação cancelada.";
    return n % 5 === 0 ? "Múltiplo de 5." : "Não é múltiplo de 5.";
  },
  15: function () {
    var a = io.num("Informe o primeiro número:");
    var b = io.num("Informe o segundo número:");
    var op = io.text("Escolha a operação (+, -, *, /):");
    if (a === null || b === null || op === null) return "Operação cancelada.";
    switch (op) {
      case "+": return "Resultado: " + (a + b);
      case "-": return "Resultado: " + (a - b);
      case "*": return "Resultado: " + (a * b);
      case "/": return b === 0 ? "Divisão por zero não é permitida." : "Resultado: " + (a / b);
      default: return "Operação inválida.";
    }
  },
  16: function () {
    var preco = io.num("Preço do produto (R$):");
    if (preco === null) return "Operação cancelada.";
    return "Preço com 10% de desconto: R$ " + (preco * 0.9).toFixed(2);
  },
  17: function () {
    var n = io.num("Informe um número inteiro:", { int: true });
    if (n === null) return "Operação cancelada.";
    return (n % 3 === 0 && n % 5 === 0) ? "Divisível por 3 e por 5." : "Não é divisível por 3 e 5 ao mesmo tempo.";
  },
  18: function () {
    var idade = io.num("Informe a idade:", { int: true });
    if (idade === null) return "Operação cancelada.";
    if (idade <= 12) return "Faixa etária: criança.";
    if (idade <= 17) return "Faixa etária: adolescente.";
    if (idade <= 64) return "Faixa etária: adulto.";
    return "Faixa etária: idoso(a).";
  },
  19: function () {
    var a = io.num("Número 1:");
    var b = io.num("Número 2:");
    var c = io.num("Número 3:");
    if (a === null || b === null || c === null) return "Operação cancelada.";
    return "Maior: " + Math.max(a, b, c) + " • Menor: " + Math.min(a, b, c);
  },
  20: function () {
    var n = io.num("Informe um número:");
    if (n === null) return "Operação cancelada.";
    return (n > 0 && n < 100) ? "É positivo e menor que 100." : "Não atende às duas condições.";
  },

  21: function () {
    var d = io.num("Informe um número de 1 a 7:", { int: true });
    if (d === null) return "Operação cancelada.";
    var nomes = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    return (d >= 1 && d <= 7) ? ("Dia: " + nomes[d - 1] + ".") : "Valor inválido.";
  },
  22: function () {
    var m = io.num("Informe o número do mês (1–12):", { int: true });
    if (m === null) return "Operação cancelada.";
    var nomes = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    return (m >= 1 && m <= 12) ? ("Mês: " + nomes[m - 1] + ".") : "Valor inválido.";
  },
  23: function () {
    var m = io.num("Informe o número do mês (1–12):", { int: true });
    if (m === null) return "Operação cancelada.";
    var dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return (m >= 1 && m <= 12) ? ("Quantidade de dias: " + dias[m - 1] + ".") : "Valor inválido.";
  },
  24: function () {
    var fruta = (io.text("Digite o nome da fruta:") || "").toLowerCase();
    if (fruta === null) return "Operação cancelada.";
    var preco;
    switch (fruta) {
      case "maçã":
      case "maca": preco = 3.5; break;
      case "banana": preco = 4.0; break;
      case "uva": preco = 7.9; break;
      case "laranja": preco = 3.2; break;
      default: return "Fruta sem preço cadastrado.";
    }
    return "Preço da " + fruta + ": R$ " + preco.toFixed(2) + "/kg";
  },
  25: function () {
    var nota = (io.text("Digite o conceito (A, B, C, D, F):") || "").toUpperCase();
    if (nota === null) return "Operação cancelada.";
    switch (nota) {
      case "A": return "Excelente.";
      case "B": return "Bom.";
      case "C": return "Regular.";
      case "D": return "Ruim.";
      case "F": return "Reprovado(a).";
      default: return "Conceito inválido.";
    }
  },
  26: function () {
    var time = (io.text("Digite o nome do time:") || "").toLowerCase();
    if (time === null) return "Operação cancelada.";
    switch (time) {
      case "corinthians": return "Corinthians: maior de todos!";
      case "palmeiras": return "Palmeiras: não tem mundial!";
      case "santos": return "Santos: time pequeno.";
      case "são paulo":
      case "sao paulo": return "São Paulo: time pequeno.";
      default: return (time.toUpperCase() + ": time do coração — aprovado.");
    }
  },
  27: function () {
    var cor = (io.text("Digite uma cor:") || "").toLowerCase();
    if (cor === null) return "Operação cancelada.";
    switch (cor) {
      case "vermelho": return "Vermelho: energia no máximo!";
      case "azul": return "Azul: foco e serenidade.";
      case "verde": return "Verde: estudar com calma e constância.";
      case "amarelo": return "Amarelo: criatividade ligada!";
      case "rosa": return "Rosa: Feminilidade e delicadeza!";
      case "vinho": return "Vinho: Feminilidade e sofisticação!";
      default: return (cor + ": vibe única.");
    }
  },
  28: function () {
    var a = io.num("Informe o primeiro número:");
    var b = io.num("Informe o segundo número:");
    var op = io.text("Escolha a operação (+, -, *, /):");
    if (a === null || b === null || op === null) return "Operação cancelada.";
    switch (op) {
      case "+": return "Resultado: " + (a + b);
      case "-": return "Resultado: " + (a - b);
      case "*": return "Resultado: " + (a * b);
      case "/": return b === 0 ? "Divisão por zero não é permitida." : "Resultado: " + (a / b);
      default: return "Operação inválida.";
    }
  },
  29: function () {
    var nome = io.text("Qual é o seu nome?");
    if (nome === null) return "Operação cancelada.";
    var hora = io.num("Informe a hora atual (0–23):", { int: true });
    if (hora === null) return "Operação cancelada.";
    if (hora >= 0 && hora <= 11) return "Bom dia, " + nome + "!";
    if (hora <= 17) return "Boa tarde, " + nome + "!";
    if (hora <= 23) return "Boa noite, " + nome + "!";
    return "Hora inválida.";
  },
  30: function () {
    var menu = "Menu\n1) Somar dois números\n2) Par ou Ímpar\n3) Média de três notas\n4) Sair";
    while (true) {
      var op = io.num(menu + "\n\nEscolha uma opção:", { int: true });
      if (op === null || op === 4) return "Saindo do menu.";
      switch (op) {
        case 1: {
          var a = io.num("Informe o primeiro número:");
          var b = io.num("Informe o segundo número:");
          if (a === null || b === null) break;
          alert("Soma: " + (a + b));
          break;
        }
        case 2: {
          var n = io.num("Informe um número inteiro:", { int: true });
          if (n === null) break;
          alert(n % 2 === 0 ? "Par." : "Ímpar.");
          break;
        }
        case 3: {
          var n1 = io.num("Nota 1:");
          var n2 = io.num("Nota 2:");
          var n3 = io.num("Nota 3:");
          if (n1 === null || n2 === null || n3 === null) break;
          alert("Média: " + ((n1 + n2 + n3) / 3).toFixed(2));
          break;
        }
        default:
          alert("Opção inválida.");
      }
    }
  }
};


var specs = [
  [1,"Somar dois números","easy"],
  [2,"Subtrair (primeiro − segundo)","easy"],
  [3,"Multiplicar dois números","easy"],
  [4,"Dividir dois números","easy"],
  [5,"Verificar se é par ou ímpar","easy"],
  [6,"Verificar se é positivo, negativo ou zero","easy"],
  [7,"Saudar pelo nome (alert)","easy"],
  [8,"Classificar maioridade","easy"],
  [9,"Maior entre dois números","easy"],
  [10,"Comparar: iguais ou diferentes","easy"],
  [11,"Média de 3 notas + situação","medium"],
  [12,"Pode votar? (≥ 16 anos)","medium"],
  [13,"Está entre 10 e 50?","medium"],
  [14,"É múltiplo de 5?","medium"],
  [15,"Mini calculadora por operação","medium"],
  [16,"Preço com 10% de desconto","medium"],
  [17,"Divisível por 3 e por 5?","medium"],
  [18,"Faixa etária","medium"],
  [19,"Maior e menor entre três números","medium"],
  [20,"Positivo e menor que 100?","medium"],
  [21,"Dia da semana (1–7)","hard"],
  [22,"Mês do ano (1–12)","hard"],
  [23,"Quantidade de dias do mês","hard"],
  [24,"Preço da fruta","hard"],
  [25,"Conceito (A–F) → significado","hard"],
  [26,"Frase divertida por time","hard"],
  [27,"Mensagem por cor","hard"],
  [28,"Mini calculadora (switch)","hard"],
  [29,"Saudação por horário (0–23)","hard"],
  [30,"Menu interativo (switch)","hard"]
];

function cardHTML(id, title){
  return ''
  + '<div class="card">'
  +   '<span class="tag" aria-hidden="true">Exercício ' + id + '</span>'
  +   '<h3>' + title + '</h3>'
  +   '<button class="btn" onclick="run(' + id + ')" aria-label="Executar exercício ' + id + ' — ' + title + '">'
  +     'Executar'
  +   '</button>'
  +   '<div class="out" id="out-' + id + '" aria-live="polite">Resultado aparecerá aqui…</div>'
  + '</div>';
}

for (var i = 0; i < specs.length; i++) {
  var item = specs[i];
  var id = item[0], title = item[1], group = item[2];
  var container = document.getElementById(group);
  if (container) {
    container.insertAdjacentHTML('beforeend', cardHTML(id, title));
  }
}

window.run = function (id) {
  try {
    var res = tasks[id]();
    if (res !== undefined) io.show(id, res);
  } catch (err) {
    io.show(id, "Erro: " + err.message);
  }
};

var yearEls = document.querySelectorAll(".js-year");
for (var j = 0; j < yearEls.length; j++) {
  yearEls[j].textContent = new Date().getFullYear();
}
