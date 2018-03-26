const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    it('should add two numbers', () => {
        let res = utils.add(33, 11);
    
        expect(res).toBe(44).toBeA('number');
    });
    
    it('should sqaure a number', () => {
        let res = utils.square(10);
    
        expect(res).toBe(100).toBeA('number');
    });
    
    // should verify first and last names are set
    it('Should verify first and last names are set', () => {
        let user = {
            location: 'Lahore',
            age: 25
        };
    
        utils.setName(user, 'Hashim Saleem');
        expect(user).toInclude({
            firstName: 'Hashim',
            lastName: 'Saleem'
        });
    });
});

