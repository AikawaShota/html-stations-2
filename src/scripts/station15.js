function displayList() {
  const fruits = document.getElementById("fruits")
  const new_element = document.createElement("ul")
  fruits.appendChild(new_element)
  const fruitsList = document.querySelectorAll("#fruits>p")
  const new_list = document.querySelector("#fruits>ul")
  for (let i = 0; i < fruitsList.length; i++) {
    let new_item = document.createElement("li");
    new_item.innerHTML = fruitsList[i].textContent;
    new_list.appendChild(new_item)
    fruitsList[i].remove();
  }
}