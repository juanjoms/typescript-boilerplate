var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
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
var showFrameworks = function (framework) {
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
    showFrameworks(framework);
});
var addNewElement = document.getElementById('add');
addNewElement.onclick = function () {
    var nFramework = document.getElementById('newFramework');
    var nDesc = document.getElementById('newDescription');
    var nURL = document.getElementById('newURL');
    if (nFramework.value.length > 0 && nDesc.value.length > 0 && nURL.value.length > 0) {
        var enviar = {
            name: nFramework.value,
            description: nDesc.value,
            url: nURL.value
        };
        jsFrameworks.push(enviar);
        showFrameworks(enviar);
        nFramework.value = "";
        nDesc.value = "";
        nURL.value = "";
    }
    else {
        alert('Todos los campos deben ser llenados');
    }
    /*
      console.log(jsFrameworks);*/
};
