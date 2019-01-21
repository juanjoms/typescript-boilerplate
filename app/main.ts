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

let appElement: HTMLElement = document.getElementById('app');
appElement.textContent = greeter.greet();
