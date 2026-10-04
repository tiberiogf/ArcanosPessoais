/**
 * Dados completos dos 22 Arcanos Maiores do Tarot
 * Cada arcano contém suas interpretações para: Pessoal, Alma, Personalidade, Destino e Ano.
 * Contém links para as ilustrações históricas do Tarot de Rider-Waite.
 */
const IMAGENS_ARCANOS = {
  1: 'Arcanos/01.mago.jpg',
  2: 'Arcanos/02.sacerdotisa.jpg',
  3: 'Arcanos/03.imperatriz.jpg',
  4: 'Arcanos/04.imperador.jpg',
  5: 'Arcanos/05.papa.jpg',
  6: 'Arcanos/06.namorados.jpg',
  7: 'Arcanos/07.carro.jpg',
  8: 'Arcanos/08.justica.jpg',
  9: 'Arcanos/09.eremita.jpg',
  10: 'Arcanos/10.roda-da-fortuna.jpg',
  11: 'Arcanos/11.forca.jpg',
  12: 'Arcanos/12.pendurado.jpg',
  13: 'Arcanos/13.morte.jpg',
  14: 'Arcanos/14.temperanca.jpg',
  15: 'Arcanos/15.diabo.jpg',
  16: 'Arcanos/16.torre.jpg',
  17: 'Arcanos/17.estrela.jpg',
  18: 'Arcanos/18.lua.jpg',
  19: 'Arcanos/19.sol.jpg',
  20: 'Arcanos/20.julgamento.jpg',
  21: 'Arcanos/21.mundo.jpg',
  22: 'Arcanos/22.louco.jpg'
};

const ARCANOS = {
  1: {
    numero: 1,
    romano: "I",
    nome: "O Mago",
    emoji: "🪄",
    imagem: IMAGENS_ARCANOS[1],
    arquétipo: "O Criador e Alquimista",
    palavrasChave: ["Início", "Potencial", "Manifestação", "Habilidade"],
    pessoal: "Você tem poder de realização. Tudo que começa com intenção, você conquista.",
    alma: "Sua alma veio para aprender a usar seu poder com sabedoria.",
    personalidade: "Te veem como alguém comunicativo, hábil e magnético.",
    destino: "Você veio para criar, iniciar e manifestar.",
    ano: "Ano de começos, ideias e conquistas. Aja com foco."
  },
  2: {
    numero: 2,
    romano: "II",
    nome: "A Sacerdotisa",
    emoji: "🌙",
    imagem: IMAGENS_ARCANOS[2],
    arquétipo: "A Guardiã dos Mistérios",
    palavrasChave: ["Intuição", "Mistério", "Silêncio", "Sabedoria Interior"],
    pessoal: "Você é intuitiva, profunda e reservada. Sente antes de acontecer.",
    alma: "Sua alma busca sabedoria interior e conexão com o invisível.",
    personalidade: "Te veem como misteriosa, sábia e discreta.",
    destino: "Você veio para desenvolver a intuição e guiar pelo silêncio.",
    ano: "Ano de introspecção, estudo e confiança na intuição."
  },
  3: {
    numero: 3,
    romano: "III",
    nome: "A Imperatriz",
    emoji: "👑",
    imagem: IMAGENS_ARCANOS[3],
    arquétipo: "A Mãe e Criadora",
    palavrasChave: ["Abundância", "Fertilidade", "Criatividade", "Cuidado"],
    pessoal: "Você é criativa, acolhedora e tem poder de gerar vida.",
    alma: "Sua alma veio para criar, nutrir e florescer.",
    personalidade: "Te veem como afetuosa, maternal e criativa.",
    destino: "Você veio para prosperar através do que cultiva com amor.",
    ano: "Ano de criação, abundância e cuidado com o que plantou."
  },
  4: {
    numero: 4,
    romano: "IV",
    nome: "O Imperador",
    emoji: "🏛️",
    imagem: IMAGENS_ARCANOS[4],
    arquétipo: "O Construtor e Soberano",
    palavrasChave: ["Estrutura", "Liderança", "Ordem", "Estabilidade"],
    pessoal: "Você é firme, responsável e tem liderança natural.",
    alma: "Sua alma veio aprender disciplina, ordem e autoridade.",
    personalidade: "Te veem como alguém forte, confiável e estratégico.",
    destino: "Você veio para liderar, estruturar e proteger.",
    ano: "Ano de organização, estabilidade e conquistas sólidas."
  },
  5: {
    numero: 5,
    romano: "V",
    nome: "O Papa",
    emoji: "📿",
    imagem: IMAGENS_ARCANOS[5],
    arquétipo: "O Mestre Espiritual",
    palavrasChave: ["Tradição", "Ensino", "Ética", "Guia Espiritual"],
    pessoal: "Você é sábia, conselheira e busca a verdade.",
    alma: "Sua alma veio para ensinar e aprender com a tradição.",
    personalidade: "Te veem como alguém confiável, ético e sábio.",
    destino: "Você veio para orientar, ensinar e guiar pessoas.",
    ano: "Ano de aprendizado, mentoria e conexões espirituais."
  },
  6: {
    numero: 6,
    romano: "VI",
    nome: "Os Namorados",
    emoji: "💞",
    imagem: IMAGENS_ARCANOS[6],
    arquétipo: "O Amante e a Escolha",
    palavrasChave: ["Amor", "Escolhas", "Afinidade", "Harmonia"],
    pessoal: "Você é afetiva, sociável e valoriza conexões verdadeiras.",
    alma: "Sua alma veio aprender sobre escolhas e amor.",
    personalidade: "Te veem como alguém carinhoso, parceiro e indeciso às vezes.",
    destino: "Você veio para unir, harmonizar e escolher com o coração.",
    ano: "Ano de escolhas, parcerias e decisões afetivas."
  },
  7: {
    numero: 7,
    romano: "VII",
    nome: "O Carro",
    emoji: "🏆",
    imagem: IMAGENS_ARCANOS[7],
    arquétipo: "O Vencedor Determinado",
    palavrasChave: ["Direção", "Vitória", "Superação", "Movimento"],
    pessoal: "Você é determinada, corajosa e não para diante de obstáculos.",
    alma: "Sua alma veio aprender vitória, movimento e superação.",
    personalidade: "Te veem como alguém ativo, forte e vencedor.",
    destino: "Você veio para conquistar, avançar e liderar.",
    ano: "Ano de conquistas, movimento e vitórias. Não pare."
  },
  8: {
    numero: 8,
    romano: "VIII",
    nome: "A Justiça",
    emoji: "⚖️",
    imagem: IMAGENS_ARCANOS[8],
    arquétipo: "A Balança da Verdade",
    palavrasChave: ["Equilíbrio", "Clareza", "Responsabilidade", "Causa e Efeito"],
    pessoal: "Você é justa, equilibrada e tem senso forte de certo e errado.",
    alma: "Sua alma veio aprender verdade, ética e responsabilidade.",
    personalidade: "Te veem como alguém confiável, maduro e correto.",
    destino: "Você veio para equilibrar, julgar e trazer justiça.",
    ano: "Ano de decisões justas, contratos e colheita do que plantou."
  },
  9: {
    numero: 9,
    romano: "IX",
    nome: "O Eremita",
    emoji: "🕯️",
    imagem: IMAGENS_ARCANOS[9],
    arquétipo: "O Sábio Interior",
    palavrasChave: ["Introspecção", "Luz Interior", "Paciência", "Busca"],
    pessoal: "Você é sábia, reservada e busca profundidade em tudo.",
    alma: "Sua alma veio aprender silêncio, sabedoria e interiorização.",
    personalidade: "Te veem como alguém profundo, discreto e conselheiro.",
    destino: "Você veio para ensinar, iluminar e guiar pelo exemplo.",
    ano: "Ano de introspecção, estudo e recolhimento. Não force."
  },
  10: {
    numero: 10,
    romano: "X",
    nome: "A Roda da Fortuna",
    emoji: "🎡",
    imagem: IMAGENS_ARCANOS[10],
    arquétipo: "O Ciclo do Destino",
    palavrasChave: ["Ciclos", "Mudanças", "Oportunidade", "Fluidez"],
    pessoal: "Você é adaptável, intuitiva e vive ciclos de virada.",
    alma: "Sua alma veio aprender a confiar no fluxo da vida.",
    personalidade: "Te veem como alguém sortudo, mutável e interessante.",
    destino: "Você veio para girar, recomeçar e crescer com as mudanças.",
    ano: "Ano de viradas, oportunidades e destino em movimento."
  },
  11: {
    numero: 11,
    romano: "XI",
    nome: "A Força",
    emoji: "🦁",
    imagem: IMAGENS_ARCANOS[11],
    arquétipo: "A Coragem e Maestria",
    palavrasChave: ["Domínio Próprio", "Compaixão", "Resiliência", "Poder Gentil"],
    pessoal: "Você é forte, serena e tem domínio interior.",
    alma: "Sua alma veio aprender coragem, paciência e domínio.",
    personalidade: "Te veem como alguém firme, calmo e poderoso.",
    destino: "Você veio para superar, liderar com doçura e inspirar.",
    ano: "Ano de superação, coragem e vitória sobre desafios."
  },
  12: {
    numero: 12,
    romano: "XII",
    nome: "O Pendurado",
    emoji: "🙃",
    imagem: IMAGENS_ARCANOS[12],
    arquétipo: "A Iluminação da Pausa",
    palavrasChave: ["Rendição", "Perspectiva Única", "Transcendência", "Espera"],
    pessoal: "Você é sensível, contemplativa e vê o mundo de forma única.",
    alma: "Sua alma veio aprender entrega, pausa e desapego.",
    personalidade: "Te veem como alguém diferente, profundo e paciente.",
    destino: "Você veio para enxergar o que outros não veem.",
    ano: "Ano de pausa, reflexão e nova perspectiva. Não force."
  },
  13: {
    numero: 13,
    romano: "XIII",
    nome: "A Morte",
    emoji: "🦋",
    imagem: IMAGENS_ARCANOS[13],
    arquétipo: "A Grande Renovação",
    palavrasChave: ["Renascimento", "Transformação", "Libertação", "Ciclos"],
    pessoal: "Você é intensa, transformadora e não tem medo de mudar.",
    alma: "Sua alma veio aprender renascimento e desapego.",
    personalidade: "Te veem como alguém profundo, corajoso e misterioso.",
    destino: "Você veio para transformar, limpar e renascer.",
    ano: "Ano de fim de ciclos e recomeços. Deixe ir o que não serve."
  },
  14: {
    numero: 14,
    romano: "XIV",
    nome: "A Temperança",
    emoji: "🕊️",
    imagem: IMAGENS_ARCANOS[14],
    arquétipo: "A Alquimista e Pacificadora",
    palavrasChave: ["Harmonia", "Cura", "Paciência", "Moderação"],
    pessoal: "Você é equilibrada, calma e tem dom de curar.",
    alma: "Sua alma veio aprender harmonia, paciência e alquimia interior.",
    personalidade: "Te veem como alguém sereno, confiável e curador.",
    destino: "Você veio para equilibrar, curar e harmonizar.",
    ano: "Ano de cura, equilíbrio e moderação. Sem extremos."
  },
  15: {
    numero: 15,
    romano: "XV",
    nome: "O Diabo",
    emoji: "😈",
    imagem: IMAGENS_ARCANOS[15],
    arquétipo: "O Fogo da Matéria e Magnetismo",
    palavrasChave: ["Magnetismo", "Sombra", "Intensidade", "Libertação"],
    pessoal: "Você é magnética, intensa e tem poder de atrair.",
    alma: "Sua alma veio aprender a lidar com sombras e desejos.",
    personalidade: "Te veem como alguém forte, sedutor e misterioso.",
    destino: "Você veio para se libertar e ajudar outros a se libertarem.",
    ano: "Ano de enfrentar dependências e escolhas. Cuidado com excessos."
  },
  16: {
    numero: 16,
    romano: "XVI",
    nome: "A Torre",
    emoji: "🗼",
    imagem: IMAGENS_ARCANOS[16],
    arquétipo: "O Despertar da Verdade",
    palavrasChave: ["Revelação", "Ruptura", "Reconstrução", "Libertação Súbita"],
    pessoal: "Você é transformadora, impulsiva e não tem medo de verdades.",
    alma: "Sua alma veio aprender despertar e reconstrução.",
    personalidade: "Te veem como alguém intenso, corajoso e direto.",
    destino: "Você veio para derrubar o que não serve e reconstruir.",
    ano: "Ano de mudanças bruscas e revelações. Confie na limpeza."
  },
  17: {
    numero: 17,
    romano: "XVII",
    nome: "A Estrela",
    emoji: "⭐",
    imagem: IMAGENS_ARCANOS[17],
    arquétipo: "A Guia Luminosa e Esperança",
    palavrasChave: ["Inspiração", "Fé", "Renovação", "Luminosidade"],
    pessoal: "Você é inspiradora, sensível e traz esperança.",
    alma: "Sua alma veio curar, inspirar e renovar.",
    personalidade: "Te veem como alguém luminoso, calmo e acolhedor.",
    destino: "Você veio para brilhar, curar e guiar com luz.",
    ano: "Ano de cura, fé e renovação. Confie nos seus sonhos."
  },
  18: {
    numero: 18,
    romano: "XVIII",
    nome: "A Lua",
    emoji: "🌙",
    imagem: IMAGENS_ARCANOS[18],
    arquétipo: "A Travessia do Inconsciente",
    palavrasChave: ["Premonição", "Sensibilidade", "Sonhos", "Ancestralidade"],
    pessoal: "Você é intuitiva, sensível e conectada ao invisível.",
    alma: "Sua alma veio aprender magia, sonhos e ancestralidade.",
    personalidade: "Te veem como alguém misterioso, profundo e magnético.",
    destino: "Você veio para desenvolver a intuição e guiar pelo mistério.",
    ano: "Ano de emoções profundas, sonhos e intuição. Cuidado com ilusões."
  },
  19: {
    numero: 19,
    romano: "XIX",
    nome: "O Sol",
    emoji: "☀️",
    imagem: IMAGENS_ARCANOS[19],
    arquétipo: "A Plenitude e Alegria Radiante",
    palavrasChave: ["Clareza", "Sucesso", "Vitalidade", "Brilho"],
    pessoal: "Você é alegre, confiante e ilumina onde passa.",
    alma: "Sua alma veio aprender gratidão, luz e expansão.",
    personalidade: "Te veem como alguém vibrante, positivo e brilhante.",
    destino: "Você veio para brilhar, realizar e inspirar alegria.",
    ano: "Ano de sucesso, clareza e realizações. Aproveite."
  },
  20: {
    numero: 20,
    romano: "XX",
    nome: "O Julgamento",
    emoji: "📯",
    imagem: IMAGENS_ARCANOS[20],
    arquétipo: "O Chamado do Renascimento",
    palavrasChave: ["Despertar", "Redenção", "Transformação", "Renovação"],
    pessoal: "Você é profunda, intuitiva e sente o chamado interior.",
    alma: "Sua alma veio despertar e ajudar outros a despertarem.",
    personalidade: "Te veem como alguém transformador, sábio e intenso.",
    destino: "Você veio para renascer e guiar renascimentos.",
    ano: "Ano de despertar, virada e renascimento. Ouça o chamado."
  },
  21: {
    numero: 21,
    romano: "XXI",
    nome: "O Mundo",
    emoji: "🌍",
    imagem: IMAGENS_ARCANOS[21],
    arquétipo: "A Realização Total",
    palavrasChave: ["Totalidade", "Coroação", "Integração", "Expansão"],
    pessoal: "Você é realizada, madura e tem visão ampla.",
    alma: "Sua alma veio completar ciclos e expandir.",
    personalidade: "Te veem como alguém completo, sábio e vitorioso.",
    destino: "Você veio para realizar, expandir e coroar.",
    ano: "Ano de realização, sucesso e plenitude. Colha o que plantou."
  },
  22: {
    numero: 22,
    romano: "XXII / 0",
    nome: "O Louco",
    emoji: "🃏",
    imagem: IMAGENS_ARCANOS[22],
    arquétipo: "O Viajante Livre do Destino",
    palavrasChave: ["Liberdade", "Espontaneidade", "Novos Caminhos", "Fé"],
    pessoal: "Você é livre, espontânea e corajosa.",
    alma: "Sua alma veio aprender fé, entrega e novos começos.",
    personalidade: "Te veem como alguém leve, original e aventureiro.",
    destino: "Você veio para recomeçar, arriscar e confiar no desconhecido.",
    ano: "Ano de novos começos, liberdade e fé. Arrisque com consciência."
  }
};

/**
 * Reduz qualquer número somando seus algarismos até que seja <= 22
 * Ex: 33 -> 3+3 = 6
 * Ex: 35 -> 3+5 = 8
 */
function reduzirNumero(n) {
  let passos = [n];
  while (n > 22) {
    const digitos = String(n).split('').map(Number);
    n = digitos.reduce((acc, curr) => acc + curr, 0);
    passos.push(n);
  }
  return { final: n, passos };
}

/**
 * Calcula os 5 arcanos a partir do dia, mês e ano de nascimento
 * Regras:
 * - Arcano pessoal: d+d+m+m+a+a+a+a
 * - Arcano da alma: d+d+m+m
 * - Arcano da personalidade: a+a+a+a
 * - Arcano do destino: arcano pessoal + arcano da alma
 * - Arcano do ano: d+d+m+m+(soma dos números do ano atual)
 */
function calcularArcanos(dia, mes, ano, anoAlvo = new Date().getFullYear()) {
  const dStr = String(dia).padStart(2, '0');
  const mStr = String(mes).padStart(2, '0');
  const aStr = String(ano).padStart(4, '0');
  const targetAnoStr = String(anoAlvo).padStart(4, '0');

  const dDigitos = dStr.split('').map(Number);
  const mDigitos = mStr.split('').map(Number);
  const aDigitos = aStr.split('').map(Number);
  const targetAnoDigitos = targetAnoStr.split('').map(Number);

  // 1. Arcano da Alma: d + d + m + m
  const somaAlma = dDigitos[0] + dDigitos[1] + mDigitos[0] + mDigitos[1];
  const almaReduzido = reduzirNumero(somaAlma);

  // 2. Arcano da Personalidade: a + a + a + a
  const somaPersonalidade = aDigitos[0] + aDigitos[1] + aDigitos[2] + aDigitos[3];
  const personalidadeReduzido = reduzirNumero(somaPersonalidade);

  // 3. Arcano Pessoal: d + d + m + m + a + a + a + a
  const somaPessoal = somaAlma + somaPersonalidade;
  const pessoalReduzido = reduzirNumero(somaPessoal);

  // 4. Arcano do Destino: arcano pessoal + arcano da alma
  const somaDestino = pessoalReduzido.final + almaReduzido.final;
  const destinoReduzido = reduzirNumero(somaDestino);

  // 5. Arcano do Ano: d + d + m + m + (soma dos números do ano alvo/atual)
  const somaAnoAlvo = targetAnoDigitos.reduce((acc, curr) => acc + curr, 0);
  const somaAnoTotal = somaAlma + somaAnoAlvo;
  const anoReduzido = reduzirNumero(somaAnoTotal);

  return {
    dia: dStr,
    mes: mStr,
    ano: aStr,
    anoAlvo,
    pessoal: {
      numero: pessoalReduzido.final,
      formula: `${dDigitos[0]}+${dDigitos[1]} + ${mDigitos[0]}+${mDigitos[1]} + ${aDigitos.join('+')} = ${somaPessoal}${somaPessoal > 22 ? ` → ${pessoalReduzido.passos.slice(1).join(' → ')}` : ''}`,
      detalhes: ARCANOS[pessoalReduzido.final]
    },
    alma: {
      numero: almaReduzido.final,
      formula: `${dDigitos[0]}+${dDigitos[1]} + ${mDigitos[0]}+${mDigitos[1]} = ${somaAlma}${somaAlma > 22 ? ` → ${almaReduzido.passos.slice(1).join(' → ')}` : ''}`,
      detalhes: ARCANOS[almaReduzido.final]
    },
    personalidade: {
      numero: personalidadeReduzido.final,
      formula: `${aDigitos.join('+')} = ${somaPersonalidade}${somaPersonalidade > 22 ? ` → ${personalidadeReduzido.passos.slice(1).join(' → ')}` : ''}`,
      detalhes: ARCANOS[personalidadeReduzido.final]
    },
    destino: {
      numero: destinoReduzido.final,
      formula: `${pessoalReduzido.final} (Pessoal) + ${almaReduzido.final} (Alma) = ${somaDestino}${somaDestino > 22 ? ` → ${destinoReduzido.passos.slice(1).join(' → ')}` : ''}`,
      detalhes: ARCANOS[destinoReduzido.final]
    },
    anoRegente: {
      numero: anoReduzido.final,
      formula: `(${dDigitos[0]}+${dDigitos[1]}+${mDigitos[0]}+${mDigitos[1]}) + (${targetAnoDigitos.join('+')}) = ${somaAlma} + ${somaAnoAlvo} = ${somaAnoTotal}${somaAnoTotal > 22 ? ` → ${anoReduzido.passos.slice(1).join(' → ')}` : ''}`,
      detalhes: ARCANOS[anoReduzido.final]
    }
  };
}

// Configuração do DOM e Interações
document.addEventListener('DOMContentLoaded', () => {
  const birthdateInput = document.getElementById('birthdate-input');
  const calculateBtn = document.getElementById('calculate-btn');
  const resultsSection = document.getElementById('results-section');
  const errorMsg = document.getElementById('error-msg');
  const exampleBtn = document.getElementById('example-btn');
  const shareBtn = document.getElementById('share-btn');
  const resetBtn = document.getElementById('reset-btn');
  const currentYearSpan = document.getElementById('current-year-indicator');
  const encyclopediaBtn = document.getElementById('open-encyclopedia-btn');
  const modalEncyclopedia = document.getElementById('encyclopedia-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const encyclopediaGrid = document.getElementById('encyclopedia-grid');

  let ultimoResultado = null;
  const anoAtual = new Date().getFullYear();
  if (currentYearSpan) {
    currentYearSpan.textContent = anoAtual;
  }

  // Mascara automática DD / MM / AAAA
  birthdateInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 8);
    let formatted = '';
    if (value.length > 0) {
      formatted = value.slice(0, 2);
    }
    if (value.length >= 3) {
      formatted += ' / ' + value.slice(2, 4);
    }
    if (value.length >= 5) {
      formatted += ' / ' + value.slice(4, 8);
    }
    e.target.value = formatted;
    errorMsg.textContent = '';
  });

  // Tecla Enter para calcular
  birthdateInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executarCalculo();
    }
  });

  // Botão de exemplo
  if (exampleBtn) {
    exampleBtn.addEventListener('click', () => {
      birthdateInput.value = '15 / 08 / 1992';
      errorMsg.textContent = '';
      executarCalculo();
    });
  }

  calculateBtn.addEventListener('click', executarCalculo);

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      resultsSection.classList.add('hidden');
      birthdateInput.value = '';
      birthdateInput.focus();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function validarData(dia, mes, ano) {
    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) return false;
    if (ano < 1900 || ano > 2099) return false;
    if (mes < 1 || mes > 12) return false;
    const diasPorMes = new Date(ano, mes, 0).getDate();
    return dia >= 1 && dia <= diasPorMes;
  }

  function executarCalculo() {
    const rawVal = birthdateInput.value.replace(/\D/g, '');
    if (rawVal.length !== 8) {
      mostrarErro('Por favor, informe a data completa de nascimento com dia, mês e ano (DD / MM / AAAA).');
      return;
    }

    const dia = parseInt(rawVal.slice(0, 2), 10);
    const mes = parseInt(rawVal.slice(2, 4), 10);
    const ano = parseInt(rawVal.slice(4, 8), 10);

    if (!validarData(dia, mes, ano)) {
      mostrarErro('Data de nascimento inválida. Verifique o dia, mês e ano informados.');
      return;
    }

    errorMsg.textContent = '';

    // Animação de loading no botão
    const originalText = calculateBtn.innerHTML;
    calculateBtn.innerHTML = `
      <svg class="spinner" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
      </svg>
      <span>Calculando arcanos...</span>
    `;
    calculateBtn.disabled = true;

    setTimeout(() => {
      const resultado = calcularArcanos(dia, mes, ano, anoAtual);
      ultimoResultado = resultado;
      renderizarResultados(resultado);

      calculateBtn.innerHTML = originalText;
      calculateBtn.disabled = false;

      // Scroll suave até o resultado
      resultsSection.classList.remove('hidden');
      resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 350);
  }

  function mostrarErro(mensagem) {
    errorMsg.textContent = mensagem;
    birthdateInput.focus();
    birthdateInput.classList.add('input-shake');
    setTimeout(() => {
      birthdateInput.classList.remove('input-shake');
    }, 500);
  }

  function renderizarResultados(res) {
    document.getElementById('res-data-nascimento').textContent = `${res.dia}/${res.mes}/${res.ano}`;
    document.getElementById('res-ano-atual-label').textContent = `${res.anoAlvo}`;

    const cardsContainer = document.getElementById('arcanos-cards-container');
    cardsContainer.innerHTML = '';

    const tipos = [
      {
        tipoId: 'pessoal',
        titulo: 'Arcano Pessoal',
        subtitulo: 'Sua Essência Primordial',
        icone: '✨',
        dado: res.pessoal,
        interpretacao: res.pessoal.detalhes.pessoal,
        descricaoGeral: 'Revela seu poder nato de realização e suas virtudes mais profundas nesta existência.'
      },
      {
        tipoId: 'alma',
        titulo: 'Arcano da Alma',
        subtitulo: 'Propósito & Missão Interior',
        icone: '🧘',
        dado: res.alma,
        interpretacao: res.alma.detalhes.alma,
        descricaoGeral: 'Aponta o que a sua alma veio aprender, curar e transmutar no nível mais sutil.'
      },
      {
        tipoId: 'personalidade',
        titulo: 'Arcano da Personalidade',
        subtitulo: 'Como o Mundo Te Enxerga',
        icone: '🎭',
        dado: res.personalidade,
        interpretacao: res.personalidade.detalhes.personalidade,
        descricaoGeral: 'Representa a imagem social, a expressão externa e a primeira impressão magnética que você passa.'
      },
      {
        tipoId: 'destino',
        titulo: 'Arcano do Destino',
        subtitulo: 'Caminho de Evolução & Vida',
        icone: '🌌',
        dado: res.destino,
        interpretacao: res.destino.detalhes.destino,
        descricaoGeral: 'A fusão da sua essência com a sua alma: para onde o fluxo maior da sua vida te convida a caminhar.'
      },
      {
        tipoId: 'ano',
        titulo: `Arcano do Ano (${res.anoAlvo})`,
        subtitulo: 'Vibração & Regência do Ciclo',
        icone: '⏳',
        dado: res.anoRegente,
        interpretacao: res.anoRegente.detalhes.ano,
        descricaoGeral: `A energia regente para você ao longo do ano de ${res.anoAlvo}, orientando decisões e atitudes.`
      }
    ];

    tipos.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = `arcano-card ${item.tipoId === 'ano' ? 'arcano-card-featured' : ''}`;
      card.id = `arcano-card-${item.tipoId}`;
      card.style.animationDelay = `${index * 80}ms`;

      card.innerHTML = `
        <div class="card-header">
          <div class="card-badge">
            <span class="badge-dot"></span>
            <span>${item.subtitulo}</span>
          </div>
          <span class="card-position-num">${item.icone} #${index + 1}</span>
        </div>

        <div class="card-main">
          <div class="card-tarot-indicator">
            <div class="tarot-avatar">
              <img 
                src="${encodeURI(item.dado.detalhes.imagem)}" 
                alt="Carta ${item.dado.detalhes.nome}" 
                class="tarot-card-img" 
                loading="lazy"
                onerror="this.onerror=null; this.parentElement.innerHTML='<span class=\\'tarot-emoji\\'>${item.dado.detalhes.emoji}</span>';"
              >
            </div>
            <div class="tarot-headings">
              <span class="tarot-number">Arcano ${item.dado.detalhes.numero} • ${item.dado.detalhes.romano}</span>
              <h3 class="tarot-name">${item.dado.detalhes.nome}</h3>
              <span class="tarot-archetype">${item.dado.detalhes.arquétipo}</span>
            </div>
          </div>

          <div class="card-category-label">
            <span class="label-key">${item.titulo}:</span>
          </div>

          <div class="card-quote-box">
            <p class="card-interpretation">"${item.interpretacao}"</p>
          </div>

          <div class="card-formula-box">
            <div class="formula-header">
              <span class="formula-title">Cálculo numerológico:</span>
            </div>
            <code class="formula-code">${item.dado.formula}</code>
          </div>

          <div class="card-tags">
            ${item.dado.detalhes.palavrasChave.map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
          </div>
        </div>

        <div class="card-footer">
          <button type="button" class="btn-card-expand" data-arcano="${item.dado.detalhes.numero}" aria-label="Ver detalhes do Arcano ${item.dado.detalhes.nome}">
            <span>Ver perfil completo do Arcano</span>
            <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
          </button>
        </div>
      `;

      cardsContainer.appendChild(card);
    });

    // Eventos para expandir detalhes de qualquer arcano
    document.querySelectorAll('.btn-card-expand').forEach(btn => {
      btn.addEventListener('click', () => {
        const num = parseInt(btn.dataset.arcano, 10);
        abrirDetalhesDoArcano(num);
      });
    });
  }

  // Compartilhar / Copiar Resultado
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      if (!ultimoResultado) return;
      const r = ultimoResultado;

      const texto = `🔮 *MEUS ARCANOS PESSOAIS* (${r.dia}/${r.mes}/${r.ano})
-----------------------------------------
✨ *Arcano Pessoal:* ${r.pessoal.detalhes.numero} — ${r.pessoal.detalhes.nome} ${r.pessoal.detalhes.emoji}
"${r.pessoal.detalhes.pessoal}"

🧘 *Arcano da Alma:* ${r.alma.detalhes.numero} — ${r.alma.detalhes.nome} ${r.alma.detalhes.emoji}
"${r.alma.detalhes.alma}"

🎭 *Arcano da Personalidade:* ${r.personalidade.detalhes.numero} — ${r.personalidade.detalhes.nome} ${r.personalidade.detalhes.emoji}
"${r.personalidade.detalhes.personalidade}"

🌌 *Arcano do Destino:* ${r.destino.detalhes.numero} — ${r.destino.detalhes.nome} ${r.destino.detalhes.emoji}
"${r.destino.detalhes.destino}"

⏳ *Arcano do Ano (${r.anoAlvo}):* ${r.anoRegente.detalhes.numero} — ${r.anoRegente.detalhes.nome} ${r.anoRegente.detalhes.emoji}
"${r.anoRegente.detalhes.ano}"
-----------------------------------------
Descubra os seus Arcanos Pessoais!`;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(texto).then(() => {
          const originalText = shareBtn.innerHTML;
          shareBtn.innerHTML = `
            <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span>Copiado com sucesso!</span>
          `;
          shareBtn.classList.add('btn-copied');
          setTimeout(() => {
            shareBtn.innerHTML = originalText;
            shareBtn.classList.remove('btn-copied');
          }, 2400);
        });
      } else {
        alert('Texto pronto para copiar:\n\n' + texto);
      }
    });
  }

  // Enciclopédia dos 22 Arcanos
  function construirEnciclopedia() {
    encyclopediaGrid.innerHTML = '';
    for (let i = 1; i <= 22; i++) {
      const a = ARCANOS[i];
      const item = document.createElement('div');
      item.className = 'encyclo-card';
      item.innerHTML = `
        <div class="encyclo-img-wrap">
          <img 
            src="${encodeURI(a.imagem)}" 
            alt="Carta ${a.nome}" 
            class="encyclo-thumb" 
            loading="lazy"
            onerror="this.onerror=null; this.parentElement.innerHTML='<span class=\\'encyclo-emoji\\'>${a.emoji}</span>';"
          >
        </div>
        <div class="encyclo-card-top">
          <span class="encyclo-num">${a.numero} • ${a.romano}</span>
          <span class="encyclo-emoji-mini">${a.emoji}</span>
        </div>
        <h4 class="encyclo-title">${a.nome}</h4>
        <span class="encyclo-archetype">${a.arquétipo}</span>
        <button type="button" class="btn-view-card" data-card="${a.numero}">Ver todas as faces</button>
      `;
      encyclopediaGrid.appendChild(item);
    }

    document.querySelectorAll('.btn-view-card').forEach(btn => {
      btn.addEventListener('click', () => {
        const num = parseInt(btn.dataset.card, 10);
        abrirDetalhesDoArcano(num);
      });
    });
  }

  function abrirDetalhesDoArcano(numero) {
    const a = ARCANOS[numero];
    if (!a) return;

    const modalTitle = document.getElementById('modal-card-title');
    const modalBody = document.getElementById('modal-card-body');

    modalTitle.innerHTML = `
      <div class="modal-title-flex">
        <span class="modal-tarot-emoji">${a.emoji}</span>
        <div>
          <span class="modal-tarot-num">Arcano ${a.numero} • ${a.romano}</span>
          <h2 class="modal-tarot-name">${a.nome}</h2>
        </div>
      </div>
    `;

    modalBody.innerHTML = `
      <div class="modal-card-banner">
        <div class="modal-card-img-wrap">
          <img 
            src="${encodeURI(a.imagem)}" 
            alt="Carta ${a.nome}" 
            class="modal-tarot-img"
            onerror="this.style.display='none';"
          >
        </div>
        <div class="modal-card-banner-info">
          <span class="modal-tarot-num">Arcano ${a.numero} • ${a.romano}</span>
          <h2 class="modal-tarot-name">${a.nome}</h2>
          <p class="modal-archetype-text">${a.arquétipo}</p>
          <div class="card-tags modal-tags">
            ${a.palavrasChave.map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
          </div>
        </div>
      </div>

      <div class="modal-interpretations-list">
        <div class="modal-aspect-item">
          <div class="aspect-header">
            <span class="aspect-badge badge-pessoal">✨ Arcano Pessoal</span>
            <span class="aspect-subtitle">Poder & Realização</span>
          </div>
          <p class="aspect-text">${a.pessoal}</p>
        </div>

        <div class="modal-aspect-item">
          <div class="aspect-header">
            <span class="aspect-badge badge-alma">🧘 Arcano da Alma</span>
            <span class="aspect-subtitle">Missão & Aprendizado Sutil</span>
          </div>
          <p class="aspect-text">${a.alma}</p>
        </div>

        <div class="modal-aspect-item">
          <div class="aspect-header">
            <span class="aspect-badge badge-personalidade">🎭 Arcano da Personalidade</span>
            <span class="aspect-subtitle">Impressão & Imagem Externa</span>
          </div>
          <p class="aspect-text">${a.personalidade}</p>
        </div>

        <div class="modal-aspect-item">
          <div class="aspect-header">
            <span class="aspect-badge badge-destino">🌌 Arcano do Destino</span>
            <span class="aspect-subtitle">Caminho Maior de Manifestação</span>
          </div>
          <p class="aspect-text">${a.destino}</p>
        </div>

        <div class="modal-aspect-item">
          <div class="aspect-header">
            <span class="aspect-badge badge-ano">⏳ Arcano do Ano</span>
            <span class="aspect-subtitle">Ciclo & Energia Regente</span>
          </div>
          <p class="aspect-text">${a.ano}</p>
        </div>
      </div>
    `;

    modalEncyclopedia.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  if (encyclopediaBtn) {
    encyclopediaBtn.addEventListener('click', () => {
      construirEnciclopedia();
      // Mostra a lista dos 22
      const modalTitle = document.getElementById('modal-card-title');
      const modalBody = document.getElementById('modal-card-body');
      modalTitle.innerHTML = `<h2 class="modal-tarot-name">Guia Completo dos 22 Arcanos Maiores</h2>`;
      modalBody.innerHTML = '';
      modalBody.appendChild(encyclopediaGrid);
      modalEncyclopedia.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', fecharModal);
  }

  modalEncyclopedia.addEventListener('click', (e) => {
    if (e.target === modalEncyclopedia) {
      fecharModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalEncyclopedia.classList.contains('active')) {
      fecharModal();
    }
  });

  function fecharModal() {
    modalEncyclopedia.classList.remove('active');
    document.body.style.overflow = '';
  }
});
