// Функция для обновления отображения вакансий
function updateVacancy() {
  // Скрываем все секции
  document.getElementById('courierSection').style.display = 'none';
  document.getElementById('chemistSection').style.display = 'none';
  document.getElementById('warehouseSection').style.display = 'none';

  // Получаем выбранную вакансию
  const vacancy = document.getElementById('vacancy').value;

  // Показываем нужную секцию
  if (vacancy === 'courier') {
    document.getElementById('courierSection').style.display = 'block';
  } else if (vacancy === 'chemist') {
    document.getElementById('chemistSection').style.display = 'block';
  } else if (vacancy === 'warehouse') {
    document.getElementById('warehouseSection').style.display = 'block';
  }

  // Выполняем расчет зарплаты после изменения вакансии
  calculateSalary();
}

// Функция для обновления значения под ползунком
function updateValue(id) {
  const slider = document.getElementById(id);
  const valueDisplay = document.getElementById(id + "Value");
  valueDisplay.textContent = slider.value;

  // Выполняем перерасчет зарплаты
  calculateSalary();
}

// Функция для расчета зарплаты
function calculateSalary() {
  // Получаем количество рабочих дней для каждого ползунка
  const courierDays = parseInt(document.getElementById("courierDays").value || 0);
  const chemistDays = parseInt(document.getElementById("chemistDays").value || 0);
  const warehouseDays = parseInt(document.getElementById("warehouseDays").value || 0);

  // Курьер (2400 за каждый день работы)
  const courierDaily = 2400;
  const courierDaySalary = courierDays * courierDaily;

  // Химик (100000 за 500г производства)
  const chemistDaily = 100000;
  const chemistDaySalary = chemistDays * chemistDaily;

  // Склад (оплата зависит от ползунка)
  const warehouseDaily = 5000;
  const warehouseDaySalary = warehouseDays * warehouseDaily;

  // Общий расчет
  const totalDaySalary = courierDaySalary + chemistDaySalary + warehouseDaySalary;
  const totalWeekSalary = totalDaySalary * 7;
  const totalMonthSalary = totalWeekSalary * 4;
  const totalYearSalary = totalMonthSalary * 12;

  // Обновление значений на странице
  document.getElementById("daySalary").textContent = totalDaySalary;
  document.getElementById("weekSalary").
