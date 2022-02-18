import { Car } from "./model";

class Main {
    static run() {
        console.log('Hello world!')
        const lexus = new Car('Lexus', 'Black', 2021);
        console.log(lexus.info());
    }
}
Main.run()
