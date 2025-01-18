// Функция для обновления отображения вакансий и расчета зарплаты
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

// Функция для расчета зарплаты
function calculateSalary() {
  // Курьер (2400 за каждый день работы)
  const courierDays = parseInt(document.getElementById("courierDays") ? document.getElementById("courierDays").value : 0);
  const courierDaily = 2400;
  const courierDaySalary = courierDays * courierDaily;

  // Химик (100000 за 500г производства)
  const chemistDays = parseInt(document.getElementById("chemistDays") ? document.getElementById("chemistDays").value : 0);
  const chemistDaily = 100000;
  const chemistDaySalary = chemistDays * chemistDaily;

  // Склад (оплата зависит от ползунка)
  const warehouseDays = parseInt(document.getElementById("warehouseDays") ? document.getElementById("warehouseDays").value : 0);
  const warehouseDaily = 5000;
  const warehouseDaySalary = warehouseDays * warehouseDaily;

  // Общий расчет
  const totalDaySalary = courierDaySalary + chemistDaySalary + warehouseDaySalary;
  const totalWeekSalary = totalDaySalary * 7;
  const totalMonthSalary = totalWeekSalary * 4;
  const totalYearSalary = totalMonthSalary * 12;

  // Обновление значений на странице
  document.getElementById("daySalary").textContent = totalDaySalary;
  document.getElementById("weekSalary").textContent = totalWeekSalary;
  document.getElementById("monthSalary").textContent = totalMonthSalary;
  document.getElementById("yearSalary").textContent = totalYearSalary;

  // Обновление значений под ползунками
  if (courierDays > 0) {
    document.getElementById("courierDaysValue").textContent = courierDays;
  }
  if (chemistDays > 0) {
    document.getElementById("chemistDaysValue").textContent = chemistDays;
  }
  if (warehouseDays > 0) {
    document.getElementById("warehouseDaysValue").textContent = warehouseDays;
  }
}

// Инициализация страницы
updateVacancy();

// Слушатели событий для ползунков
document.getElementById("courierDays")?.addEventListener("input", calculateSalary);
document.getElementById("chemistDays")?.addEventListener("input", calculateSalary);
document.getElementById("warehouseDays")?.addEventListener("input", calculateSalary);
