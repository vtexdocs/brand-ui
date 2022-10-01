import { ForwardRefRenderFunction } from 'react';
/**
 * Credits to reakit
 * https://github.com/reakit/reakit/blob/master/packages/reakit-system/src/__utils/forwardRef.ts
 */
export declare function forwardRef<T extends ForwardRefRenderFunction<any, any>>(component: T): T;
