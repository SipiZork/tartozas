const doc = document.getElementsByName('form');
const infoDiv = document.getElementById('info');

const getInfo = () => {
  const ki = document.getElementById('ki');
  const kinek = document.getElementById('kinek');
  const mennyit = document.getElementById('mennyit');

  return [ki.value, kinek.value, mennyit.value];
};

addEventListener('submit', async (e) => {
  e.preventDefault();
  infoDiv.textContent = "Feltöltés.....";
  let headers = new Headers();
  const info = getInfo();
  try {
    const response = await fetch(`https://script.google.com/macros/s/AKfycbwpPs5nSz28of__f-HRqvyDss49usRYJEcH9IvHoLoKoIkEAMq97ycARL7WFxumh_i8/exec?ki=${info[0]}&kinek=${info[1]}&mennyit=${info[2]}`, {
      mode: 'no-cors'
    });
  } catch (error) {
    infoDiv.textContent = "Valami hiba történt";
  }
  infoDiv.textContent = "Sikeres hozzáadás";

});