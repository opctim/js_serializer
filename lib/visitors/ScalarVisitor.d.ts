import VisitorInterface from './VisitorInterface';
import Serializer from '../Serializer';
export default class ScalarVisitor implements VisitorInterface {
    serialize(value: any, serializer: Serializer): any;
    deserialize(value: any, serializer: Serializer): any;
    supports(value: any): boolean;
}
