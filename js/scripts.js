

window.addEventListener("load", function(event) {
  
  event.preventDefault();
  
  const h1Remove = document.querySelector("h1");
  h1Remove.remove();
  const h1Element = document.createElement("h1");
  h1Element.append("Webpage Recreation Practice");
  
  const bodyElement = document.querySelector("body");
  bodyElement.append(h1Element);

});

