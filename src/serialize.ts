/**
 * @author WMXPY
 * @namespace Password
 * @description Serialize
 */

import { createHash, Hash } from 'crypto';

export const md5String = (target: string): string => {

    const hash: Hash = createHash('md5');
    hash.update(target);

    return hash.digest('hex');
};
