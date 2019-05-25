class Switch {
    constructor(item) { }

    case(pred, result) { }
    default(result) { return result; }
    run() { }
}

const match = (item) => new Switch(item);
module.exports = match;