document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", function() {
  let text = document.createElement("p");
  text.innerHTML = this.innerHTML + " is pressed";
  text.style.textAlign = "center";
  text.style.marginTop = "20px";
  this.parentNode.appendChild(text);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://example.com/api/click");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify({ button: this.innerHTML }));
  });
  });