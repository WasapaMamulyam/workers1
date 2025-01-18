// Функция для обновления количества рабочих дней в неделю
function updateWorkingDays(job) {
    let workingDaysValue = 0;

    if (job === 1) {
        workingDaysValue = document.getElementById("workingDaysJob1").value;
        document.getElementById("workingDaysJob1Value").innerText = workingDaysValue;
    } else if (job === 2) {
        workingDaysValue = document.getElementById("workingDaysJob2").value;
        document.getElementById("workingDaysJob2Value").innerText = workingDaysValue;
    } else if (job === 3) {
        workingDaysValue = document.getElementById("workingDaysJob3").value;
        document.getElementById("workingDaysJob3Value").innerText = workingDaysValue;
    }
}
