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


const add = ((framework:Framework) => {
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
});

const list: HTMLElement = document.getElementById('list-tab');

jsFrameworks.forEach((framework) => {
  add(framework);
});


const newName: HTMLInputElement = document.getElementById("inputName") as HTMLInputElement;
const newDescription: HTMLInputElement = document.getElementById("inputDescription") as HTMLInputElement;
const newURL: HTMLInputElement = document.getElementById("inputURL") as HTMLInputElement;
const submit: HTMLInputElement = document.getElementById("submit") as HTMLInputElement;


document.onkeypress = () => {
  if(newName.value == "" ||  newDescription.value == "" || newURL.value == "") {
    submit.disabled=true;
  } else {
    submit.disabled = false;
  }
}


submit.onclick = () =>{
  const newFrame = {
    name: newName.value,
    description: newDescription.value,
    url: newURL.value
    }
  
  jsFrameworks.push(newFrame);
  add(newFrame);
  newName.value = "";
  newDescription.value = "";
  newURL.value = "";
  submit.disabled=true;
}











