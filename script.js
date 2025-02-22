const gameSteps = [
    {
      question: {
        en: "Choose one person to reveal who your ex is:",
        kr: "누구를 선택할까요? 당신의 전 애인을 공개합니다:",
      },
      options: [
        { en: "Baekhyun 1", kr: "백현 1" },
        { en: "Baekhyun 2", kr: "백현 2" },
        { en: "Baekhyun 3", kr: "백현 3" },
        { en: "Baekhyun 4", kr: "백현 4" },
        { en: "Baekhyun 5", kr: "백현 5" },
        { en: "Baekhyun 6", kr: "백현 6" },
      ],
    },
    {
      question: {
        en: "How many years did you date?",
        kr: "얼마나 사귀었나요?",
      },
      options: [
        { en: "19 days", kr: "19일" },
        { en: "92 days", kr: "92일" },
        { en: "5 months", kr: "5개월" },
        { en: "6 years", kr: "6년" },
        { en: "4 years", kr: "4년" },
        { en: "12 years", kr: "12년" },
      ],
    },
    {
      question: {
        en: "Why did you break up?",
        kr: "왜 헤어졌나요?",
      },
      options: [
        { en: "Mongryong didn't approve of you.", kr: "몽룡이 당신을 승인하지 않았어요." },
        { en: "Misunderstandings that led to a big argument.", kr: "오해로 큰 다툼이 있었어요." },
        { en: "You ate too many cucumbers. He tried his best to endure it but he couldn't.", kr: "오이를 너무 많이 먹어서 참으려 했지만 못 참았어요." },
        { en: "Couldn't overcome personality differences.", kr: "성격 차이를 극복하지 못했어요." },
        { en: "You chose SM over INB.", kr: "INB 대신 SM을 선택했어요." },
        { en: "He found out that you used to be a sasaeng.", kr: "당신이 과거 사생팬이었다는 걸 알게 됐어요." },
      ],
    },
    {
      question: {
        en: "What were his last words to you?",
        kr: "그의 마지막 말은 무엇이었나요?",
      },
      options: [
        { en: "Don't go.", kr: "가지 마세요." },
        { en: "Don't ever contact me again.", kr: "다시는 연락하지 마세요." },
        { en: "My album is coming out soon.", kr: "제 앨범이 곧 나옵니다." },
        { en: "There was not a single moment where I didn't love you.", kr: "당신을 사랑하지 않은 순간이 없었어요." },
        { en: "I hope you'll find someone better than me.", kr: "나보다 더 좋은 사람을 만나길 바래요." },
        { en: "BYE BYE BYE BYE.", kr: "바이 바이 바이 바이." },
        { en: "This is for the best.", kr: "이게 최선이에요." },
      ],
    },
    {
      question: {
        en: "Who contacted you to invite you on a date?",
        kr: "누가 데이트를 신청했나요?",
      },
      options: [
        { en: "Baekhyun 1", kr: "백현 1" },
        { en: "Baekhyun 2", kr: "백현 2" },
        { en: "Baekhyun 3", kr: "백현 3" },
        { en: "Baekhyun 4", kr: "백현 4" },
        { en: "Baekhyun 5", kr: "백현 5" },
        { en: "Baekhyun 6", kr: "백현 6" },
      ],
    },
    {
      question: {
        en: "Who did you contact to invite on a date?",
        kr: "누구에게 데이트를 신청했나요?",
      },
      options: [
        { en: "Baekhyun 1", kr: "백현 1" },
        { en: "Baekhyun 2", kr: "백현 2" },
        { en: "Baekhyun 3", kr: "백현 3" },
        { en: "Baekhyun 4", kr: "백현 4" },
        { en: "Baekhyun 5", kr: "백현 5" },
        { en: "Baekhyun 6", kr: "백현 6" },
      ],
    },
    {
      question: {
        en: "Who did you officially go on a date with?",
        kr: "누구와 공식적으로 데이트를 했나요?",
      },
      options: [
        { en: "Baekhyun 1", kr: "백현 1" },
        { en: "Baekhyun 2", kr: "백현 2" },
        { en: "Baekhyun 3", kr: "백현 3" },
        { en: "Baekhyun 4", kr: "백현 4" },
        { en: "Baekhyun 5", kr: "백현 5" },
        { en: "Baekhyun 6", kr: "백현 6" },
      ],
    },
    {
      question: {
        en: "Does your ex regret losing you?",
        kr: "당신의 전 애인이 당신을 잃은 걸 후회하나요?",
      },
      options: [
        { en: "Yes", kr: "네" },
        { en: "No", kr: "아니요" },
      ],
    },
    {
      question: {
        en: "Who do you end up with officially?",
        kr: "누구와 공식적으로 끝내나요?",
      },
      options: [
        { en: "Baekhyun 1", kr: "백현 1" },
        { en: "Baekhyun 2", kr: "백현 2" },
        { en: "Baekhyun 3", kr: "백현 3" },
        { en: "Baekhyun 4", kr: "백현 4" },
        { en: "Baekhyun 5", kr: "백현 5" },
        { en: "Baekhyun 6", kr: "백현 6" },
      ],
    },
  ];
  
  let currentStep = 0;
  
  function startGame() {
    document.getElementById("intro-screen").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");
    displayStep(currentStep);
  }
  
  function displayStep(step) {
    const gameContent = document.getElementById("game-content");
    const stepData = gameSteps[step];
  
    gameContent.innerHTML = `
      <h2>${stepData.question.en}</h2>
      <h2>${stepData.question.kr}</h2>
      ${stepData.options
        .map(
          (option, index) =>
            `<div class="door-option" onclick="selectOption(${index})">
               <img src="baekhyun${index + 1}.png" alt="Baekhyun ${index + 1}">
               <p>${option.en}</p>
               <p>${option.kr}</p>
             </div>`
        )
        .join("")}
    `;
  }
  
  function selectOption(optionIndex) {
    alert(`You selected: ${gameSteps[currentStep].options[optionIndex].en}`);
    currentStep++;
    if (currentStep < gameSteps.length) {
      displayStep(currentStep);
    } else {
      endGame();
    }
  }
  
  function endGame() {
    document.getElementById("game-screen").classList.add("hidden");
    document.getElementById("end-screen").classList.remove("hidden");
  }
  
  function nextStep() {
    if (currentStep < gameSteps.length) {
      displayStep(currentStep);
    } else {
      endGame();
    }
  }