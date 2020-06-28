if(window.location.search.includes("debug")) {
  window.APP = window.APP || {};
  window.APP.DEBUG = true;
}

if(window.APP.DEBUG) {
  document.documentElement.style.backgroundColor = 'magenta';
  document.body.style.backgroundColor = 'magenta';
}
