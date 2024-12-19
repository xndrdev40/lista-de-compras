const form = document.querySelector("form");
const amount = document.getElementById("amount");
const itemlist = document.getElementById("list");
const acountItem = document.getElementById("acount-list");
const msgError = document.querySelector("alert");
const iconTrash = document.querySelector("icon-trash");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newItem = document.createElement("li");
  const imgChecked = document.createElement("img");
  const descriptionItem = document.createElement("span");
  const clickTrash = document.createElement("a")
  const imgtrash = document.createElement("img");
  
  
  imgChecked.classList.add("imgChecked");
  imgChecked.setAttribute("src", "assets/icon-checkbox.svg");
  
  imgtrash.classList.add("icon-trash");
  imgtrash.setAttribute("src", "assets/trash.svg");  
  
  clickTrash.setAttribute("href", "#");
  
  clickTrash.appendChild(imgtrash)
  newItem.append(imgChecked, descriptionItem, clickTrash);
 

  descriptionItem.textContent = amount.value;
  itemlist.append(newItem);
  amount.value = "";  

  clickTrash.addEventListener("click", function(event){
    event.preventDefault();
    newItem.remove();
  });

  imgChecked.addEventListener("click", ()=>{
    if(imgChecked.src ==="assets/icon-checkbox.svg"){
      imgChecked.src ="/assets/icon-checked.svg";
    }else{
      imgChecked.src="assets/icon-checkbox.svg"
    }
  })

});



