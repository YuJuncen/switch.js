const match = require('../src/switch');

describe('match function tests.', () => {
    it ('Should run when default called.', () => {
        expect(match(null).default(1)).toBe(1);
        expect(match('neko!').default(0)).toBe(0);
        expect(match(1).default('koto!')).toEqual('koto!');
    })

    it ('Should match some case if there are.', () => {
        const value = match(1)
            .case(x => x > 0, 'x > 0')
            .run();
        expect(value).toEqual('x > 0');
    })

    it('Should match some case even there are more cases.', () => {
        const value = match(1)
            .case(x => x > 0, true)
            .case(x => x < 0, false)
            .run();
        expect(value).toBe(true);
    })

    it('Should match the first one if there are more than one matches.', () => {
        expect(match(1)
            .case(x => x < 0, 0)
            .case(x => x >= 0, 1)
            .case(x => x >= 1, 2)
            .run()
        ).toBe(1);
    })

    it("Should give the default value if there isn't any match, vice versa.", () => {
        expect(match(1)
            .case(x => x < 10, 1)
            .default(0)).toBe(1)
        expect(match(0)
            .case(x => x > 10, 0)
            .default(1)).toBe(1)
    })
})