function updateJobForm() {
  const jobSelect = document.getElementById('jobSelect').value;
  const job1Form = document.getElementById('job1Form');
  const job2Form = document.getElementById('job2Form');
  const job3Form = document.getElementById('job3Form');
  const cityForm = document.getElementById('cityForm');
  const forestForm = document.getElementById('forestForm');
  
  job1Form.style.display = 'none';
  job2Form.style.display = 'none';
  job3Form.style.display = 'none';
  cityForm.style.display = 'none';
  forestForm.style.display = 'none';

  if (jobSelect === '1') { // Курьер
    job1Form.style.display = 'block';
    calculateJob1Salary();
  } else if (jobSelect === '2') { // Склад
    job2Form.style.display = 'block';
    updateJob2Form();
  } else if (jobSelect === '3') { // Химик
    job3Form.style.display = 'block';
    calculateJob3Salary();
  }
}

function updateJob2Form() {
  const job2Option = document.getElementById('job2Option').value;
  const cityForm = document.getElementById('cityForm');
  const forestForm = document.getElementById('forestForm');
  
  if (job2Option === '1') { // ГОРОД
    cityForm.style.display = 'block';
    forestForm.style.display = 'none';
  } else if (job2Option === '2') { // ЛЕС
    forestForm.style.display = 'block';
    cityForm.style.display = 'none';
  }
  calculateJob2Salary();
}

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

function calculateJob2Salary() {
  const job2Option = document.getElementById('job2Option').value;
  let deliveries = [0, 0, 0, 0, 0];
  let prices = [0, 5000, 8000, 15000, 20000];
  let salary = 0;

  if (job2Option === '2') {
    prices = [0, 3000, 6000, 9000, 13000];
  }

  for (let i = 0; i < 5; i++) {
    deliveries[i] = document.getElementById(job2Option === '1' ? `cityDelivery${[50, 100, 200, 300, 500][i]}` : `forestDelivery${[50, 100, 200, 300, 500][i]}`).value;
    salary += deliveries[i] * prices[i];
    document.getElementById(`${job2Option === '1' ? 'city' : 'forest'}Delivery${[50, 100, 200, 300, 500][i]}Value`).textContent = deliveries[i];
  }

  const workingDaysJob2 = document.getElementById('workingDaysJob2').value;
  const dailySalary = salary;
  const weeklySalary = dailySalary * workingDaysJob2;
 
