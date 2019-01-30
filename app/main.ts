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

let jsFrameworks: Framework[] = [ //tomar este array
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

const agregar = (framework:Framework) =>{//funcion agregar
  const link: HTMLAnchorElement = document.createElement('a');
  link.className = 'list-group-item list-group-item-action';
  link.href = 'javascript:void(0)';
  link.textContent = framework.name;
  link.onclick = () => {
    document.querySelector('.card-title').textContent = framework.name;
    document.querySelector('.card-text').textContent = framework.description;
    const frameworkSite: HTMLAnchorElement = document.querySelector('.card .btn btn-primary');//boton
    frameworkSite.target = '_blank';
    frameworkSite.href = framework.url;
    frameworkSite.textContent = `Go to ${framework.name} site`;
  }
  list.appendChild(link);
  
};

const list: HTMLElement = document.getElementById('list-tab');

jsFrameworks.forEach((framework) => {
  agregar(framework);
});

/* const Pdatos = (framework:Framework) => {

document.querySelector('formTecnologia').textContent = framework.name;
const frameworkSite: HTMLAnchorElement = document.querySelector('.formTecnologia.card .btn btn-agregar');

} */

//inputs
const  add:HTMLInputElement = document.getElementById('btnAdd') as HTMLInputElement;
const inputTecnologia: HTMLInputElement = document.getElementById('inlineFormInputTecnologia') as HTMLInputElement;
const inputDescripcion: HTMLInputElement = document.getElementById('inlineFormInputDescripcion') as HTMLInputElement;
const inputUrl: HTMLInputElement = document.getElementById('inlineFormInputurl') as HTMLInputElement;

document.onkeypress = () =>{
  if(inputTecnologia.value =="" || inputDescripcion.value == "" || inputUrl.value == "" ){
    add.disabled = true;
  } else {
    add.disabled = false;
  }
}



add.onclick = () => { //boton agregar

    const send = {
    name: inputTecnologia.value,
    description:inputDescripcion.value ,
    url: inputUrl.value

    
  }
   
 jsFrameworks.push(send);
 agregar(send);
  inputTecnologia.value = "";
  inputDescripcion.value  = "";
  inputUrl.value = "";


}


}


