const form = document.querySelector("form");
const amount = document.getElementById("amount");
const itemlist = document.getElementById("list");
const msgError = document.getElementById("mensage-error");
const iconTrash = document.querySelector(".icon-trash");
const closed = document.querySelector(".closed");



form.addEventListener("submit", (event) => {
  event.preventDefault();

  
  const inputValue = amount.value.trim();
  const regex = /^[A-Za-zÀ-ÿ\s]+$/;
  
  if(!regex.test(inputValue)){
    alert("Diite valor válido!!");
    amount.value = "";
    return;
  }

  const newItem = document.createElement("li");
  const clickchecked = document.createElement("a")
  const imgChecked = document.createElement("img");
  const descriptionItem = document.createElement("span");
  const clickTrash = document.createElement("a")
  const imgtrash = document.createElement("img");
  
  
  imgChecked.classList.add("imgChecked");
  imgChecked.setAttribute("src", "assets/icon-checkbox.svg");
  
  imgtrash.classList.add("icon-trash");
  imgtrash.setAttribute("src", "assets/trash.svg");  
  
  clickTrash.setAttribute("href", "#");
  clickchecked.setAttribute("href", "#");
  clickTrash.classList.add("click-trash");
  
  clickchecked.appendChild(imgChecked);
  clickTrash.appendChild(imgtrash);
  newItem.append(clickchecked, descriptionItem, clickTrash);
 

  descriptionItem.textContent = amount.value;
  itemlist.append(newItem);
  amount.value = "";  

 
  clickTrash.addEventListener("click", function(event){
    if(newItem){
      msgError.style.display = "flex"
    }
    event.preventDefault();
    newItem.remove();
  });

  clickchecked.addEventListener("click", ()=>{
    if(imgChecked.src.includes("icon-checkbox.svg")){
      imgChecked.src = "assets/icon-checked.svg";
    }else{
      imgChecked.src = "assets/icon-checkbox.svg";
    }
  })

  closed.addEventListener("click", function(event){
    event.preventDefault();
    msgError.remove();
    
  })

});



