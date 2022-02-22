import VisitorInterface from './VisitorInterface';
import Serializer from '../Serializer';

export default class ScalarVisitor implements VisitorInterface {
    public serialize(value: any, serializer: Serializer): any {
        return value;
    }

    public deserialize(value: any, serializer: Serializer): any {
        return value;
    }

    public supports(value: any): boolean {
        return typeof value !== 'object';
    }
}