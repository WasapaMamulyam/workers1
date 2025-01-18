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
    calculateJob2Salary();
  } else if (jobSelect === '3') {
    job3Form.style.display = 'block';
    calculateJob3Salary();
  }
}

function calculateJob1Salary()
