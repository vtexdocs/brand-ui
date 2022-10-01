declare const _default: {
    prefix: {
        mr: number;
        alignItems: string;
        color: string;
        minWidth: string;
        minHeight: string;
    };
    suffix: {
        ml: number;
        alignItems: string;
        color: string;
        minWidth: string;
        minHeight: string;
    };
    label: {
        [x: number]: never;
        length: number;
        toString(): string;
        toLocaleString(): string;
        pop(): undefined;
        push(...items: never[]): number;
        concat(...items: ConcatArray<never>[]): never[];
        concat(...items: ConcatArray<never>[]): never[];
        join(separator?: string | undefined): string;
        reverse(): never[];
        shift(): undefined;
        slice(start?: number | undefined, end?: number | undefined): never[];
        sort(compareFn?: ((a: never, b: never) => number) | undefined): never[];
        splice(start: number, deleteCount?: number | undefined): never[];
        splice(start: number, deleteCount: number, ...items: never[]): never[];
        unshift(...items: never[]): number;
        indexOf(searchElement: never, fromIndex?: number | undefined): number;
        lastIndexOf(searchElement: never, fromIndex?: number | undefined): number;
        every(callbackfn: (value: never, index: number, array: never[]) => unknown, thisArg?: any): boolean;
        some(callbackfn: (value: never, index: number, array: never[]) => unknown, thisArg?: any): boolean;
        forEach(callbackfn: (value: never, index: number, array: never[]) => void, thisArg?: any): void;
        map<U>(callbackfn: (value: never, index: number, array: never[]) => U, thisArg?: any): U[];
        filter<S extends never>(callbackfn: (value: never, index: number, array: never[]) => value is S, thisArg?: any): S[];
        filter(callbackfn: (value: never, index: number, array: never[]) => unknown, thisArg?: any): never[];
        reduce(callbackfn: (previousValue: never, currentValue: never, currentIndex: number, array: never[]) => never): never;
        reduce(callbackfn: (previousValue: never, currentValue: never, currentIndex: number, array: never[]) => never, initialValue: never): never;
        reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: never, currentIndex: number, array: never[]) => U_1, initialValue: U_1): U_1;
        reduceRight(callbackfn: (previousValue: never, currentValue: never, currentIndex: number, array: never[]) => never): never;
        reduceRight(callbackfn: (previousValue: never, currentValue: never, currentIndex: number, array: never[]) => never, initialValue: never): never;
        reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: never, currentIndex: number, array: never[]) => U_2, initialValue: U_2): U_2;
        find<S_1 extends never>(predicate: (this: void, value: never, index: number, obj: never[]) => value is S_1, thisArg?: any): S_1 | undefined;
        find(predicate: (value: never, index: number, obj: never[]) => unknown, thisArg?: any): undefined;
        findIndex(predicate: (value: never, index: number, obj: never[]) => unknown, thisArg?: any): number;
        fill(value: never, start?: number | undefined, end?: number | undefined): never[];
        copyWithin(target: number, start: number, end?: number | undefined): never[];
        [Symbol.iterator](): IterableIterator<never>;
        entries(): IterableIterator<[number, never]>;
        keys(): IterableIterator<number>;
        values(): IterableIterator<never>;
        [Symbol.unscopables](): {
            copyWithin: boolean;
            entries: boolean;
            fill: boolean;
            find: boolean;
            findIndex: boolean;
            keys: boolean;
            values: boolean;
        };
        includes(searchElement: never, fromIndex?: number | undefined): boolean;
        flatMap<U_3, This = undefined>(callback: (this: This, value: never, index: number, array: never[]) => U_3 | readonly U_3[], thisArg?: This | undefined): U_3[];
        flat<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[];
        at(index: number): undefined;
    };
    helpMessage: {
        dark: {
            default: {
                color: string;
                mt: number;
                fontSize: number;
                lineHeight: string;
                justifyContent: string;
            };
            error: {
                color: string;
                mt: number;
                fontSize: number;
                lineHeight: string;
                justifyContent: string;
            };
            disabled: {
                color: string;
                mt: number;
                fontSize: number;
                lineHeight: string;
                justifyContent: string;
            };
            readOnly: {
                color: string;
                mt: number;
                fontSize: number;
                lineHeight: string;
                justifyContent: string;
            };
        };
        default: {
            color: string;
            mt: number;
            fontSize: number;
            lineHeight: string;
            justifyContent: string;
        };
        error: {
            color: string;
            mt: number;
            fontSize: number;
            lineHeight: string;
            justifyContent: string;
        };
        disabled: {
            color: string;
            mt: number;
            fontSize: number;
            lineHeight: string;
            justifyContent: string;
        };
        readOnly: {
            color: string;
            mt: number;
            fontSize: number;
            lineHeight: string;
            justifyContent: string;
        };
    };
    container: {
        width: string;
        mb: number;
    };
};
export default _default;
