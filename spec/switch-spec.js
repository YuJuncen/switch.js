const match = require('../src/switch');

describe('match function tests.', () => {
    it ('Should run when default called.', () => {
        expect(match(null).default(1)).toBe(1);
        expect(match('neko!').default(0)).toBe(0);
        expect(match(1).default('koto!')).toEqual('koto!');
    })

    it ('Should match some case if there are.', () => {
        expect(match(1)
            .case(x => x > 0, 'x > 0')
            .run()).toEqual('x > 0');
    })

    it('Should match some case even there are more cases.', () => {
        expect(match(1)
            .case(x => x > 0, true)
            .case(x => x < 0, false)
            .run()).toBe(true);
    })
})