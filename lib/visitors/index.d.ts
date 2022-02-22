import ScalarVisitor from './ScalarVisitor';
import ArrayVisitor from './ArrayVisitor';
import ObjectVisitor from './ObjectVisitor';
import VisitorInterface from './VisitorInterface';
declare const _default: {
    visitors: (ScalarVisitor | ArrayVisitor | ObjectVisitor)[];
    getVisitor(data: any): VisitorInterface;
};
export default _default;
