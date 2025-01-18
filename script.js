document.addEventListener('DOMContentLoaded', function () {
    const vacancySelect = document.getElementById('vacancy-select');
    const courier = document.getElementById('courier');
    const chemist = document.getElementById('chemist');
    const warehouse = document.getElementById('warehouse');
    
    const deliveries = document.getElementById('deliveries');
    const deliveryValue = document.getElementById('delivery-value');
    const totalDay = document.getElementById('total-day');
    const totalWeek = document.getElementById('total-week');
    const totalMonth = document.getElementById('total-month');
    const totalYear = document.getElementById('total-year');
    
    const days = document.getElementById('days');
    const daysValue = document.getElementById('days-value');
    const chemistDay = document.getElementById('chemist-day');
    const chemistWeek = document.getElementById('chemist-week');
    const chemistMonth = document.getElementById('chemist-month');
    const chemistYear = document.getElementById('chemist-year');
    
    const warehouseDays = document.getElementById('warehouse-days');
    const warehouseDaysValue = document.getElementById('warehouse-days-value');
    const warehouseDay = document.getElementById('warehouse-day');
    const warehouseWeek = document.getElementById('warehouse-week');
    const warehouseMonth = document.getElementById('warehouse-month');
    const warehouseYear = document.getElementById('warehouse-year');
    
    function updateCourierSalary() {
        const deliveriesValue = deliveries.value;
        deliveryValue.textContent = deliveriesValue;
        
        const daySalary = deliveriesValue * 2400;
        totalDay.textContent = daySalary;
        totalWeek.textContent = daySalary * 7;
        totalMonth.textContent = daySalary * 30;
        totalYear.textContent = daySalary * 365;
    }

    function updateChemistSalary() {
        const daysWorked = days.value;
        daysValue.textContent = daysWorked;

        const daySalary = daysWorked * 100000;
        chemistDay.textContent = daySalary;
        chemistWeek.textContent = daySalary * 7;
        chemistMonth.textContent = daySalary * 30;
        chemistYear.textContent = daySalary * 365;
    }

    function updateWarehouseSalary() {
        const warehouseDaysValue = warehouseDays.value;
        warehouseDaysValue.textContent = warehouseDaysValue;
        
        const daySalary = warehouseDaysValue * 5000;
        warehouseDay.textContent = daySalary;
        warehouseWeek.textContent = daySalary * 7;
        warehouseMonth.textContent = daySalary * 30;
        warehouseYear.textContent = daySalary * 365;
    }

    vacancySelect.addEventListener('change', function () {
        const selectedVacancy = vacancySelect.value;
        
        courier.style.display = (selectedVacancy === 'courier') ? 'block' : 'none';
        chemist.style.display = (selectedVacancy === 'chemist') ? 'block' : 'none';
        warehouse.style.display = (selectedVacancy === 'warehouse') ? 'block' : 'none';
        
        if (selectedVacancy === 'courier') updateCourierSalary();
        if (selectedVacancy === 'chemist') updateChemistSalary();
        if (selectedVacancy === 'warehouse') updateWarehouseSalary();
    });

    deliveries.addEventListener('input', updateCourierSalary);
    days.addEventListener('input', updateChemistSalary);
    warehouseDays.addEventListener('input', updateWarehouseSalary);

    vacancySelect.dispatchEvent(new Event('change'));
});
