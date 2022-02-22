import VisitorInterface from './VisitorInterface';
import Visitors from './index';
import Serializer from '../Serializer';

export default class ArrayVisitor implements VisitorInterface {
    public serialize(value: Array<any>, serializer: Serializer): Array<any> {
        for (let i = 0; i < value.length; i++) {
            const visitor: VisitorInterface = Visitors.getVisitor(value[i]);

            value[i] = visitor.serialize(value[i], serializer);
        }

        return value;
    }

    public deserialize(value: Array<any>, serializer: Serializer): Array<any> {
        for (let i = 0; i < value.length; i++) {
            const visitor: VisitorInterface = Visitors.getVisitor(value[i]);

            value[i] = visitor.deserialize(value[i], serializer);
        }

        return value;
    }

    public supports(value: any): boolean {
        return Array.isArray(value);
    }
}