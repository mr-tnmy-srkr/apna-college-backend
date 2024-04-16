const btns = document.querySelectorAll("button");
console.log(btns);
for (let btn of btns) {
  console.log(btn);
  btn.addEventListener("click", () => {
    alert("button clicked");
  });
}
