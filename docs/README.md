# Sudoo-Password

[![Build Status](https://travis-ci.com/SudoDotDog/Sudoo-Password.svg?branch=master)](https://travis-ci.com/SudoDotDog/Sudoo-Password)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Password/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Password)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fpassword.svg)](https://www.npmjs.com/package/@sudoo/password)
[![downloads](https://img.shields.io/npm/dm/@sudoo/password.svg)](https://www.npmjs.com/package/@sudoo/password)

Password utils

## Install

```sh
yarn add @sudoo/password
# Or
npm install @sudoo/password --save
```

## Usage

Saltilize password with both start and end appending

`Password` -> `SaltPasswordSalt`

```ts
import { Saltilizer } from "@sudoo/password";

const saltilizer: Saltilizer = Saltilizer.create("<Salt>");
const combined: string = saltilizer.combine("<Password>"); // Salted
const hashed: string = saltilizer.encrypt("<Password>"); // Salted and Hashed

const verifyResult: boolean = saltilizer.verify(hashed, "<Password>"); // true
```

Saltilize password with start appending

`Password` -> `SaltPassword`

```ts
import { Saltilizer } from "@sudoo/password";

const saltilizer: Saltilizer = Saltilizer.createStartAppended("<Salt>");
const combined: string = saltilizer.combine("<Password>"); // Salted
const hashed: string = saltilizer.encrypt("<Password>"); // Salted and Hashed

const verifyResult: boolean = saltilizer.verify(hashed, "<Password>"); // true
```

Saltilize password with end appending

`Password` -> `PasswordSalt`

```ts
import { Saltilizer } from "@sudoo/password";

const saltilizer: Saltilizer = Saltilizer.createEndAppended("<Salt>");
const combined: string = saltilizer.combine("<Password>"); // Salted
const hashed: string = saltilizer.encrypt("<Password>"); // Salted and Hashed

const verifyResult: boolean = saltilizer.verify(hashed, "<Password>"); // true
```
