function setup() {
    createCanvas(windowWidth, windowHeight);

    jogo = new Jogo();
    jogo.setup();

    telaInicial = new TelaInicial();

    frameRate(40);
    somDoJogo.loop();

    cenas = {
        jogo: jogo,
        telaInicial: telaInicial
    };

    botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
}

function draw() {
    cenas[cenaAtual].draw();
}

function keyPressed() {
    jogo.keyPressed(key);
}