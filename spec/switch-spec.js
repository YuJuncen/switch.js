const match = require('../src/switch');

it ('Should run when default called.', () => {
    expect(match(null).default(1), 1);
    expect(match('neko!').default(0), 0);
    expect(match(1).default('koto!'), 'koto!');
})

it ('Should match some case if there are.', () => {
    expect(match(1)
        .case(x => x > 0, 'x > 0')
        .run(), 'x > 0');
})