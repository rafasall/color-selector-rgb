window.addEventListener('load', start);

function start() {

  // Variáveis globais

  var rvalue = document.querySelector('#r');
  var gvalue = document.querySelector('#g');
  var bvalue = document.querySelector('#b');

  var rdisplay = document.querySelector('#r-value');
  var gdisplay = document.querySelector('#g-value');
  var bdisplay = document.querySelector('#b-value');

  var displaycolor = document.querySelector('#displayColor');

  var display = document.querySelector('#color-chosen');

  var rglobal = 0;
  var gglobal = 0;
  var bglobal = 0;

  // Renders
  function renderDisplay(r, g, b) {
    rdisplay.value = r;
    gdisplay.value = g;
    bdisplay.value = b;

    displayColor.textContent = 'RGB(' + r + ',' + g + ',' + b + ')';
  }

  function renderColor(r, g, b) {

    defcolor(r, g, b);

    function defcolor(r, g, b) {
      return color = 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    display.style.backgroundColor = color;
    rglobal = r;
    gglobal = g;
    bglobal = b;
  }

  // Construindo SPA
  renderDisplay(rglobal, gglobal, bglobal);
  renderColor(rdisplay.value, gdisplay.value, bdisplay.value);

  // Instanciando Listeners
  rvalue.addEventListener('change', rmudar);
  gvalue.addEventListener('change', gmudar);
  bvalue.addEventListener('change', bmudar);

  // Functions chamadas pelos Listeners
  function rmudar() {
    renderColor(rvalue.value, gvalue.value, bvalue.value);
    renderDisplay(rglobal, gglobal, bglobal);
  }

  function gmudar() {
    renderColor(rvalue.value, gvalue.value, bvalue.value);
    renderDisplay(rglobal, gglobal, bglobal);
  }

  function bmudar() {
    renderColor(rvalue.value, gvalue.value, bvalue.value);
    renderDisplay(rglobal, gglobal, bglobal);
  }
}