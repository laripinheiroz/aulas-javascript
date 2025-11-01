# Aulas JS — Operadores e Comparações

Exemplos comentados de operadores *aritméticos*, *de comparação* e *lógicos* em JavaScript.

## Como rodar o projeto
Abra index.html no navegador. O código executável está em js/script.js.  
Este README é apenas *anotação* com exemplos.

## Operadores aritméticos
```js
var soma1 = 100 + 50;   // 150
var sub1  = 100 - 50;   // 50
var mul1  = 100 * 2;    // 200
var exp1  = 2 ** 4;     // 16 (potenciação)
var mod1  = 14 % 5;     // 4  (resto da divisão)

var somaStr = '100' + 50;       // "10050" (concatena)
var subStr  = '100' - 50;       // 50       (conversão p/ número)
var mulStr  = '100' * '2';      // 200
var divStr  = 'Comprei 10' / 2; // NaN (Not a Number)

console.log(typeof subStr); // "number"

10 > 5;    // true
5 > 10;    // false
20 < 10;   // false
10 <= 10;  // true
10 >= 11;  // false

// =   atribui valor
// ==  compara valor (com conversão de tipo)
// === compara valor E tipo (sem conversão)
10 == '10';   // true
10 === '10';  // false
10 === 10;    // true
10 != 15;     // true
10 != '10';   // false
10 !== '10';  // true

// AND (&&): retorna o primeiro valor "falsy" ou o último se todos forem "truthy"
true && true;        // true
true && false;       // false
'Gato' && 'Cão';     // "Cão"   (ambos truthy → retorna o segundo)
(5 - 5) && (5 + 5);  // 0       (0 é falsy, para aqui)
'Gato' && false;     // false
(5 >= 5) && (3 < 6); // true

// OR (||): retorna o primeiro "truthy"
true || false;       // true
false || true;       // true
'Gato' || 'Cão';     // "Gato"
(5 - 5) || (3 < 6);  // true    (0 é falsy → pega o segundo)

5 + 3 / 2;     // 6.5  (divisão antes)
(5 + 3) / 2;   // 4  (adição antes)

var a = 5 + 3;           // 8
var b = a % 5;           // 8 % 5 = 3
var c = 5 * (b ** 2);    // 5 * 9 = 45   (potenciação antes de multiplicar)
var d = 10 - a / 2;      // 10 - 4 = 6
var e = (6 * 2) / d;     // 12 / 6 = 2
var f = (b % e) + 4 / e; // (3 % 2) + 2 = 1 + 2 = 3

---

## Dicas pra manter as “cores”
- Sempre abra e feche blocos com *três crases* (backticks) e informe a linguagem: ` js `, ` css `, ` ```html `.
- Não misture crases com tios (~~~) e não escreva texto na *mesma linha* do fechamento.
- Se ficar tudo de uma cor (geralmente amarelo), normalmente é *aspas não fechada* dentro do bloco.

Nota: uso var em alguns exemplos para acompanhar o curso. Em projetos atuais, prefiro let/const.