/**
 * @author WMXPY
 * @namespace Password
 * @description Saltilizer
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Saltilizer } from '../../src';

describe('Given {Saltilizer} class', (): void => {

    const chance: Chance.Chance = new Chance('token-saltilizer');

    it('should be able to construct', (): void => {

        const salt: string = chance.string();
        const saltilizer: Saltilizer = Saltilizer.create(salt);

        expect(saltilizer).to.be.instanceOf(Saltilizer);
    });

    it('should be able to combine start and end', (): void => {

        const salt: string = chance.string();
        const value: string = chance.string();

        const saltilizer: Saltilizer = Saltilizer.create(salt);
        const combined: string = saltilizer.combine(value);

        expect(combined).to.be.equal(`${salt}${value}${salt}`);
    });

    it('should be able to combine only start', (): void => {

        const salt: string = chance.string();
        const value: string = chance.string();

        const saltilizer: Saltilizer = Saltilizer.create(salt);
        saltilizer.disableAppendEnd();
        const combined: string = saltilizer.combine(value);

        expect(combined).to.be.equal(`${salt}${value}`);
    });

    it('should be able to combine only end', (): void => {

        const salt: string = chance.string();
        const value: string = chance.string();

        const saltilizer: Saltilizer = Saltilizer.create(salt);
        saltilizer.disableAppendStart();
        const combined: string = saltilizer.combine(value);

        expect(combined).to.be.equal(`${value}${salt}`);
    });
});
