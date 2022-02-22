import VisitorInterface from './VisitorInterface';
import Serializer from '../Serializer';
export default class ArrayVisitor implements VisitorInterface {
    serialize(value: Array<any>, serializer: Serializer): Array<any>;
    deserialize(value: Array<any>, serializer: Serializer): Array<any>;
    supports(value: any): boolean;
}
