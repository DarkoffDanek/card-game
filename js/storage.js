function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function load(key, def) {
  let v = localStorage.getItem(key);
  return v ? JSON.parse(v) : def;
}
