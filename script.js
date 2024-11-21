const frasesCuriosidades = {
    1: { frase: "Você está no caminho certo!", curiosidade: "O número 1 simboliza novos começos." },
    2: { frase: "Eu vi uma flor de luz em um campo de escuridão.", curiosidade: "O lírio-da-paz (Spathiphyllum) é uma planta que pode florescer mesmo com pouca luz. Suanen significa flor do lírio." },
    3: { frase: "Mas viver as palavras é o que é difícil!", curiosidade: "Estar apaixonado pode aumentar os níveis de dopamina no cérebro." },
    4: { frase: "A lua não tem luz própria, ela reflete a luz do sol.", curiosidade: "A Lua é constantemente 'pintada' de diferentes cores devido à sua órbita e à interação com a atmosfera da Terra. Em eventos como o eclipse lunar, ela pode parecer vermelha, um fenômeno conhecido como 'lua de sangue'." },
    5: { frase: "O tempo é uma ilusão; a sensação de passado, presente e futuro depende de como nossa mente o percebe.", curiosidade: "O conceito de tempo é diferente em várias culturas e até na física. Em algumas culturas, o tempo é visto como cíclico, enquanto na física, ele é tratado como linear e pode ser alterado pela gravidade, conforme demonstrado pela teoria da relatividade de Einstein." },
    6: { frase: "O amor é a única coisa que cresce à medida que se divide.", curiosidade: "Estudos científicos mostram que o amor e a conexão emocional podem realmente afetar a saúde física, aumentando a produção de hormônios como a oxitocina, que ajuda a reduzir o estresse e fortalecer o sistema imunológico." },
    7: { frase: "O amor não se vê com os olhos, mas com o coração.", curiosidade: "O amor romântico ativa áreas do cérebro associadas ao prazer e recompensa, como o sistema de dopamina. Curiosamente, a sensação de 'borboletas no estômago' é provocada pela adrenalina, um hormônio ligado ao desejo e à excitação." },
    8: { frase: "A sorte favorece os audaciosos.", curiosidade: "Pesquisas indicam que as pessoas que se consideram 'sortudas' tendem a ser mais otimistas e abertas a novas experiências, o que aumenta suas chances de ter boas oportunidades, criando um ciclo de 'boa sorte'." },
    9: { frase: "O que você faz é o que importa, não o que você diz. – Kakashi Hatake", curiosidade: "Kakashi, conhecido por sua habilidade em copiar técnicas, também carrega uma profunda tragédia em sua história, tendo perdido sua família e amigos na infância. Essa perda moldou sua personalidade e sua visão sobre o valor da amizade e da perseverança." },
    10: { frase: "Quando você tem um objetivo, você tem que lutar por ele. – Naruto Uzumaki", curiosidade: "Naruto é inspirado em parte pela figura do herói clássico que supera dificuldades e cresce através de desafios. Sua jornada reflete o conceito de 'resiliência', mostrando como um indivíduo pode mudar seu destino, mesmo vindo de um passado difícil." },
    11: { frase: "Envelhecer é como escalar uma montanha; à medida que se chega ao topo, mais se vê e mais se sente. – Ingmar Bergman", curiosidade: "Embora o envelhecimento seja frequentemente associado à perda de habilidades físicas, estudos indicam que a sabedoria e a experiência aumentam com a idade. A neurociência sugere que, com o tempo, o cérebro aprimora sua capacidade de tomar decisões mais acertadas, já que as conexões neurais se fortalecem com a experiência acumulada." },
    12: { frase: "A obsessão é uma prisão em que a chave está na nossa mão.", curiosidade: "A obsessão pode ter um impacto profundo na saúde mental e física, sendo muitas vezes ligada a transtornos como o transtorno obsessivo-compulsivo (TOC). Estudos mostram que as obsessões, quando não tratadas, podem afetar o cérebro, alterando áreas responsáveis pelo controle de impulsos e tomada de decisões." },
    13: { frase: "A família é onde a vida começa e o amor nunca termina.", curiosidade: "Estudos indicam que uma família unida pode ter um grande impacto na saúde mental e emocional dos indivíduos. Ter um sistema de apoio forte, como o de uma família, está relacionado à redução do estresse e ao aumento da longevidade, pois promove um ambiente de amor e segurança." },
    14: { frase: "Liberdade não é fazer o que se quer, mas querer o que se faz. – Jean-Paul Sartre", curiosidade: "A liberdade, do ponto de vista psicológico, é fundamental para o bem-estar. Pesquisas mostram que a sensação de autonomia e controle sobre a própria vida está diretamente ligada a uma maior satisfação e saúde mental. No entanto, a liberdade também pode ser desafiadora, pois traz consigo a responsabilidade de tomar decisões e lidar com suas consequências." },
    15: { frase: "E a mulher de Ló olhou para trás e se tornou uma estátua de sal. – Gênesis 19:26", curiosidade: "A história da mulher de Ló é um dos relatos bíblicos mais simbólicos. Quando Deus destruiu as cidades de Sodoma e Gomorra devido à sua maldade, ele instruiu Ló e sua família a fugirem sem olhar para trás. A mulher de Ló desobedeceu, olhando para a cidade e sendo transformada em uma estátua de sal. Esse evento é interpretado como um alerta sobre a importância de seguir a vontade divina e não se apegar ao passado." },
    16:  { frase: "A amizade é um amor que nunca morre. – Mario Quintana", curiosidade: "Pesquisas científicas revelam que amizades verdadeiras têm um impacto profundo na saúde mental e física. Ter amigos próximos pode reduzir os níveis de estresse, melhorar a autoestima e até aumentar a longevidade. Estudos indicam que as conexões sociais saudáveis têm um papel vital na promoção de uma vida mais feliz e equilibrada." },
    17: { frase: "Conexões reais são feitas quando deixamos de lado nossas máscaras e mostramos nossa verdadeira essência. – Desconhecido", curiosidade: "Conexões humanas autênticas são fundamentais para o bem-estar emocional. Estudos indicam que, quando nos sentimos verdadeiramente conectados a outras pessoas, nosso cérebro libera oxitocina, o 'hormônio do amor', que promove sentimentos de confiança, segurança e felicidade. Essas conexões podem diminuir a ansiedade e até melhorar a saúde física, criando uma rede de apoio emocional essencial." },
    18: { frase: "Grandes coisas estão por vir.", curiosidade: "O número 100 representa plenitude e perfeição." },
    19: { frase: "O amor que é verdadeiro nunca morre, ele se transforma e renasce em outras vidas." , curiosidade: "A ideia de 'amores de outras vidas' é um conceito popular em várias culturas e filosofias, incluindo o espiritismo e algumas vertentes do budismo. A crença é que os laços afetivos profundos podem transcender a morte e se renovar em novas existências. Em algumas teorias psicológicas, isso também é interpretado como a ideia de que certos padrões emocionais se repetem em diferentes fases da vida, como se fossem 'amores eternos'." },
    20: { frase: "Viajar é a única coisa que você compra e te torna mais rico." , curiosidade: "Estudos mostram que viajar pode ter benefícios significativos para a saúde mental e emocional. As novas experiências ajudam a reduzir o estresse, melhorar a criatividade e até fortalecer o cérebro, estimulando novas conexões neurais. Além disso, viajar permite que as pessoas se desconectem da rotina diária e ganhem novas perspectivas, o que pode ser profundamente transformador." },
    21: { frase: "Os sonhos não têm data de validade." , curiosidade: "A ciência dos sonhos, conhecida como onirologia, sugere que nossos sonhos podem ser uma forma de processar as emoções e experiências do dia a dia. Curiosamente, algumas pesquisas indicam que sonhos vívidos podem estar relacionados à memória e à resolução de problemas, enquanto outros acreditam que os sonhos também podem refletir desejos e medos profundos, agindo como um 'espelho' do nosso inconsciente." },
    22: { frase: "Filhos são como sementes; é nossa tarefa ajudá-los a crescer e florescer." ,curiosidade: "Essa frase, retirada da música 'Tempo Perdido', é um dos versos mais emblemáticos do rock nacional. A música reflete sobre a efemeridade da vida e a importância de aproveitar o presente. Pesquisas indicam que adotar uma mentalidade 'carpe diem' pode levar a uma maior satisfação com a vida, desde que não se torne uma busca por gratificação instantânea sem pensar nas consequências." },
    24: { frase: "A vida é aquilo que acontece enquanto estamos ocupados fazendo outros planos. – John Lennon", curiosidade: "A vida humana é composta por cerca de 37,2 trilhões de células. Cada uma delas tem uma função específica, trabalhando em conjunto para manter o corpo em funcionamento." },
    25: { frase: "Amar não é olhar um para o outro, é olhar juntos na mesma direção. – Antoine de Saint-Exupéry", curiosidade: "O amor é muitas vezes comparado a uma droga, pois o cérebro libera substâncias como dopamina e oxitocina que criam sensações de prazer e vínculo, semelhantes a vícios." },
    26: { frase: "A paz começa com um sorriso. – Madre Teresa de Calcutá", curiosidade: "Práticas como a meditação têm sido cientificamente comprovadas para reduzir o estresse e aumentar a sensação de paz interior, ajudando a melhorar a saúde mental." },
    27: { frase: "A traição é como uma faca na alma, que arranca pedaços do coração." , curiosidade: "Estudos mostram que a traição pode ter efeitos devastadores na saúde emocional e até física de uma pessoa, afetando a confiança e a estabilidade psicológica." },
    28: { frase: "As lágrimas são a maneira que nosso corpo encontra para lavar a dor da alma.", curiosidade: "Lágrimas emocionais, como as de tristeza ou alegria, contêm diferentes substâncias químicas que podem ser usadas pelo corpo para aliviar o estresse." },       
    29: { frase: "Nunca é tarde para recomeçar." , curiosidade: "Pesquisas psicológicas mostram que recomeçar pode ter um efeito positivo na motivação e na resiliência, proporcionando uma nova perspectiva e oportunidade de crescimento pessoal." },
    30: { frase: "Perdoar não é esquecer, é libertar-se do peso da raiva." , curiosidade: "O perdão não só melhora os relacionamentos, mas também reduz o estresse e a ansiedade. A ciência indica que perdoar pode promover uma melhor saúde mental e emocional." },
    31: { frase: "A alegria é contagiante, espalhe-a por onde for." , curiosidade: "A alegria tem um impacto direto no corpo, liberando endorfinas que não só fazem você se sentir bem, mas também reduzem o risco de doenças como pressão alta." },
    32: { frase: "O destino é a força invisível que nos guia para onde precisamos estar." , curiosidade: "Algumas teorias sugerem que o destino pode ser uma combinação de nossas escolhas e o acaso. Isso implica que somos, de certa forma, coautores de nosso próprio destino." },
    33: { frase: "Felicidade não é um destino, é uma maneira de viajar." , curiosidade: "Estudos indicam que a felicidade está mais ligada às experiências que temos do que à busca incessante por bens materiais. Momentos simples podem proporcionar mais felicidade do que se imagina." },
        34: { frase: "Mesmo na escuridão, existe a possibilidade de encontrar luz." , curiosidade: "A escuridão é fundamental para o descanso dos nossos olhos. Dormir em um ambiente escuro ajuda na produção de melatonina, hormônio essencial para a qualidade do sono." },
        35: { frase: "Tudo que você precisa é amor. – The Beatles", curiosidade: "O amor é um dos sentimentos mais poderosos e transformadores que existem. Cientificamente, o amor está relacionado a mudanças fisiológicas no corpo, como a liberação de oxitocina, conhecida como o 'hormônio do bem-estar'." },
        36: { frase: "Viva a vida que você imaginou. – Henry David Thoreau", curiosidade: "Thoreau acreditava que viver uma vida autêntica, em harmonia com a natureza e com nossos próprios valores, era a chave para uma vida plena. Isso também está relacionado a estudos de felicidade, que indicam que viver de acordo com nossos próprios princípios traz maior satisfação." },
        37: { frase: "A única maneira de fazer um excelente trabalho é amar o que você faz. – Steve Jobs", curiosidade: "Steve Jobs foi um defensor da paixão como motor de excelência. Estudos sobre motivação mostram que a dedicação ao que amamos gera melhores resultados e maior satisfação pessoal." },
        38: { frase: "O que você pensa, você cria. – Buddha", curiosidade: "A ideia de que os pensamentos moldam nossa realidade é amplamente apoiada pela psicologia moderna. A prática da visualização positiva pode influenciar diretamente a forma como enfrentamos desafios e criamos nossa realidade." },
        39: { frase: "O universo é mudança; nossa vida é o que nossos pensamentos fazem dela. – Marco Aurélio", curiosidade: "Marco Aurélio, um dos mais conhecidos imperadores filósofos, enfatizava o controle dos pensamentos como uma chave para a tranquilidade e felicidade. Hoje, a psicologia cognitiva confirma que o modo como pensamos influencia diretamente nossas emoções e ações." },
        40: { frase: "O maior erro que você pode cometer é o de ficar o tempo todo com medo de cometer um.– Elbert Hubbard", curiosidade: "O medo do fracasso é uma das maiores barreiras para o sucesso. Estudos mostram que pessoas que têm uma abordagem mais resiliente em relação ao fracasso tendem a ser mais bem-sucedidas a longo prazo, pois aprendem com seus erros e continuam tentando." },
        41: { frase: "Às vezes, a melhor maneira de resolver um problema é se afastar dele." , curiosidade: "Estudos de neurociência sugerem que dar um tempo para um problema, com distância emocional, pode ajudar a encontrar soluções mais criativas e eficazes, já que o cérebro pode processar informações de uma nova maneira." },
        42: { frase: "A sabedoria começa na reflexão. – Sócrates", curiosidade: "Sócrates acreditava que o autoconhecimento era a chave para a sabedoria. Hoje, sabemos que a reflexão constante e a prática da metacognição, ou pensar sobre nossos próprios pensamentos, melhoram nossa tomada de decisões e capacidade de aprendizado." },
        43: { frase: "Não deixe para amanhã o que você pode fazer hoje.– Benjamin Franklin", curiosidade: "A procrastinação é um comportamento comum que afeta muitas pessoas. Estudos mostram que a procrastinação pode ser causada por fatores como medo do fracasso, falta de motivação ou dificuldade em gerenciar o tempo." },
        44: { frase: "O melhor ainda está por vir." , curiosidade: "A esperança é uma força poderosa. Estudos indicam que ter uma mentalidade otimista e esperar pelo melhor pode melhorar a saúde mental, fortalecer a resiliência e aumentar a probabilidade de alcançar nossos objetivos." },
        45: { frase: "A vida não é sobre encontrar a si mesmo, mas sobre criar a si mesmo. – George Bernard Shaw", curiosidade: "A ideia de que podemos criar nossa própria identidade está relacionada à teoria do 'eu' na psicologia. O conceito de 'eu ideal' sugere que, ao trabalharmos em nossos próprios objetivos e características, podemos nos tornar a melhor versão de nós mesmos." },
        46: { frase: "A felicidade não é algo pronto. Ela vem de suas próprias ações.– Dalai Lama", curiosidade: "Estudos de psicologia positiva indicam que a felicidade é uma habilidade que pode ser cultivada através de ações e atitudes como gratidão, gentileza e autocompaixão." },
        47: { frase: "A vida é feita de escolhas." , curiosidade: "Cada decisão que tomamos molda nosso destino. A teoria da tomada de decisão sugere que nossas escolhas são influenciadas por nossos valores, crenças e experiências, e que as melhores escolhas são aquelas feitas com consciência e responsabilidade." },
        48: { frase: "A maior aventura que você pode viver é viver a vida dos seus sonhos.– Oprah Winfrey", curiosidade: "A busca por um propósito significativo é um dos maiores motivadores da ação humana. A psicologia do bem-estar sugere que seguir um sonho ou objetivo pode melhorar a satisfação de vida e aumentar os níveis de felicidade." },
        49: { frase: "O sucesso é a soma de pequenos esforços repetidos dia após dia. – Robert Collier", curiosidade: "O sucesso muitas vezes é resultado de consistência e perseverança. Pesquisas indicam que hábitos diários positivos têm um impacto direto no alcance de grandes objetivos e no sucesso a longo prazo." },
        50: { frase: "A única limitação que você tem é aquela que você impõe a si mesmo." , curiosidade: "A autossabotagem é um comportamento comum, muitas vezes causado por crenças limitantes. Estudos em psicologia afirmam que, ao superar essas limitações internas, as pessoas podem alcançar seu máximo potencial." }
};

document.getElementById("btnEntrar").addEventListener("click", () => {
    const nome = document.getElementById("nome").value;
    document.getElementById("saudacao").innerText = `Olá, ${nome}! Escolha uma das cartas ou um número de 1 a 50 para saber a frase e curiosidade.`;
    document.getElementById("entrada").style.display = "none";
    document.getElementById("jogo").style.display = "block";
});

document.getElementById("btnEscolher").addEventListener("click", () => {
    const numeroEscolhido = parseInt(document.getElementById("numeroEscolhido").value);
    const resultadoDiv = document.getElementById("resultado");

    if (numeroEscolhido >= 1 && numeroEscolhido <= 50) {
        const { frase, curiosidade } = frasesCuriosidades[numeroEscolhido];
        resultadoDiv.innerHTML = `<p><strong>Frase:</strong> ${frase}</p><p><strong>Curiosidade:</strong> ${curiosidade}</p>`;
    } else {
        resultadoDiv.innerHTML = "<p>Por favor, escolha um número válido entre 1 e 50.</p>";
    }
});

// Lógica do embaralhamento e cartas (caso queira mantê-las):
document.getElementById("embaralhar").addEventListener("click", () => {
    const cartas = document.querySelectorAll(".carta");
    cartas.forEach(carta => {
        carta.style.transform = `rotate(${Math.random() * 360}deg)`;
    });
});
const btnEntrar = document.getElementById('btnEntrar');
const nomeInput = document.getElementById('nome');
const jogoDiv = document.getElementById('jogo');
const entradaDiv = document.getElementById('entrada');
const saudacao = document.getElementById('saudacao');
const cartas = document.querySelectorAll('.carta');
const resultadoDiv = document.getElementById('resultado');
const btnEmbaralhar = document.getElementById('embaralhar');

// Entrar no jogo
btnEntrar.addEventListener('click', () => {
    const nome = nomeInput.value.trim();
    if (nome) {
        saudacao.textContent = `Olá, ${nome}!`;
        entradaDiv.style.display = 'none';
        jogoDiv.style.display = 'block';
    } else {
        alert('Por favor, insira seu nome.');
    }
});

// Embaralhar cartas
btnEmbaralhar.addEventListener('click', () => {
    resultadoDiv.textContent = '';
    cartas.forEach(carta => carta.classList.remove('revelada'));
    alert('As cartas foram embaralhadas!');
});

// Escolher uma carta
cartas.forEach(carta => {
    carta.addEventListener('click', () => {
        const tipo = carta.dataset.tipo;
        const porcentagem = Math.floor(Math.random() * (tipo === 'sim' ? 50 : tipo === 'nao' ? 50 : 10)) + (tipo === 'sim' ? 50 : tipo === 'nao' ? 0 : 45);
        carta.classList.add('revelada');
        resultadoDiv.innerHTML = `<p>A resposta é <strong>${tipo}</strong> com <strong>${porcentagem}%</strong> de chance de acerto.</p>`;
    });
});