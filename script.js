class Parquimetro {

    constructor(valor) {
        this.valor = valor;
    }

    calcularTempo() {

        if (this.valor >= 1.00 && this.valor < 1.75) {
            return 30;
        } else if (this.valor >= 1.75 && this.valor < 3.00) {
            return 60;
        } else if (this.valor >= 3.00) {
            return 120;
        } else {
            return 0;
        }
    }

    calcularTroco() {

        if (this.valor < 1.00) {
            return 0;
        } else if (this.valor < 1.75) {
            return this.valor - 1.00;
        } else if (this.valor < 3.00) {
            return this.valor - 1.75;
        } else {
            return this.valor - 3.00;
        }
    }
};

const inputValor = document.getElementById('valorInserido');

inputValor.addEventListener('keydown', (evento) => {

    if (evento.key === 'Enter') {
        calcular();
    }

});

const calcular = () => {

    const valorInserido = Number.parseFloat(document.getElementById('valorInserido').value);

    const resultado = document.getElementById('resultado');

    if (isNaN(valorInserido)) {
        resultado.textContent = "Valor inválido. Certifique-se de que o valor inserido é um número.";
        return;
    } else if (valorInserido < 1.00) {
        resultado.textContent = 'Valor insuficiente.';
        return;
    }

    const parquimetro = new Parquimetro(valorInserido);

    const tempo = parquimetro.calcularTempo();

    const troco = parquimetro.calcularTroco(); 

    resultado.textContent = `Estacionamento: ${tempo} minutos. \n Troco: R$ ${troco.toFixed(2)}`;

    const valorInseridoElement = document.getElementById('valorInserido');
    valorInseridoElement.value = '';
};