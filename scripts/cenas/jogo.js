class Jogo {
    constructor() {
        this.inimigoAtual = 0;
    }

    setup() {
        pontuacao = new Pontuacao();
        cenario = new Cenario(imagemCenario, 3);
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 100);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10, 100);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 100);

        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);
    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            somDoPulo.play();
            personagem.pula();
        }
    }

    draw() {
        cenario.exibe();
        cenario.move();
    
        personagem.exibe();
        personagem.aplicaGravidade();
    
        const inimigo = inimigos[this.inimigoAtual];
        const inimigoVisivel = inimigo.x < -inimigo.largura;
    
        inimigo.exibe();
        inimigo.move();
    
        if (inimigoVisivel) {
            this.inimigoAtual++;
    
            if (this.inimigoAtual > (inimigos.length - 1)) {
                this.inimigoAtual = 0;
            }
    
            inimigo.velocidade = parseInt(random(10, 30));
        }
    
        if (personagem.estaColidindo(inimigo)) {
            image(imagemGameOver, (width / 2) - 200, height / 2);
            noLoop();
        }
    
        pontuacao.exibe();
        pontuacao.adicionarPonto();
    }
}