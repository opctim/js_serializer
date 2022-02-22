const Serializer = require('./lib/index');

class Test {
    _a = null;
    _b = null;


    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    get a() {
        return this._a;
    }

    set a(value) {
        this._a = value;
    }

    get b() {
        return this._b;
    }

    set b(value) {
        this._b = value;
    }

    getAB() {
        return this.a + ' - ' + this.b;
    }
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const getRandomInstance = () => {
    return new Test(getRandomInt(100), getRandomInt(100));
};

const serializer = new Serializer({
    Test
});

const testSet = {
    test1: getRandomInstance(),
    test2: [
        getRandomInstance(),
        getRandomInstance(),
        getRandomInstance()
    ],
    test3: [
        {
            test3_1: getRandomInstance()
        }
    ]
};

console.log('BEFORE', testSet);

const testResult = serializer.deserialize(serializer.serialize(testSet));

console.log('AFTER', testResult);

console.log('METHOD TEST testResult.test2[1]', testResult.test2[1].getAB());