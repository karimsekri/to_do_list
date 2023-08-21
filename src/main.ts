const app = document.querySelector('#app') as HTMLDivElement;
const divAjoutTache = document.createElement("div") as HTMLDivElement;
const inputTache = document.createElement("input") as HTMLInputElement;
inputTache.setAttribute("id", "input");
inputTache.setAttribute("type", "text");
inputTache.value = "texte ici";

const btnAjouterTache = document.createElement("button") as HTMLButtonElement;

const divListTaches = document.createElement("div") as HTMLDivElement;


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


function AjouterTache(){
  const divContainerTacheSaved = document.createElement("div") as HTMLDivElement;

  const labelTache = document.createElement("label") as HTMLLabelElement;
  labelTache.innerText = inputTache.value;
  
  const btnDelete = document.createElement("button") as HTMLButtonElement;
  btnDelete.innerText = "Remove";
  btnDelete.addEventListener("click", () => {
    checkboxTache.remove();
    labelTache.remove();
    btnDelete.remove();
  });

  const checkboxTache = document.createElement("input") as HTMLInputElement;
  checkboxTache.setAttribute("id", "checkboxTache");

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
