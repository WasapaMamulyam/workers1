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

function updateJob2Form() {
  const job2Option = document.getElementById('job2Option').value;
  if (job2Option === '1') {
    document.getElementById('job2Option1').style.display = 'block';
    document.getElementById('job2Option2').style.display = 'none';
  } else {
    document.getElementById('job2Option1').style.display = 'none';
    document.getElementById('job2Option2').style.display = 'block';
  }
  calculateJob2Salary();
}

function calculateJob2Salary() {
  const job2Option = document.getElementById('job2Option').value;
  const deliveriesJob2_50 = document.getElementById('deliveriesJob2_50').value;
  const deliveriesJob2_100 = document.getElementById('deliveriesJob2_100').value;
  const deliveriesJob2_200 = document.getElementById('deliveriesJob2_200').value;
  const deliveriesJob2_300 = document.getElementById('deliveriesJob2_300').value;
  const deliveriesJob2_500 = document.getElementById('deliveriesJob2_500').value;
  const workingDaysJob2 = document.getElementById('workingDaysJob2').value;
  let pricePerDelivery = 0;

  // Для Город
  if (job2Option === '1') {
    pricePerDelivery = (deliveriesJob2_50 * 5000) + (deliveriesJob2_100 * 8000) + (deliveriesJob2_200 * 15000) + (deliveriesJob2_300 * 20000) + (deliveriesJob2_500 * 30000);
  }

  // Для Лес
  if (job2Option === '2') {
    pricePerDelivery = (deliveriesJob2_50 * 3000) + (deliveriesJob2_100 * 6000) + (deliveriesJob2_200 * 9000) + (deliveriesJob2_300 * 13000) + (deliveriesJob2_500 * 20000);
  }

  const dailySalary = pricePerDelivery;
  const weeklySalary = dailySalary * workingDaysJob2;
  const monthlySalary = weeklySalary * 4;

  document.getElementById('job2Daily').textContent = dailySalary;
  document.getElementById('job2Weekly').textContent = weeklySalary;
  document.getElementById('job2Monthly').textContent = monthlySalary;
  document.getElementById('workingDaysJob2Value').textContent = workingDaysJob2;
}

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
