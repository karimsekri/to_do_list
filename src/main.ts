const app = document.querySelector('#app') as HTMLDivElement;
const divListTaches = document.createElement("div") as HTMLDivElement;



const divAjoutTache = document.createElement("div") as HTMLDivElement;
const inputTache = document.createElement("input") as HTMLInputElement;
inputTache.setAttribute("id", "input");
inputTache.setAttribute("type", "text");
inputTache.value = "texte ici";

const btnAjouterTache = document.createElement("button") as HTMLButtonElement;

divAjoutTache.appendChild(inputTache);
divAjoutTache.appendChild(btnAjouterTache);
app.appendChild(divAjoutTache);

divAjoutTache.style.border = "1px";
divAjoutTache.style.borderStyle = "solid";
divAjoutTache.style.borderColor = "red";
divListTaches.style.border = "1px";
divListTaches.style.borderStyle = "solid";
divListTaches.style.borderColor = "black";
btnAjouterTache.innerText = "Ajouter Tache";

const btnDeleteTache = document.createElement("button") as HTMLButtonElement;
const divContainerTacheSaved = document.createElement("div") as HTMLDivElement;
divContainerTacheSaved.classList.add("tacheToSave");    


const labelTache = document.createElement("label") as HTMLLabelElement;
labelTache.classList.add("tacheValue");


const checkboxTache = document.createElement("input") as HTMLInputElement;
checkboxTache.classList.add("checkbox");
checkboxTache.setAttribute("type", "checkbox");



btnDeleteTache.classList.add("btnRemove");
btnDeleteTache.innerText= "Remove"; 


//Récuperer la liste des taches et les afficher
onPageLoad();


btnAjouterTache.addEventListener("click", () => {
  createRowTache(inputTache.value);
  onPageLoad();
});

btnDeleteTache.addEventListener("click", () => {
    let divContainerTacheSavedId =  divContainerTacheSaved.getAttribute("id")
  if (divContainerTacheSavedId !== null) {
    deleteRowTache(divContainerTacheSavedId);
    onPageLoad();
  }
    
});


function recreerHistorique (elementLabelText: string, elementCheckboxChecked : boolean ){
  divContainerTacheSaved.setAttribute("id", elementLabelText );
  labelTache.innerText = elementLabelText;
  checkboxTache.checked = elementCheckboxChecked;
  
  divContainerTacheSaved.appendChild(checkboxTache);
  divContainerTacheSaved.appendChild(labelTache); 
  divContainerTacheSaved.appendChild(btnDeleteTache); 

  let dernierdivContainerTacheSaved = divListTaches.lastChild; 
  console.log(divContainerTacheSaved);
  if (dernierdivContainerTacheSaved != null) {    
    divListTaches.insertBefore(divContainerTacheSaved, dernierdivContainerTacheSaved.nextSibling);
  }
  else{
    divListTaches.appendChild(divContainerTacheSaved);
  }
  
  app.appendChild(divListTaches);

  

  checkboxTache.addEventListener("change", () => {
    if (checkboxTache.checked) {
      labelTache.classList.add("checkboxTache");
     
    }  
    else{
      labelTache.classList.remove("checkboxTache");
    }
    
  });
}

async function onPageLoad(){
  const res = await fetch("http://localhost:3030/maTacheFindAll")
  const messages  = await res.text()  
  const messagesArray : string[] = JSON.parse(messages)  
  messagesArray.forEach((item ) => {    
    recreerHistorique(item.tacheName, item.tacheIsChecked)     
  });
}
async function createRowTache(inputTacheParam: string){
  const res = await fetch("http://localhost:3030/maTacheCreate/"+inputTacheParam)
  const messages  = await res.text()
  console.log(messages)  
      
}

async function deleteRowTache(idTacheParam: string){
  const res = await fetch("http://localhost:3030/maTacheDelete/"+idTacheParam,{
    method:'DELETE'
  })
  const messages  = await res.text()
  console.log(messages)  
      
}

async function upDateRowTache(inputTacheParam: string){
  const res = await fetch("http://localhost:3030/upDateRowTache/"+inputTacheParam)
  const messages  = await res.text()
  console.log(messages)  
      
}
