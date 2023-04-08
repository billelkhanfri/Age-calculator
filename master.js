const results = document.querySelector("form");
const inputs = Array.from(results.querySelectorAll("input"));

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    const click = document.getElementById("button");

    /* current time */
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    /* inputs values */
    const yearsInput = document.getElementById("year");
    const yrs = parseInt(yearsInput.value);

    const monthsInput = document.getElementById("month");
    const mth = parseInt(monthsInput.value);

    const dayInput = document.getElementById("day");
    const dy = parseInt(dayInput.value);

    /* logic*/
    click.addEventListener("click", (el) => {
      if (yrs > currentYear) {
        el.preventDefault;
        alert("enter a valid year");
      } else if (mth > currentMonth) {
        const yearResults = document.getElementById("years");
        yearResults.textContent = currentYear - yrs - 1;
      } else {
        const yearResults = document.getElementById("years");
        yearResults.textContent = currentYear - yrs;
      }

      if (mth > 12 || mth < 1) {
        el.preventDefault;
        alert("enter a valid month");
      } else if (mth > currentMonth && dy > currentDay) {
        const monthResults = document.getElementById("months");

        monthResults.textContent = 12 - mth + currentMonth - 1;
      } else if (mth > currentMonth) {
        const monthResults = document.getElementById("months");

        monthResults.textContent = 12 - mth + currentMonth;
      } else if (dy > currentDay) {
        const monthResults = document.getElementById("months");

        monthResults.textContent = currentMonth - mth - 1;
      } else {
        const monthResults = document.getElementById("months");

        monthResults.textContent = currentMonth - mth;
      }

      if (dy > 31 || dy < 1) {
        el.preventDefault;
        alert("enter a valid day");
      } else if (dy > currentDay) {
        const dayResults = document.getElementById("days");
        dayResults.textContent = 31 - dy + currentDay;
      } else {
        const dayResults = document.getElementById("days");
        dayResults.textContent = currentDay - dy;
      }
    });
  });
});
