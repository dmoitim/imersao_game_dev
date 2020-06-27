class Pontuacao {
    constructor() {
        this.pontos = 0;
        this.jaGanhouVida = false;
    }

    exibe() {
        textAlign(RIGHT);
        textSize(50);
        fill('#fff');
        text(parseInt(this.pontos), width - 30, 50);
    }

    adicionarPonto() {
        this.pontos = this.pontos + 0.2;

        if (this.pontos > 1 && (parseInt(this.pontos) % 50) === 0) {
            if (!this.jaGanhouVida) {
                vida.ganhaVida();
                this.jaGanhouVida = true;
            }
        } else {
            this.jaGanhouVida = false;
        }
    }
}