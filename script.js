const fbbtn = document.querySelector("#fbbtn");
const mailbtn = document.querySelector("#mailbtn");

fbbtn.addEventListener("mouseover", () => {
  fbbtn.setAttribute("src", "images/facebookbighover.svg");
});

fbbtn.addEventListener("mouseout", () => {
  fbbtn.setAttribute("src", "images/facebookbig.svg");
});

mailbtn.addEventListener("mouseover", () => {
  mailbtn.setAttribute("src", "images/mailbighover.svg");
});

mailbtn.addEventListener("mouseout", () => {
  mailbtn.setAttribute("src", "images/mailbig.svg");
});
