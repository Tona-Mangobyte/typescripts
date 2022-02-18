
export class Car {
    constructor(modelName: string, color: string, year: number) {
        this._modelName = modelName;
        this._color = color;
        this._year = year;
    }
    private _modelName: string;
    private _year: number;
    private _color: string;

    public set modelName(value) {
        this._modelName = value
    }
    public get modelName() {
        return this._modelName
    }
    public set color(value: string) {
        this._color = value;
    }
    public get color() {
        return this._color;
    }
    public set year(value: number) {
        this._year = value;
    }
    public get year() {
        return this._year;
    }

    info(): string {
        return `Model: ${this.modelName}, Year: ${this.year}, Color: ${this.color}`
    }
}
