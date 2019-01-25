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

let showNew = (framework: Framework) => {
  const link: HTMLAnchorElement = document.createElement('a');
  link.className = 'list-group-item list-group-item-action';
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
}

jsFrameworks.forEach((framework) => {
  showNew(framework);
});

//-----------------------------------------------------------------------------------------------------------

const myAdd = document.getElementById('addBtn') as HTMLButtonElement;
const name1:HTMLInputElement = document.getElementById('inlineFormInputName2') as HTMLInputElement;
  const description1:HTMLInputElement = document.getElementById('inlineFormInputDescription2') as HTMLInputElement;
  const url1:HTMLInputElement = document.getElementById('inlineFormInputURL2') as HTMLInputElement;


document.onkeypress = () => {
  if(name1.value=="" || description1.value=="" || url1.value=="" ){
    myAdd.disabled=true;
  } else {
    myAdd.disabled =false;
  }
}

//myAdd.disabled=true; 
myAdd.onclick = () => {
  /*const name1:HTMLInputElement = document.getElementById('inlineFormInputName2') as HTMLInputElement;
  const description1:HTMLInputElement = document.getElementById('inlineFormInputDescription2') as HTMLInputElement;
  const url1:HTMLInputElement = document.getElementById('inlineFormInputURL2') as HTMLInputElement;*/

  
  //myAdd.addEventListener("keyup",function (){},false);

  

    let newFramework = {
      name: name1.value,
      description: description1.value,
      url: url1.value
    } 

    jsFrameworks.push(newFramework);
    showNew(newFramework);
    console.log(newFramework); 
    name1.value = "";
    description1.value = "";
    url1.value = "";
    myAdd.disabled=true; 
 
  
  
  /*let newFramework = {
    name: name1.value,
    description: description1.value,
    url: url1.value
  }*/

  

}

let nombreK: HTMLInputElement= document.querySelector("#inlineFormInputName2");
let desck: HTMLInputElement= document.querySelector("#inlineFormInputDescription2");
let urlk: HTMLInputElement= document.querySelector("#inlineFormInputUrl2");

//nombreK.addEventListener