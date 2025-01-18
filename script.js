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
  document.getElementById('workingDaysPerWeekValue').textContent
