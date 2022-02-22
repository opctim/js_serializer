import VisitorInterface from './VisitorInterface';
import Serializer from '../Serializer';
import Visitors from './index';

export default class ObjectVisitor implements VisitorInterface {
    public serialize(value: Class, serializer: Serializer): Object {
        if (
            typeof value.constructor !== 'undefined' &&
            typeof value.constructor.name !== 'undefined' &&
            value.constructor.name !== 'Object'
        ) {
            if (typeof value.toJSON !== 'function') {
                value.__restoreClass = value.constructor.name;
            }
        }
        else {
            for (let key in value) {
                if (value.hasOwnProperty(key)) {
                    const visitor: VisitorInterface = Visitors.getVisitor(value[key]);

                    value[key] = visitor.serialize(value[key], serializer);
                }
            }
        }

        return value;
    }

    public deserialize(value: Class, serializer: Serializer): Object {
        const classFromScope: InstanceType<any> | null =
            serializer._findFromClassScopeByName(value.__restoreClass || null);

        if (classFromScope) {
            const classInstance = new classFromScope();

            for (let key in value) {
                if (value.hasOwnProperty(key) && key !== '__restoreClass') {
                    classInstance[key] = value[key];
                }
            }

            return classInstance;
        }
        else {
            for (let key in value) {
                if (value.hasOwnProperty(key)) {
                    const visitor: VisitorInterface = Visitors.getVisitor(value[key]);

                    value[key] = visitor.deserialize(value[key], serializer);
                }
            }
        }

        return value;
    }

    public supports(value: any): boolean {
        return typeof value === 'object' && !Array.isArray(value);
    }
}