// Espera o carregamento completo do documento antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
  // Array de objetos contendo dados do quiz (perguntas, opções e resposta correta)
  const quizData = [
    // Cada objeto representa uma pergunta com suas opções e resposta correta
    {
      question: "Qual foi o nome da primeira versão de mascote do Android criada pelo desenvolvedor Dan Morrill?",
      options: ["a) Dandroids", "b) Bugdroid", "c) Danroid", "d) Robozilla"],
      correctAnswer: "a) Dandroids"
    },
    {
      question: "Quem foi a ilustradora responsável por redesenhar o mascote do Android, criando o Bugdroid?",
      options: ["a) Dan Morrill", "b) Irina Blok", "c) Russa Blok", "d) Android Artist"],
      correctAnswer: "b) Irina Blok"
    },
    {
      question: "Qual foi a principal inspiração para os traços do novo Bugdroid?",
      options: ["a) Desenhos animados", "b) Ilustrações de portas de banheiro", "c) Jogos de computador", "d) Logotipos de empresas de tecnologia"],
      correctAnswer: "b) Ilustrações de portas de banheiro"
    },
    {
      question: "Em que ano o Google decidiu substituir a nomenclatura de versões do Android baseadas em doces por numerações?",
      options: ["a) 2015", "b) 2017", "c) 2018", "d) 2020"],
      correctAnswer: "d) 2020"
    },
    {
      question: "Qual foi a última versão do Android nomeada com base em um doce antes da mudança para numerações?",
      options: ["a) Nougat", "b) Oreo", "c) Pie", "d) Jelly Bean"],
      correctAnswer: "c) Pie"
    },
    {
      question: "Qual é a área da Tecnologia da Informação (TI) que envolve a proteção de dados empresariais?",
      options: ["a) Suporte Técnico", "b) Programação", "c) Segurança da Informação", "d) Administração de Redes"],
      correctAnswer: "c) Segurança da Informação"
    },
    {
      question: "Qual profissional de TI é responsável por garantir o bom funcionamento de aplicativos antes de serem lançados?",
      options: ["a) Programador Mobile", "b) Especialista em E-commerce", "c) Qualidade de Software", "d) Chief Technology Officer (CTO)"],
      correctAnswer: "c) Qualidade de Software"
    },
    {
      question: "Quais são os pilares do sucesso nos projetos de TI mencionados no seu site?",
      options: ["a) Talento, colaboração e aprendizado contínuo", "b) Hardware, software e redes", "c) Programação, segurança e suporte técnico", "d) Nuvem, qualidade de software e administração de banco de dados"],
      correctAnswer: "a) Talento, colaboração e aprendizado contínuo"
    },
    {
      question: "O que é mencionado como essencial ao escolher instituições de ensino na área de TI?",
      options: ["a) Experiência prática", "b) Reconhecimento pelo Google", "c) Reconhecimento pelo Ministério da Educação (MEC)", "d) Certificações internacionais"],
      correctAnswer: "a) Experiência prática"
    },
    {
      question: "Além de jogos para o público em geral, qual outra área é mencionada no curso de Jogos Digitais?",
      options: ["a) Jogos educacionais", "b) Jogos de mesa", "c) Jogos de tabuleiro", "d) Jogos online"],
      correctAnswer: "a) Jogos educacionais"
    },
    {
      question: "O que é destacado como vital na era digital, abrangendo hardware, software, redes e sistemas?",
      options: ["a) Jogos Digitais", "b) Tecnologia da Informação (TI)", "c) Engenharia de Software", "d) Ciência da Computação"],
      correctAnswer: "b) Tecnologia da Informação (TI)"
    },
    {
      question: "Qual versão do Android não existiu devido à mudança para numerações?",
      options: ["a) Jelly Bean", "b) Lollipop", "c) Marshmallow", "d) Android Q"],
      correctAnswer: "a) Jelly Bean"
    },
    {
      question: "Quem é mencionado como o diretor-chefe de tecnologia (CTO) responsável pela visão estratégica e inovação tecnológica?",
      options: ["a) Dan Morrill", "b) Irina Blok", "c) Chief Technology Officer (CTO)", "d) Matheus Henrique"],
      correctAnswer: "c) Chief Technology Officer (CTO)"
    },
    // ... Outras perguntas
  ];

  // Elementos do HTML para manipulação
  const quizContainer = document.getElementById("quiz");
  const resultElement = document.getElementById("result");
  const resultButton = document.getElementById("resultButton");

  // Função para construir o quiz no HTML
  function buildQuiz() {
    quizData.forEach((questionData, index) => {
      // Criação do elemento para a pergunta
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");
      questionDiv.innerHTML = `<p>${index + 1}. ${questionData.question}</p>`;

      // Criação do elemento para as opções
      const optionsList = document.createElement("ul");
      optionsList.classList.add("options");

      // Loop através das opções e criação dos elementos de opção
      questionData.options.forEach((option, optionIndex) => {
        const optionItem = document.createElement("li");
        optionItem.classList.add("option");
        optionItem.innerHTML = `
          <label>
            <input type="radio" name="question${index}" value="${option}">
            ${option}
          </label>
        `;
        optionsList.appendChild(optionItem);
      });

      // Adiciona os elementos ao quizContainer
      questionDiv.appendChild(optionsList);
      quizContainer.appendChild(questionDiv);
    });
  }

  // Função para exibir o resultado do quiz
  function showResult() {
    let score = 0;
    const userAnswers = [];

    // Loop através das perguntas para verificar as respostas do usuário
    quizData.forEach((questionData, index) => {
      const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
      if (selectedOption) {
        userAnswers.push(selectedOption.value);
        if (selectedOption.value === questionData.correctAnswer) {
          score++;
        }
      } else {
        userAnswers.push(null);
      }
    });

    // Constrói a string HTML com o resultado
    let resultHTML = `<p>Você acertou ${score} de ${quizData.length} perguntas (${((score / quizData.length) * 100).toFixed(2)}%).</p>`;
    resultHTML += "<p>Respostas:</p>";

    // Adiciona informações sobre as respostas do usuário e respostas corretas
    if (resultElement) {
      quizData.forEach((questionData, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = questionData.correctAnswer;

        resultHTML += `<p>${index + 1}. ${questionData.question} - Sua resposta: ${userAnswer ? userAnswer : "Não respondida"}. Resposta correta: ${correctAnswer}.</p>`;
      });

      // Exibe o resultado no elemento resultElement
      resultElement.innerHTML = resultHTML;
    }
  }

  // Associa a função showResult ao clique do botão resultButton
  if (resultButton) {
    resultButton.onclick = showResult;
  }
  
  // Chama a função para construir o quiz ao carregar a página
  buildQuiz();
});
