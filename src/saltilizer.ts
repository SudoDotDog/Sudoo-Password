/**
 * @author WMXPY
 * @namespace Password
 * @description Saltilizer
 */

import { md5String } from "./serialize";

export class Saltilizer {

    public static create(salt: string): Saltilizer {

        return new Saltilizer(salt);
    }

    private readonly _salt: string;

    private _appendStart: boolean;
    private _appendEnd: boolean;

    private constructor(
        salt: string,
    ) {

        this._salt = salt;

        this._appendStart = true;
        this._appendEnd = true;
    }

    public enableAppendStart(): this {

        this._appendStart = true;
        return this;
    }

    public disableAppendStart(): this {

        this._appendStart = false;
        return this;
    }

    public enableAppendEnd(): this {

        this._appendEnd = true;
        return this;
    }

    public disableAppendEnd(): this {

        this._appendEnd = false;
        return this;
    }

    public verify(content: string, encrypted: string): boolean {

        const correctEncrypted: string = this.encrypt(content);

        return correctEncrypted === encrypted;
    }

    public encrypt(content: string): string {

        const combined: string = this.combine(content);
        const encrypted: string = md5String(combined);

        return encrypted;
    }

    public combine(content: string): string {

        const startContent: string = this._getStartContent();
        const endContent: string = this._getEndContent();

        return `${startContent}${content}${endContent}`;
    }

    private _getStartContent(): string {

        if (this._appendStart) {
            return this._salt;
        }
        return '';
    }

    private _getEndContent(): string {

        if (this._appendEnd) {
            return this._salt;
        }
        return '';
    }
}
