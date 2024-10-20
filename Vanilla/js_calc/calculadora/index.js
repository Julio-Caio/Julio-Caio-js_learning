//Essa calculadora no momento só aceita fazer operações com apenas dois números, então, quando o usuário clicar no botão de igual, o operador será definido como undefined, para que o usuário possa fazer uma nova operação

const display= document.getElementById('display');
const numbers= document.querySelectorAll('[id*=btn]');
const math_operators = document.querySelectorAll('[id*=operator]');

var newNumber = true
var operator;
var lastNumber;

const operacaoPendente = () => operator != undefined ;

// Função para calcular o resultado de cada equação que for digitada
function calcular (){
  if (operacaoPendente() && newNumber.length != 0 && newNumber < 9) {
      let numeroAtual = parseFloat(display.textContent.replace('.','').replace(',', '.'));
      newNumber = true;

      if (operator  === '+') {
          let resultado = lastNumber + numeroAtual;
          atualizarDisplay(resultado);
      } else if (operator === '-') {
          let resultado = lastNumber -  numeroAtual;
          atualizarDisplay(resultado);
      } else if (operator  === '*') {
          let resultado = lastNumber * numeroAtual;
          atualizarDisplay(resultado);
      }
      else if (operator === '/') {
          resultado = (lastNumber / numeroAtual);
          atualizarDisplay(resultado);

          if(numeroAtual === 0){
            window.alert("Não é possível dividir por 0");
            cleanDisplay();
          }
          if(resultado.length > 9){
             atualizarDisplay(resultado.toFixed(4));
          }
      }
      else if (operator === '%') {
        let resultado = (lastNumber * 0.01);
        atualizarDisplay(resultado);
    }
      }
  };

// Função para atualizar o display, caso o número atual seja verdadeiro, o display será atualizado com o número digitado, caso contrário, o número digitado será acrescentado ao número já existente no display
const atualizarDisplay = (texto) => {
  if (newNumber) {
      display.textContent = texto;
      newNumber = false;
  } else {
      display.textContent += texto;
  }
};

// Chamamos aqui uma função para cada botão
const inserirNumero = (e) => atualizarDisplay(e.target.textContent);
numbers.forEach((numero) => numero.addEventListener('click', inserirNumero));

// Nessa função, se o número não for novo, o operador será selecionado e o número atual será armazenado na variável lastNumber
const selecionarOperador = (e) => {
  if (!newNumber){
      newNumber = true;
      operator = e.target.textContent;
      lastNumber = parseFloat(display.textContent.replace('.','').replace(',', '.'));
      console.log(operator);
  }
}

// Chamamos aqui uma função para cada operador
math_operators.forEach((operator) => operator.addEventListener('click', selecionarOperador))

function ativarIgual () {
  calcular();
  operator = undefined;
};
document.getElementById('igualdade').addEventListener('click', ativarIgual);

//Função para limpar o visor
const cleanDisplay = () => display.textContent = '';

document.getElementById('clean-display').addEventListener('click', cleanDisplay);

//Função para apagar o último número digitado no visor
function cleanLastNumber () {
   (display.textContent = display.textContent.slice(0, -1));
}
// Chamamos aqui a função para o botão de apagar o último numero através do id
document.getElementById('backspace').addEventListener('click', cleanLastNumber)

//Função para adicionar a vírgula no número 

const valor_decimal = () => display.textContent.indexOf(',') !== -1;

const addComma = () => {
    if (!valor_decimal()) {
        if (newNumber) {
            atualizarDisplay('0,');
        } else {
            atualizarDisplay(',');
        }
    }
};

document.getElementById('comma').addEventListener('click', addComma);