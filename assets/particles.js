function particlesJS_load(id, path) {
  fetch(path)
    .then(res => res.json())
    .then(config => {
      particlesJS(id, config);
    });
}
particlesJS_load('particles-js', 'assets/particles.json');
