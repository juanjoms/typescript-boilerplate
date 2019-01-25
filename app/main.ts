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
/*
type infoBlock = {
  title: string,
  word: string,
}

let htmlinfoBlock: infoBlock[] = [
  {
    title: 'Name',
    word: 'Name'
  },
  {
    title: 'Description',
    word: 'Description'
  },
  {
    title: 'URL',
    word: 'URL'
  }];

const infoBlock.forEach(block) => {
}*/

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


const submit: HTMLButtonElement = document.getElementById("submit") as HTMLButtonElement;
submit.onclick = () =>{

  const newName: HTMLInputElement = document.getElementById("inpuntName") as HTMLInputElement;
  const newDescription: HTMLInputElement = document.getElementById("inpuntName") as HTMLInputElement;
  const newURL: HTMLInputElement = document.getElementById("inpuntName") as HTMLInputElement;

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
}











