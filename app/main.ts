class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
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

const showFrameworks = (framework) => {
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
  showFrameworks(framework);
});




const addNewElement: HTMLElement = document.getElementById('add');
addNewElement.onclick = () =>{

  const nFramework = document.getElementById('newFramework') as HTMLInputElement;
  const nDesc = document.getElementById('newDescription') as HTMLInputElement;
  const nURL = document.getElementById('newURL') as HTMLInputElement;
  
  if(nFramework.value.length > 0 && nDesc.value.length > 0 && nURL.value.length > 0){
  const enviar = {
    name: nFramework.value,
    description: nDesc.value,
    url: nURL.value
  }
    jsFrameworks.push(enviar);
    showFrameworks(enviar);

    nFramework.value = "";
    nDesc.value = "";
    nURL.value = "";
  } else {
    alert('Todos los campos deben ser llenados');
  }
/*
  console.log(jsFrameworks);*/
}
