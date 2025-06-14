// Проверка ответа на вопрос
function checkQuizAnswer(current, isCorrect) {
  const correctSound = document.getElementById('correctSound');
  const wrongSound = document.getElementById('wrongSound');

  if (isCorrect) {
    // Не играем correctSound на последнем вопросе, там будет omg
    if (current < 6 && correctSound) {
      correctSound.currentTime = 0;
      correctSound.play();
    }
    nextQuestion(current);
  } else {
    if (wrongSound) {
      wrongSound.currentTime = 0;
      wrongSound.play();
    }
    showWrongAnswerModal();
  }
}


function nextQuestion(current) {
  // Скрыть текущий вопрос
  const currentCard = document.getElementById(`q${current}`);
  if (currentCard) {
    currentCard.classList.remove('active');
  }

  // Если это последний вопрос — показать результат и проиграть звук
  if (current === 6) {
    const resultCard = document.getElementById('result');
    if (resultCard) {
      resultCard.classList.add('active', 'show-result');
    }

    // Проигрываем звук OMG
    const omgSound = document.getElementById('omg');
    if (omgSound) {
      omgSound.currentTime = 0;
      omgSound.play();
    }
  } else {
    // Показать следующий вопрос
    const nextCard = document.getElementById(`q${current + 1}`);
    if (nextCard) {
      nextCard.classList.add('active');
    }
  }
}


// Модалка при ошибке
function showWrongAnswerModal() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <p><strong>Неа, ты ошиблась</strong></p>
      <img src="img/answer_wrong_v2.webp" alt="Фейл"  class="fail">
      <button class="answer" onclick="location.reload()">Заново</button>
    </div>
  `;
  document.body.appendChild(modal);
}

