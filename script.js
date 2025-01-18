// Обновление отображения выбранной вакансии и включение соответствующего слайдера
function updateVacancy() {
  const vacancy = document.getElementById('vacancy').value;
  const sections = document.querySelectorAll('.vacancy-section');

  sections.forEach(section => {
    section.style.display = 'none';
  });

  if (vacancy === 'courier') {
    document.getElementById('courierSection').style.display = 'block';
  } else if (vacancy === 'chemist') {
    document.getElementById('chemistSection').style.display = 'block';
  } else if (vacancy === 'warehouse') {
    document.getElementById('warehouseSection').style.display = 'block';
  }

  updateSalary(vacancy);  // Обновляем зарплату при изменении вакансии
}

// Функция для обновления зарплаты
function updateSalary(vacancy) {
  const dayRate = 2400; // Ставка за день для курьера
  const multiplier = {
    courier: 2400,
    chemist: 3000, // Примерная ставка для химика
    warehouse: 2000, // Примерная ставка для склада
  };

  const days = document.getElementById(vacancy + 'Days').value;
  const daySalary = multiplier[vacancy] * days;
  const weekSalary = daySalary * 5;  // Предположим, что рабочая неделя - 5 дней
  const monthSalary = weekSalary * 4;  // Месяц - 4 недели
  const yearSalary = monthSalary * 12;  // Год - 12 месяцев

  // Обновление значений под ползунком
  document.getElementById(vacancy + 'DaysValue').textContent = days;

  // Обновление значений зарплаты
  document.getElementById('daySalary').textContent = daySalary;
  document.getElementById('weekSalary').textContent = weekSalary;
  document.getElementById('monthSalary').textContent = monthSalary;
  document.getElementById('yearSalary').textContent = yearSalary;
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  updateVacancy();  // Инициализация выбранной вакансии
});
