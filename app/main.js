var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, asd " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("from Typescript");
var jsFrameworks = [
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
var list = document.getElementById('list-tab');
var showNew = function (framework) {
    var link = document.createElement('a');
    link.className = 'list-group-item list-group-item-action';
    link.href = 'javascript:void(0)';
    link.textContent = framework.name;
    link.onclick = function () {
        document.querySelector('.card-title').textContent = framework.name;
        document.querySelector('.card-text').textContent = framework.description;
        var frameworkSite = document.querySelector('.card .btn.btn-primary');
        frameworkSite.target = '_blank';
        frameworkSite.href = framework.url;
        frameworkSite.textContent = "Go to " + framework.name + " site";
    };
    list.appendChild(link);
};
jsFrameworks.forEach(function (framework) {
    showNew(framework);
});
//-----------------------------------------------------------------------------------------------------------
var myAdd = document.getElementById('addBtn');
var name1 = document.getElementById('inlineFormInputName2');
var description1 = document.getElementById('inlineFormInputDescription2');
var url1 = document.getElementById('inlineFormInputURL2');
document.onkeypress = function () {
    if (name1.value == "" || description1.value == "" || url1.value == "") {
        myAdd.disabled = true;
    }
    else {
        myAdd.disabled = false;
    }
};
//myAdd.disabled=true; 
myAdd.onclick = function () {
    /*const name1:HTMLInputElement = document.getElementById('inlineFormInputName2') as HTMLInputElement;
    const description1:HTMLInputElement = document.getElementById('inlineFormInputDescription2') as HTMLInputElement;
    const url1:HTMLInputElement = document.getElementById('inlineFormInputURL2') as HTMLInputElement;*/
    //myAdd.addEventListener("keyup",function (){},false);
    var newFramework = {
        name: name1.value,
        description: description1.value,
        url: url1.value
    };
    jsFrameworks.push(newFramework);
    showNew(newFramework);
    console.log(newFramework);
    name1.value = "";
    description1.value = "";
    url1.value = "";
    myAdd.disabled = true;
    /*let newFramework = {
      name: name1.value,
      description: description1.value,
      url: url1.value
    }*/
};
var nombreK = document.querySelector("#inlineFormInputName2");
var desck = document.querySelector("#inlineFormInputDescription2");
var urlk = document.querySelector("#inlineFormInputUrl2");
//nombreK.addEventListener
