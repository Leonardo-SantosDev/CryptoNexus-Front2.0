// Função exportada que permite rolar suavemente para uma seção específica da página
export default function rolarParaSecao(idSecao, duracao) {
    // Seleciona o elemento da seção pelo ID fornecido
    const secaoAlvo = document.getElementById(idSecao);
    
    // Calcula a posição da seção em relação ao topo do documento
    const posicaoAlvo = secaoAlvo.getBoundingClientRect().top + window.pageYOffset;
    
    // Pega a posição de rolagem atual da janela
    const posicaoInicial = window.pageYOffset;
    
    // Calcula a distância total que precisa ser percorrida para alcançar a seção
    const distancia = posicaoAlvo - posicaoInicial;
    
    // Variável que armazenará o tempo inicial da animação (usada para calcular a duração)
    let tempoInicial = null;

    // Função que executa a animação da rolagem
    function animacaoRolagem(tempoAtual) {
        // Na primeira execução, define o tempo inicial
        if (!tempoInicial) tempoInicial = tempoAtual;

        // Calcula o tempo decorrido desde o início da animação
        const tempoDecorrido = tempoAtual - tempoInicial;

        // Calcula a posição atual da janela com base no tempo decorrido e na função de suavização.
        const posicaoAtual = suavizarRolagem(tempoDecorrido, posicaoInicial, distancia, duracao);

        // Move a janela para a nova posição calculada
        window.scrollTo(0, posicaoAtual);

        // Continua a animação até que a duração especificada seja atingida
        if (tempoDecorrido < duracao) {
            requestAnimationFrame(animacaoRolagem); // Chama novamente a função até a animação terminar
        }
    }

    // Função de suavização (easing) para garantir uma rolagem suave
    // `tempo`: tempo decorrido, `inicio`: posição inicial, `distancia`: distância total a percorrer, `duracao`: duração da animação
    function suavizarRolagem(tempo, inicio, distancia, duracao) {
        // Normaliza o tempo (dividido por 2 para uma animação suave, acelerando no início e desacelerando no final)
        tempo /= duracao / 2;

        // Acelera no início da animação
        if (tempo < 1) return distancia / 2 * tempo * tempo + inicio;

        // Desacelera no final da animação
        tempo--;
        return -distancia / 2 * (tempo * (tempo - 2) - 1) + inicio;
    }

    // Inicia a animação de rolagem chamando a função `animacaoRolagem` pela primeira vez
    requestAnimationFrame(animacaoRolagem);
}







// O método getBoundingClientRect() retorna um objeto com as dimensões e a posição do elemento relativo ao viewport (a área visível da página).
// A propriedade .top desse objeto retorna a distância entre a parte superior do elemento e a parte superior do viewport (em pixels).

// window.pageYOffset retorna a quantidade de pixels que a página foi rolada verticalmente a partir do topo.

// !tempoInicial: O operador ! é uma negação lógica. Isso significa que se tempoInicial for um valor "falsy" (como null, undefined, ou 0), a expressão !tempoInicial será verdadeira.