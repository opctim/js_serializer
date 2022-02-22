type Class = Object & InstanceType<any> & {
    __restoreClass: string | undefined
};

type ClassScope = { [key: string]: Object & Class; };
