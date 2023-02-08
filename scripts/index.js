
setInterval(dameLaHora, 1000);
function dameLaHora() {
  let fecha = new Date()
  let reloj = `${fecha.getHours()} : ${fecha.getMinutes()} : ${fecha.getSeconds()}`;
  document.getElementById('hora').innerText = reloj;
}
