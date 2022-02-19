let greeting = (name: string): string => {
    return name
};
console.log(greeting('Hello World'));

greeting = function (name: string) {
    return `Hi, ${name}`;
};
console.log(greeting('Tona'));
