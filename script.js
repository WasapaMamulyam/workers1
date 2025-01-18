// Функция для расчета зарплаты курьера
function calculateSalary(job) {
    if (job === 1) {
        const deliveries = parseInt(document.getElementById("deliveriesJob1").value);
        document.getElementById("deliveriesJob1Value").innerText = deliveries;

        const workingDays = parseInt(document.getElementById("workingDaysJob1").value);
        document.getElementById("workingDaysJob1Value").innerText = workingDays;

        const deliveryRate = 2400;

        const dailySalary = deliveries * deliveryRate;
        const weeklySalary = dailySalary * workingDays;
        const monthlySalary = weeklySalary * 4;
        const yearlySalary = monthlySalary * 12;

        document.getElementById("job1DailyTotal").innerText = dailySalary;
        document.getElementById("job1WeeklyTotal").innerText = weeklySalary;
        document.getElementById("job1MonthlyTotal").innerText = monthlySalary;
        document.getElementById("job1YearlyTotal").innerText = yearlySalary;
    }
}

// Функция для обновления ползунков и расчета зарплаты склада
function updateJob2Form() {
    const job2Option = document.getElementById("job2Option").value;
    if (job2Option === "1") {
        // Город
        document.getElementById("deliveriesJob2_50").setAttribute("max", 40);
        document.getElementById("deliveriesJob2_100").setAttribute("max", 40);
        document.getElementById("deliveriesJob2_200").setAttribute("max", 40);
        document.getElementById("deliveriesJob2_300").setAttribute("max", 40);
        document.getElementById("deliveriesJob2_500").setAttribute("max", 40);
    } else {
        // Лес
        document.getElementById("deliveriesJob2_50").setAttribute("max", 30);
        document.get
