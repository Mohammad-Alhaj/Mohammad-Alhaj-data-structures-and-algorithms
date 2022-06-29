'use strict';

const Stack = require('../stack');

describe('Test brackets',()=>{
    it('test the brackets',()=>{
        const ele = new Stack() 
        
        expect(ele.validateBrackets('{}')).toEqual(true)
        expect(ele.validateBrackets('{}(){}')).toEqual(true)
        expect(ele.validateBrackets('()[[Extra Characters]]')).toEqual(true)
        expect(ele.validateBrackets('(){}[[]]')).toEqual(true)
        expect(ele.validateBrackets('{}{Code}[Fellows](())')).toEqual(true)
        expect(ele.validateBrackets('[({}]')).toEqual(false)
        expect(ele.validateBrackets('(](')).toEqual(false)
        expect(ele.validateBrackets('{(})')).toEqual(false)

    })

    //...........
});