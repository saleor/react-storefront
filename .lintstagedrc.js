module.exports = {
  "*.{js,ts,tsx}": [() => "turbo run lint:staged"],
  "*.{js,ts,tsx,css,md,json}": "prettier --write",
};
