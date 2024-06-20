function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.key === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if(!conta) {
                    alert("Conta inválida");
                    return;
                }

                this.display.value = String(conta);
            } 
            catch(e) {
                alert("Erro na conta");
                return
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUmCaracter(){
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes(){
            // this -> calculadora
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUmCaracter();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();