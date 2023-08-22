let mesLabels = localStorage.getItem("labels");
if (mesLabels != null) {
  console.log(JSON.parse(mesLabels));
  mesLabels = JSON.parse(mesLabels);
  for (let index = 0; index < mesLabels.length; index++) {
    const element = mesLabels[index];
    console.log(element);
    //AjouterTache(element);
    
  }
}
// for (let index = 0; index < mesLabels.length; index++) {
//   if (mesLabels != null) {
//     const element = mesLabels[index];
//     console.log(element);
//   }}
  
  


const app = document.querySelector('#app') as HTMLDivElement;
const divAjoutTache = document.createElement("div") as HTMLDivElement;
const inputTache = document.createElement("input") as HTMLInputElement;
inputTache.setAttribute("id", "input");
inputTache.setAttribute("type", "text");
inputTache.value = "texte ici";

const btnAjouterTache = document.createElement("button") as HTMLButtonElement;

const divListTaches = document.createElement("div") as HTMLDivElement;

const childTache : string [] = [];

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
  
listerTaches();
});


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
  checkboxTache.classList.add("checkboxTache");

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
   
  let tabTaches: string[] = []
  for (let index = 0; index < listTachesArray.length; index++) {
    const nomTache = listTachesArray[index].innerText;
    
    tabTaches.push(nomTache)
  }

 // console.log(tabTaches);
  
  localStorage.setItem('labels', JSON.stringify(tabTaches));

}
