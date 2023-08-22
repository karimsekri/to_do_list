const app = document.querySelector('#app') as HTMLDivElement;
const divListTaches = document.createElement("div") as HTMLDivElement;

let mesLabelsStored = localStorage.getItem("labels");
if (mesLabelsStored !== null) {
  const mesLabels: string[] = JSON.parse(mesLabelsStored);
  //console.log("mesLabels text", JSON.parse(mesLabels));
  for (let index = 0; index < mesLabels.length; index++) {
    const element = mesLabels[index];
    recreerHistorique(element);
  }
}

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

app.appendChild(divListTaches);


btnAjouterTache.addEventListener("click", () => {
  AjouterTache();  
  
});

listerTaches();


function AjouterTache(){
  const divContainerTacheSaved = document.createElement("div") as HTMLDivElement;
  divContainerTacheSaved.classList.add("tacheToSave");
  

  const labelTache = document.createElement("label") as HTMLLabelElement;
  labelTache.classList.add("tacheValue");
  labelTache.innerText = inputTache.value;
  
  const btnDelete = document.createElement("button") as HTMLButtonElement;
  btnDelete.innerText = "Remove";
  btnDelete.addEventListener("click", () => {
    checkboxTache.remove();
    labelTache.remove();
    btnDelete.remove();
    divContainerTacheSaved.remove();
  });

  const checkboxTache = document.createElement("input") as HTMLInputElement;
  checkboxTache.classList.add("checkbox");

  checkboxTache.addEventListener("change", () => {
    if (checkboxTache.checked) {
      labelTache.classList.add("checkboxTache");
     
    }  
    else{
      labelTache.classList.remove("checkboxTache");
    }
  });
  checkboxTache.setAttribute("type", "checkbox");

  divContainerTacheSaved.appendChild(checkboxTache);
  divContainerTacheSaved.appendChild(labelTache);
  divContainerTacheSaved.appendChild(btnDelete);
  divListTaches.appendChild(divContainerTacheSaved);
  

 
}

function listerTaches() {
  const listDesTaches = document.querySelectorAll(".tacheValue"); 
  const listTachesArray = Array.from(listDesTaches) as HTMLLabelElement[];
  const listDesCheckbox = document.querySelectorAll(".checkbox"); 
  const listCheckboxArray = Array.from(listDesCheckbox) as HTMLInputElement[];
   
  let tabTaches: string[] = []
  let tabChecked: boolean[] = []
  for (let index = 0; index < listTachesArray.length; index++) {
    const nomTache = listTachesArray[index].innerText;
    const checked = listCheckboxArray[index].checked
    //console.log("listTachesArray", listTachesArray);
    
    tabTaches.push(nomTache);
    tabChecked.push(checked);
  }

  
  
  localStorage.setItem('labels', JSON.stringify(tabTaches));
  localStorage.setItem('checkboxes', JSON.stringify(tabChecked));
  console.log(tabChecked);

}


function recreerHistorique (element: string){
  
 
    const divContainerTacheSaved = document.createElement("div") as HTMLDivElement;
    divContainerTacheSaved.classList.add("tacheToSave");    
  
    const labelTache = document.createElement("label") as HTMLLabelElement;
    labelTache.classList.add("tacheValue");
    labelTache.innerText = element;

    

    divContainerTacheSaved.appendChild(labelTache);    
    divListTaches.appendChild(divContainerTacheSaved);
  
  
}