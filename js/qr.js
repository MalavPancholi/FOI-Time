// CHANGE THIS URL WHEN YOU HOST THE SITE
const menuURL = window.location.origin + "/index.html";

new QRCode(document.getElementById("qrcode"), {
  text: menuURL,
  width: 180,
  height: 180,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});
