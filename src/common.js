if(window.location.search.includes("debug")) {
  window.APP = window.APP || {};
  window.APP.DEBUG = true;
}

if(window.APP.DEBUG) {
  const backgroundColor = 'black';
  document.documentElement.style.backgroundColor = backgroundColor;
  document.body.style.backgroundColor = backgroundColor;
}
