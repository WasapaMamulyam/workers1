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

function calculateJob1Salary() {
  const deliveriesPerDay = document.getElementById('deliveriesPerDay').value;
  const workingDaysPerWeek = document.getElementById('workingDaysPerWeek').value;

  // Оплата за доставку для Курьера (предположим, по 2400 руб. за доставку)
  const dailySalary = deliveriesPerDay * 2400;
  const weeklySalary = dailySalary * workingDaysPerWeek;
  const monthlySalary = weeklySalary * 4;
  const yearlySalary = monthlySalary * 12;

  document.getElementById('job1Daily').textContent = dailySalary;
  document.getElementById('job1Weekly').textContent = weeklySalary;
  document.getElementById('job1Monthly').textContent = monthlySalary;
  document.getElementById('job1Yearly').textContent = yearlySalary;

  // Обновление значений на экране
  document.getElementById('deliveriesPerDayValue').textContent = deliveriesPerDay;
  document.getElementById('workingDaysPerWeekValue').textContent = workingDaysPerWeek;
}

function updateJob2Form() {
  const job2Option = document.getElementById('job2Option').value;
  const job2Slider = document.getElementById('job2Slider');
  
  if (job2Option === '1') {  // ГОРОД
    job2Slider.innerHTML = `
      <label>50г:</label>
      <input type="range" id="deliveriesJob2_50" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>50: <span id="deliveriesJob2_50Value">1</span></p>
      
      <label>100г:</label>
      <input type="range" id="deliveriesJob2_100" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>100: <span id="deliveriesJob2_100Value">1</span></p>
      
      <label>200г:</label>
      <input type="range" id="deliveriesJob2_200" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>200: <span id="deliveriesJob2_200Value">1</span></p>
      
      <label>300г:</label>
      <input type="range" id="deliveriesJob2_300" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>300: <span id="deliveriesJob2_300Value">1</span></p>
      
      <label>500г:</label>
      <input type="range" id="deliveriesJob2_500" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>500: <span id="deliveriesJob2_500Value">1</span></p>
    `;
  } else {  // ЛЕС
    job2Slider.innerHTML = `
      <label>50г:</label>
      <input type="range" id="deliveriesJob2_50" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>50: <span id="deliveriesJob2_50Value">1</span></p>
      
      <label>100г:</label>
      <input type="range" id="deliveriesJob2_100" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>100: <span id="deliveriesJob2_100Value">1</span></p>
      
      <label>200г:</label>
      <input type="range" id="deliveriesJob2_200" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>200: <span id="deliveriesJob2_200Value">1</span></p>
      
      <label>300г:</label>
      <input type="range" id="deliveriesJob2_300" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>300: <span id="deliveriesJob2_300Value">1</span></p>
      
      <label>500г:</label>
      <input type="range" id="deliveriesJob2_500" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>500: <span id="deliveriesJob2_500Value">1</span></p>
    `;
  }
}

function calculateJob2Salary() {
  const deliveriesJob2_50 = document.getElementById('deliveriesJob2_50').value;
  const deliveriesJob2_100 = document.getElementById('deliveriesJob2_100').value;
  const deliveriesJob2_200 = document.getElementById('deliveriesJob2_200').value;
  const deliveriesJob2_300 = document.getElementById('deliveriesJob2_300').value;
  const deliveriesJob2_500 = document.getElementById('deliveriesJob2_500').value;
  const workingDaysJob2 = document.getElementById('workingDaysJob2').value;

  // Расчет зарплаты для ГОРОД
  const citySalaryRates = [5000, 8000, 15000, 20000, 30000];
  
  let dailySalary = deliveriesJob2_50 * citySalaryRates[0] +
                    deliveriesJob2_100 * citySalaryRates[1] +
                    deliveriesJob2_200 * citySalaryRates[2] +
                    deliveriesJob2_300 * citySalaryRates[3] +
                    deliveriesJob2_500 * citySalaryRates[4];
  
  // Расчет зарплаты для ЛЕС
  const forestSalaryRates = [3000, 6000, 9000, 13000, 20000];
  if (document.getElementById('job2Option').value === '2') {
    dailySalary = deliveriesJob2_50 * forestSalaryRates[0] +
                  deliveriesJob2_100 * forestSalaryRates[1] +
                  deliveriesJob2_200 * forestSalaryRates[2] +
                  deliveriesJob2_300 * forestSalaryRates[3] +
                  deliveriesJob2_500 * forestSalaryRates[4];
  }

  const weeklySalary = dailySalary * workingDaysJob2;
  const monthlySalary = weeklySalary * 4;
  const yearlySalary = monthlySalary * 12;

  document.getElementById('job2Daily').textContent = dailySalary;
  document.getElementById('job2Weekly').textContent = weeklySalary;
  document.getElementById('job2Monthly').textContent = monthlySalary;
  document.getElementById('job2Yearly').textContent = yearlySalary;
}
