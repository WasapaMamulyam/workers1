function updateJobForm() {
    const jobSelect = document.getElementById('jobSelect').value;
    const job1Form = document.getElementById('job1Form');
    const job2Form = document.getElementById('job2Form');
    const job3Form = document.getElementById('job3Form');

    // Скрыть все формы
    job1Form.style.display = 'none';
    job2Form.style.display = 'none';
    job3Form.style.display = 'none';

    // Отображать выбранную форму
    if (jobSelect === '1') {
        job1Form.style.display = 'block';
        calculateSalary(1);  // Вызов функции для курьера
    } else if (jobSelect === '2') {
        job2Form.style.display = 'block';
        // calculateSalary(2); // Для склада
    } else if (jobSelect === '3') {
        job3Form.style.display = 'block';
        // calculateSalary(3); // Для химика
    }
}

function calculateSalary(jobType) {
    let dailySalary = 0;
    let weeklySalary = 0;
    let monthlySalary = 0;
    let yearlySalary = 0;

    if (jobType === 1) {
        // Курьер
        const deliveries50 = document.getElementById('deliveriesJob1_50').value;
        const deliveries100 = document.getElementById('deliveriesJob1_100').value;
        const deliveries200 = document.getElementById('deliveriesJob1_200').value;
        const deliveries300 = document.getElementById('deliveriesJob1_300').value;
        const deliveries500 = document.getElementById('deliveriesJob1_500').value;
        const workingDays = document.getElementById('workingDaysJob1').value;

        // Подсчёт ежедневной зарплаты
        dailySalary = (deliveries50 * 5000) + (deliveries100 * 8000) + (deliveries200 * 15000) +
            (deliveries300 * 20000) + (deliveries500 * 30000);

        // Подсчёт зарплаты на неделю, месяц и год
        weeklySalary = dailySalary * workingDays;
        monthlySalary = weeklySalary * 4;
        yearlySalary = monthlySalary * 12;

        // Обновление отображения значений
        document.getElementById('job1DailyTotal').innerText = dailySalary;
        document.getElementById('job1WeeklyTotal').innerText = weeklySalary;
        document.getElementById('job1MonthlyTotal').innerText = monthlySalary;
        document.getElementById('job1YearlyTotal').innerText = yearlySalary;
    }
    // Можно добавить другие вакансии, используя аналогичный подход
}
