import {Login} from "../src/model/Login";


describe('Login Testing', () => {
    it('login with empty' , function () {
        const login = new Login();
        expect(login.username).toBeUndefined();
        const hasValue = login.hasValue(login.username);
        expect(hasValue).toBe(false);
    });
})
