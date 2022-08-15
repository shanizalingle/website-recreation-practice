

window.addEventListener("load", function(event) {
  
  event.preventDefault();
  
  const h1Remove = document.querySelector("h1");
  h1Remove.remove();
  const h1Element = document.createElement("h1");
  h1Element.append("Webpage Recreation Practice");
  const pElement = document.createElement("p");
  pElement.append("The HTML of this webpage was created with JavaScript.");
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  imgElement.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  imgElement.setAttribute("style", "width:50%");
  const h1Facts = document.createElement("h1");
  h1Facts.append("Facts about the Multicolored Tanger");
  const ulElement = document.createElement("ul");
  const liElement = document.createElement("li");
  liElement.append("It is endemic to the mountains of Colombia.");
  const liElement2 = document.createElement("li");
  liElement2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  const aElement = document.createElement("a");
  aElement.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
  aElement.append("Wikipedia");
  
  const bodyElement = document.querySelector("body");
  bodyElement.append(h1Element);
  bodyElement.append(pElement);
  bodyElement.append(imgElement);
  bodyElement.append(h1Facts);
  bodyElement.append(ulElement);
  bodyElement.append(liElement);
  bodyElement.append(liElement2);
  bodyElement.append(aElement);
});

