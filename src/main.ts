const app = document.querySelector('#app') as HTMLDivElement;
const divAjoutTache = document.createElement("div") as HTMLDivElement;
const inputTache = document.createElement("input") as HTMLInputElement;
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

  divListTaches.appendChild(divContainerTacheSaved);
  divContainerTacheSaved.appendChild(labelTache);
}
