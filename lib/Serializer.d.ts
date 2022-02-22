export default class Serializer {
    private classScope;
    constructor(classScope: ClassScope);
    serialize(data: any): string;
    deserialize(json: string): any;
    /**
     * @internal
     */
    _findFromClassScopeByName(className: string): Object & Class | null;
}
