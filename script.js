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

function updateJob2Form() {
  const job2Option = document.getElementById('job2Option').value;
  const job2Slider = document.getElementById('job2Slider');

  if (job2Option === '1') {  // ГОРОД
    job2Slider.innerHTML = `
      <label> 50г : </label>
      <input type="range" id="deliveriesJob2_50" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>50г: <span id="deliveriesJob2_50Value">1</span> | Заработано: <span id="earningsJob2_50">5000</span> руб</p>

      <label> 100г : </label>
      <input type="range" id="deliveriesJob2_100" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>100г: <span id="deliveriesJob2_100Value">1</span> | Заработано: <span id="earningsJob2_100">8000</span> руб</p>

      <label> 200г : </label>
      <input type="range" id="deliveriesJob2_200" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>200г: <span id="deliveriesJob2_200Value">1</span> | Заработано: <span id="earningsJob2_200">15000</span> руб</p>

      <label> 300г : </label>
      <input type="range" id="deliveriesJob2_300" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>300г: <span id="deliveriesJob2_300Value">1</span> | Заработано: <span id="earningsJob2_300">20000</span> руб</p>

      <label> 500г : </label>
      <input type="range" id="deliveriesJob2_500" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>500г: <span id="deliveriesJob2_500Value">1</span> | Заработано: <span id="earningsJob2_500">30000</span> руб</p>

      <label> Рабочие дни в неделю : </label>
      <input type="range" id="workingDaysJob2" min="1" max="7" value="7" onchange="calculateJob2Salary()">
      <p>Рабочие дни: <span id="workingDaysJob2Value">7</span></p>
    `;
  } else {  // ЛЕС
    job2Slider.innerHTML = `
      <label> 50г : </label>
      <input type="range" id="deliveriesJob2_50" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>50г: <span id="deliveriesJob2_50Value">1</span> | Заработано: <span id="earningsJob2_50">3000</span> руб</p>

      <label> 100г : </label>
      <input type="range" id="deliveriesJob2_100" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>100г: <span id="deliveriesJob2_100Value">1</span> | Заработано: <span id="earningsJob2_100">6000</span> руб</p>

      <label> 200г : </label>
      <input type="range" id="deliveriesJob2_200" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>200г: <span id="deliveriesJob2_200Value">1</span> | Заработано: <span id="earningsJob2_200">9000</span> руб</p>

      <label> 300г : </label>
      <input type="range" id="deliveriesJob2_300" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>300г: <span id="deliveriesJob2_300Value">1</span> | Заработано: <span id="earningsJob2_300">13000</span> руб</p>

      <label> 500г : </label>
      <input type="range" id="deliveriesJob2_500" min="1" max="40" value="1" onchange="calculateJob2Salary()">
      <p>500г: <span id="deliveriesJob2_500Value">1</span> | Заработано: <span id="earningsJob2_500">20000</span> руб</p>

      <label> Рабочие дни в неделю : </label>
      <input type="range" id="workingDaysJob2" min="1" max="7" value="7" onchange="calculateJob2Salary()">
      <p>Рабочие дни: <span id="workingDaysJob2Value">7</span></p>
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

  let dailySalary = 0;
  let earnings50 = deliveriesJob2_50 * (job2Option === '1' ? 5000 : 3000);
  let earnings100 = deliveriesJob2_100 * (job2Option === '1' ? 8000 : 6000);
  let earnings200 = deliveriesJob2_200 * (job2Option === '1' ? 15000 : 9000);
  let earnings300 = deliveriesJob2_300 * (job2Option === '1' ? 20000 : 13000);
  let earnings500 = deliveriesJob2_500 * (job2Option === '1' ? 30000 : 20000);

  dailySalary = earnings50 + earnings100 + earnings200 + earnings300 + earnings500;

  const weeklySalary = dailySalary * workingDaysJob2;
  const monthlySalary = weeklySalary * 4;
  const yearlySalary = monthlySalary * 12;

  // Обновляем заработок по каждому ползунку
  document.getElementById('earningsJob2_50').textContent = earnings50;
  document.getElementById('earningsJob2_100').textContent = earnings100;
  document.getElementById('earningsJob2_200').textContent = earnings200;
  document.getElementById('earningsJob2_300').textContent = earnings300;
  document.getElementById('earningsJob2_500').textContent = earnings500;

  // Обновляем общее количество доставок для каждого ползунка
  document.getElementById('deliveriesJob2_50Value').textContent = deliveriesJob2_50;
  document.getElementById('deliveriesJob2_100Value').textContent = deliveriesJob2_100;
  document.getElementById('deliveriesJob2_200Value').textContent = deliveriesJob2_200;
  document.getElementById('deliveriesJob2_300Value').textContent = deliveriesJob2_300;
  document.getElementById('deliveriesJob2_500Value').textContent = deliveriesJob2_500;

  // Обновляем рабочие дни
  document.getElementById('workingDaysJob2Value').textContent = workingDaysJob2;

  // Обновляем общий заработок по дням, неделям, месяцам и годам
  document.getElementById('job2Daily').textContent = dailySalary;
  document.getElementById('job2Weekly').textContent = weeklySalary;
  document.getElementById('job2Monthly').textContent = monthlySalary;
  document.getElementById('job2Yearly').textContent = yearlySalary;
}
