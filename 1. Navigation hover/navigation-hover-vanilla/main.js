let selectedItem = null;

function handleMouseEnter(title) {


}

function handleMouseLeave(title) {}

function handleClick(title) {

  if (selectedItem) {
    document.getElementById(selectedItem).classList.remove("selected");
    document.getElementById(selectedItem).removeChild(document.getElementById(selectedItem).lastChild);
  }
  document.getElementById(title).classList.add("selected");
  const decoration = document.createElement("hr");
  decoration.classList.add("decoration");
  requestAnimationFrame(() => {
    decoration.classList.add("show");
    });
 
  document.getElementById(title).appendChild(decoration);

  selectedItem = title;
}
