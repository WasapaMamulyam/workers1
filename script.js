// Функция для обновления отображаемой вакансии
function updateVacancy() {
  const selectedVacancy = document.getElementById("vacancy").value;
  
  // Скрываем все секции
  document.getElementById("courierSection").style.display = "none";
  document.getElementById("chemistSection").style.display = "none";
  document.getElementById("warehouseSection").style.display = "none";
  
  // Показываем секцию, соответствующую выбранной вакансии
  if (selectedVacancy === "courier") {
    document.getElementById("courierSection").style.display = "block";
  } else if (selectedVacancy === "chemist") {
    document.getElementById("chemistSection").style.display = "block";
  } else if (selectedVacancy === "warehouse") {
    document.getElementById("warehouseSection").style.display = "block";
  }
  
  // Обновляем зарплату при изменении вакансии
  updateSalary();
}

// Функция для обновления зарплаты
function updateSalary() {
  const selectedVacancy = document.getElementById("vacancy").value;
  
  let daySalary = 0;
  let weekSalary = 0;
  let monthSalary = 0;
  let yearSalary = 0;

  // Курьер
  if (selectedVacancy === "courier") {
    const courierDays = document.getElementById("courierDays").value;
    const courierLoads = document.getElementById("courierLoads").value;

    document.getElementById("courierDaysValue").textContent = courierDays;
    document.getElementById("courierLoadsValue").textContent = courierLoads;

    // Расчёт зарплаты
    daySalary = courierDays * courierLoads * 2400;
    weekSalary = daySalary * 7;
    monthSalary = weekSalary * 4;
    yearSalary = monthSalary * 12;
  }

  // Химик
  if (selectedVacancy === "chemist") {
    const chemistDays = document.getElementById("chemistDays").value;

    document.getElementById("chemistDaysValue").textContent = chemistDays;

    // Расчёт зарплаты
    daySalary = chemistDays * 2000;
    weekSalary = daySalary * 7;
    monthSalary = weekSalary * 4;
    yearSalary = monthSalary * 12;
  }

  // Склад
  if (selectedVacancy === "warehouse") {
    const warehouseDays = document.getElementById("warehouseDays").value;

    document.getElementById("warehouseDaysValue").textContent = warehouseDays;

    // Расчёт зарплаты
    daySalary = warehouseDays * 1500;
    weekSalary = daySalary * 7;
    monthSalary = weekSalary * 4;
    yearSalary = monthSalary * 12;
  }

  // Обновление результатов зарплаты
  document.getElementById("daySalary").textContent = daySalary;
  document.getElementById("weekSalary").textContent = weekSalary;
  document.getElementById("monthSalary").textContent = monthSalary;
  document.getElementById("yearSalary").textContent = yearSalary;
}

// Обработчики для ползунков
document.getElementById("courierDays").addEventListener("input", updateSalary);
document.getElementById("courierLoads").addEventListener("input", updateSalary);
document.getElementById("chemistDays").addEventListener("input", updateSalary);
document.getElementById("warehouseDays").addEventListener("input", updateSalary);

// Инициализация страницы при загрузке
updateVacancy();
