import Visitors from './visitors';

export default class Serializer {
    private classScope: ClassScope;

    constructor(classScope: ClassScope) {
        this.classScope = classScope;
    }

    public serialize(data: any): string {
        const visitor = Visitors.getVisitor(data);

        return JSON.stringify(
            visitor.serialize(data, this)
        );
    }

    public deserialize(json: string): any {
        const data: any = JSON.parse(json);

        const visitor = Visitors.getVisitor(data);

        return visitor.deserialize(data, this);
    }

    /**
     * @internal
     */
    public _findFromClassScopeByName(className: string): Object & Class | null {
        return this.classScope[className] || null;
    }
}