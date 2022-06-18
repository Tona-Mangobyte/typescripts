
export class Login {
    public username: string;
    public password: string;

    public hasValue(value: any): boolean {
        return !!value
    }
}
