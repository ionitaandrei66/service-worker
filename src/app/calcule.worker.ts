/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const rezultat = data.numar * 2;
  postMessage(rezultat);
});
