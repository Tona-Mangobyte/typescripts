import * as _ from 'lodash';
import {Login} from "../src/model/Login";

describe('The typeof type operator', () => {
    it('typeof | string' , function () {
        const isString = typeof "Hello world";
        expect(isString).toBe('string');
    })

    it('typeof | string' , function () {
        const isString = typeof "1";
        expect(isString).toBe('string');
    })

    it('typeof | number' , function () {
        const isNumber = typeof 1;
        expect(isNumber).toBe('number');
    })

    it('typeof | function' , function () {
        const login = new Login();
        login.username = 'dev@mb';
        login.password = 'dev@mb';
        const payload = { action: (login: Login) => { console.info(login.username) } };
        const { action } = payload;
        action(login)
        expect(_.isFunction(action)).toBe(true);
    })
})
