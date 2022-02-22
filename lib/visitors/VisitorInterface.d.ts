import Serializer from '../Serializer';
export default interface VisitorInterface {
    serialize(value: any, serializer: Serializer): any;
    deserialize(value: any, serializer: Serializer): any;
    supports(value: any): boolean;
}
