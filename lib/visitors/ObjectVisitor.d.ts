import VisitorInterface from './VisitorInterface';
import Serializer from '../Serializer';
export default class ObjectVisitor implements VisitorInterface {
    serialize(value: Class, serializer: Serializer): Object;
    deserialize(value: Class, serializer: Serializer): Object;
    supports(value: any): boolean;
}
