import ScalarVisitor from './ScalarVisitor';
import ArrayVisitor from './ArrayVisitor';
import ObjectVisitor from './ObjectVisitor';
import VisitorInterface from './VisitorInterface';

export default {
    visitors: [
        new ScalarVisitor(),
        new ArrayVisitor(),
        new ObjectVisitor()
    ],

    getVisitor(data: any): VisitorInterface {
        for (let visitor of this.visitors) {
            if (visitor.supports(data)) {
                return visitor;
            }
        }

        return new ScalarVisitor();
    }
};