// Функции для расчета зарплаты
function calculateSalary() {
  // Курьер (2400 за каждый день работы)
  const courierDays = parseInt(document.getElementById("courierDays").value);
  const courierDaily = 2400;
  const courierDaySalary = courierDays * courierDaily;

  // Химик (100000 за 500г производства)
  const chemistDays = parseInt(document.getElementById("chemistDays").value);
  const chemistDaily = 100000;
  const chemistDaySalary = chemistDays * chemistDaily;

  // Склад (оплата зависит от ползунка)
  const warehouseDays = parseInt(document.getElementById("warehouseDays").value);
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
  document.getElementById("courierDaysValue").textContent = courierDays;
  document.getElementById("chemistDaysValue").textContent = chemistDays;
  document.getElementById("warehouseDaysValue").textContent = warehouseDays;
}

// Слушатели событий для изменения ползунков
document.getElementById("courierDays").addEventListener("input", calculateSalary);
document.getElementById("chemistDays").addEventListener("input", calculateSalary);
document.getElementById("warehouseDays").addEventListener("input", calculateSalary);

// Инициализация начальных значений
calculateSalary();
