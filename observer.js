
class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(f) {
        this.observers.push(f);
    }

    unsubscribe(f) {
        this.observers = this.observers.filter(subscriber => subscriber !== f);
    }

    notify(data) {
        this.observers.forEach((observer => observer(data)));
    }
}


const observer = new Observable();
console.log(observer);

observer.subscribe((data) => console.log(`Raiden recebeu: ${data}`));
observer.subscribe((data) => console.log(`Ashe recebeu: ${data}`));
observer.subscribe((data) => console.log(`Luis recebeu: ${data}`));

observer.notify('Dinheiro');
