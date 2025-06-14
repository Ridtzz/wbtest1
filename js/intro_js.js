 // Показываем только introModal при загрузке страницы
  window.onload = () => {
    const intro = document.getElementById('introModal');
    const warning = document.getElementById('warningModal');

    if (intro) intro.style.display = 'flex';
    if (warning) warning.style.display = 'none'; // на всякий случай
  };

  // Закрыть intro и показать проверочный вопрос
  function closeIntro() {
    document.getElementById('introModal').style.display = 'none';
    document.getElementById('warningModal').style.display = 'flex';
  }

function checkAnswer(option) {
  const correctSound = document.getElementById('checkCorrect');
  const failSound = document.getElementById('confirmSound');

  if (option === 1) {
    // Проигрываем звук правильного ответа
    if (checkCorrect) {
      correctSound.currentTime = 0;
      correctSound.play();
    }

    // Скрываем модальное окно
    document.getElementById('warningModal').style.display = 'none';
  } else {
    // Проигрываем звук неправильного ответа
    if (failSound) {
      failSound.currentTime = 0;
      failSound.play();
    }

    // Показываем шаг ошибки
    document.getElementById('quizStep').classList.add('hidden');
    document.getElementById('failStep').classList.remove('hidden');
  }
}



  // Обработка ответов на основные вопросы теста
  function nextQuestion(current) {
    document.getElementById(`q${current}`).classList.remove('active');
    document.getElementById(`q${current + 1}`).classList.add('active');
  }

  // Показ финального результата
  function showResult() {
    document.getElementById('q3').classList.remove('active');
    document.getElementById('result').classList.add('active');
  }