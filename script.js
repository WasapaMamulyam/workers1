// Функция обновления формы в зависимости от выбранной вакансии
function updateJobForm() {
  const jobSelect = document.getElementById('jobSelect').value;
  const job1Form = document.getElementById('job1Form');
  const job2Form = document.getElementById('job2Form');
  const job3Form = document.getElementById('job3Form');

  job1Form.style.display = 'none';
  job2Form.style.display = 'none';
  job3Form.style.display = 'none';

  if (jobSelect === '1') {
    job1Form.style.display = 'block';
    calculateJob1Salary();
  } else if (jobSelect === '2') {
    job2Form.style.display = 'block';
    updateJob2Form();
  } else if (jobSelect === '3') {
    job3Form.style.display = 'block';
    calculateJob3Salary();
  }
}

// Функция для расчёта зарплаты для вакансии 1
function calculateJob1Salary() {
  const deliveriesPerDay = document.getElementById('deliveriesPerDay').value;
  const workingDaysPerWeek = document.getElementById('workingDaysPerWeek').value;

  const dailySalary = deliveriesPerDay * 2400;
  const weeklySalary = dailySalary * workingDaysPerWeek;
  const monthlySalary = weeklySalary * 4;
  const yearlySalary = monthlySalary * 12;

  document.getElementById('job1Daily').textContent = dailySalary;
  document.getElementById('job1Weekly').textContent = weeklySalary;
  document.getElementById('job1Monthly').textContent = monthlySalary;
  document.getElementById('job1Yearly').textContent = yearlySalary;
  document.getElementById('deliveriesPerDayValue').textContent = deliveriesPerDay;
  document.getElementById('workingDaysPerWeekValue').textContent = workingDaysPerWeek;
}

// Функция для обновления формы для вакансии 2
function updateJob2Form() {
  const job2Option = document.getElementById('job2Option').value;
  const job2Slider = document.getElementById('job2Slider');
  
  if (job2Option === '1') {
    job2Slider.innerHTML = `
      <label for="deliveriesJob2">Количество доставок (50 – 5000):</label>
      <input type="range" id="deliveriesJob2" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <span id="deliveriesJob2Value">1</span> доставок
      <br>

      <label for="workingDaysJob2">Количество рабочих дней в неделю:</label>
      <input type="range" id="workingDaysJob2" min="1" max="7" value="1" onchange="calculateJob2Salary()">
      <span id="workingDaysJob2Value">1</span> дней/неделя
      <br>
    `;
  }
  calculateJob2Salary();
}

// Функция для расчёта зарплаты для вакансии 2
function calculateJob2Salary() {
  const job2Option = document.getElementById('job2Option').value;
  const deliveriesJob2 = document.getElementById('deliveriesJob2').value;
  const workingDaysJob2 = document.getElementById('workingDaysJob2').value;

  let pricePerDelivery = 0;
  if (job2Option === '1') {
    if (deliveriesJob2 == 50) pricePerDelivery = 5000;
    if (deliveriesJob2 == 100) pricePerDelivery = 8000;
    if (deliveriesJob2 == 200) pricePerDelivery = 15000;
    if (deliveriesJob2 == 300) pricePerDelivery = 20000;
    if (deliveriesJob2 == 500) pricePerDelivery = 30000;
  } else if (job2Option === '2') {
    if (deliveriesJob2 == 50) pricePerDelivery = 3000;
    if (deliveriesJob2 == 100) pricePerDelivery = 6000;
    if (deliveriesJob2 == 200) pricePerDelivery = 9000;
    if (deliveriesJob2 == 300) pricePerDelivery = 13000;
    if (deliveriesJob2 == 500) pricePerDelivery = 20000;
  }

  const dailySalary = pricePerDelivery * deliveriesJob2;
  const weeklySalary = dailySalary * workingDaysJob2;
  const monthlySalary = weeklySalary * 4;

  document.getElementById('job2Daily').textContent = dailySalary;
  document.getElementById('job2Weekly').textContent = weeklySalary;
  document.getElementById('job2Monthly').textContent = monthlySalary;
  document.getElementById('deliveriesJob2Value').textContent = deliveriesJob2;
  document.getElementById('workingDaysJob2Value').textContent = workingDaysJob2;
}

// Функция для расчёта зарплаты для вакансии 3
function calculateJob3Salary() {
  const itemsDelivered = document.getElementById('itemsDelivered').value;
  const workingDaysJob3 = document.getElementById('workingDaysJob3').value;

  const dailySalary = itemsDelivered * 200;
  const weeklySalary = dailySalary * workingDaysJob3;
  const monthlySalary = weeklySalary * 4;

  document.getElementById('job3Daily').textContent = dailySalary;
  document.getElementById('job3Weekly').textContent = weeklySalary;
  document.getElementById('job3Monthly').textContent = monthlySalary;
  document.getElementById('itemsDeliveredValue').textContent = itemsDelivered;
  document.getElementById('workingDaysJob3Value').textContent = workingDaysJob3;
}

updateJobForm();
