class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

        this.variacaoY = variacaoY;
        this.yInicial = height - this.altura - this.variacaoY;
        this.y = this.yInicial;

        this.velocidadeDoPulo = 0;
        this.gravidade = 3;
        this.alturaDoPulo = -30;
        this.pulos = 0;

        this.invencivel = false;
    }

    pula() {
        if (this.pulos < 2) {
            this.velocidadeDoPulo = this.alturaDoPulo;
            this.pulos++;
        }
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

        // Personagem toca o chão
        if (this.y > this.yInicial) {
            this.pulos = 0;
            this.y = this.yInicial;
        }
    }

    estaColidindo(inimigo) {
        if (this.invencivel) {
            return false;
        }

        // noFill();
        // rect(this.x, this.y, this.largura, this.altura);
        // rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura);
        const precisao = 0.7;

        const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);
        return colisao;
    }

    tornarInvencivel() {
        this.invencivel = true;

        setTimeout(
            () => {
                this.invencivel = false;
            }, 1000
        );
    }
}