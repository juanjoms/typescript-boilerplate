class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, asd " + this.greeting;
  }
}

let greeter = new Greeter("from Typescript");

type Framework = {
  name: string,
  description: string,
  url: string
}

let jsFrameworks: Framework[] = [
  {
    name: 'Angular',
    description: 'Officia excepteur do dolor id ullamco magna qui ullamco.',
    url: 'https://angular.io'
  },
  {
    name: 'Vue.js',
    description: 'Ex do exercitation voluptate nisi Lorem non officia reprehenderit incididunt irure eiusmod.',
    url: 'angular.io'
  },
  {
    name: 'React',
    description: 'Nostrud Lorem excepteur tempor Lorem non ad occaecat commodo ut duis commodo consectetur proident.',
    url: 'angular.io'
  },
  {
    name: 'Ember',
    description: 'Cupidatat et id aliqua laboris esse irure eu incididunt veniam ea labore aute adipisicing.',
    url: 'angular.io'
  }
];

const list: HTMLElement = document.getElementById('list-tab');
const elements = Array.from(document.querySelectorAll('.searche')) as HTMLInputElement[];
const texto: HTMLInputElement = document.querySelector('.prueba');
const texto2: HTMLInputElement = document.querySelector('.prueba2');
const texto3: HTMLInputElement = document.querySelector('.prueba3');
const button: HTMLButtonElement = document.querySelector(".btnadd");
const searchbar: HTMLInputElement = document.querySelector(".searchbar");
let newFramework:Framework = {name:"",description:"",url:"" };
let criterio: HTMLInputElement = document.querySelector('.searchbar');

//button.disabled=true;

texto.onkeyup = () => {
  texto.value ==="" || texto2.value === "" || texto3.value ==="" ? button.classList.add("disabled"): button.classList.remove("disabled");
  
}

texto2.onkeyup = () => {
  texto.value ==="" || texto2.value === "" || texto3.value ==="" ? button.classList.add("disabled"): button.classList.remove("disabled");
}

texto3.onkeyup = () => {
  texto.value ==="" || texto2.value === "" || texto3.value ==="" ? button.classList.add("disabled"): button.classList.remove("disabled");
}

searchbar.onblur = () =>{
  console.log(elements)
elements.forEach((element) =>{
  alert("we");
})
}


let prueba = () => {
  button.disabled=true;
  newFramework.name= texto.value.toString();
newFramework.description = texto2.value.toString();
newFramework.url = texto3.value.toString();
  const link: HTMLAnchorElement = document.createElement('a');
  link.className = 'list-group-item list-group-item-action searche';
  link.href = 'javascript:void(0)';
  link.textContent = texto.value.toString();
  link.onclick = () => {
    document.querySelector('.card-title').textContent = newFramework.name;
    document.querySelector('.card-text').textContent = newFramework.description;
    
    const frameworkSite: HTMLAnchorElement = document.querySelector('.card .btn.btn-primary');
    frameworkSite.target = '_blank';
    frameworkSite.href = newFramework.url;
    frameworkSite.textContent = `Go to ${newFramework.url} site`;
    
}
list.appendChild(link);
texto.value="";
texto2.value="";
texto3.value="";

}

jsFrameworks.forEach((framework) => {
  const link: HTMLAnchorElement = document.createElement('a');
  link.className = 'list-group-item list-group-item-action searche';
  link.href = 'javascript:void(0)';
  link.textContent = framework.name;
  link.onclick = () => {
    document.querySelector('.card-title').textContent = framework.name;
    document.querySelector('.card-text').textContent = framework.description;
    const frameworkSite: HTMLAnchorElement = document.querySelector('.card .btn.btn-primary');
    frameworkSite.target = '_blank';
    frameworkSite.href = framework.url;
    frameworkSite.textContent = `Go to ${framework.name} site`;
  }
  list.appendChild(link);
});



