# js_serializer

A serializer for js written in TypeScript which serializes and deserializes data and restores class instances upon deserialization.

## Example

```js
import Serializer from 'js_serializer';

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

// Creating the serializer instance.

/**
    You'll have to specify all class constructors here that may be serialized.
    Basically, the serializer adds a field to the json (per class),
    called "__restoreClass", which will be used to restore the class.
 
    Only necessary on deserialization, as this will be used to
    re-instantiate the serialized classes.
 */
const serializer = new Serializer({
    Test
});


console.log('BEFORE', testSet);

const testResult = serializer.deserialize(
    serializer.serialize(testSet)
);

console.log('AFTER', testResult);

console.log('METHOD TEST testResult.test2[1]', testResult.test2[1].getAB());
```


