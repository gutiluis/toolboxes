#!/usr/bin/env -S npx tsx

// descr: type annotations do not validate values at runtime. only compile time.


// number. primitive type
export function numbers(amount: number): number {
    return amount;
}

/*
// strings. return more than one string becomes tuple
export function strings(user: string, password: string): [string, string] {
    return [user, password];
}
*/
// primitive type string
export function strings(user: string): string {
    return user;
}


// booleans. primitive type boolean
export function booleans(is_admin: boolean): boolean {
    return is_admin;
}

// validate no unchecked indexed access. tsconfig.json has it enabled
// arrays. 3 arguments. 2 arrays 1 index.
export function array(nums: number[], num2: Array<number>, index: number): [number, number] {
    return [nums[index], num2[index]];
}


// tuple
export function tuples(user: string, id: number): [string, number] {
    return [user, id];
}

// array-like tuple
export function tuple(amount: number): [number] {
    return [amount];
}


export type User = { name: string, age: number };

export function objects(user: User): User {
    return user;
}

// named constants
// Role.Admin; // 0
// Role.User; // 1
export enum Role { Admin, User }

export function roles(role: Role): Role {
    return role;
}

// unknown value requiring type checks
export function unknownValue(value: unknown): unknown {
    return value;
}
// disable most type checkers
export function anyValue(value: any): any {
    return value;
}
// void operator
export function logMessage(message: string): void {
    console.log(message);
}

export function nullable(value: string | null): string | null {
    return value;
}

export function optional(value: string | undefined): string | undefined {
    return value;
}

export function union(value: string | number): string | number {
    return value;
}

export function status(value: "active" | "inactive"): "active" | "inactive" {
    return value;
}
// biginteger
export function bigInteger(value: bigint): bigint {
    return value;
}

export function symbolValue(value: symbol): symbol {
    return value;
}

export function recordValue(value: Record<string, number>): Record<string, number> {
    return value;
}

export function setValues(value: Set<number>): Set<number> {
    return value;
}

export function mapValues(value: Map<string, number>): Map<string, number> {
    return value;
}

export function identity<T>(value: T): T {
    return value;
}
// never completes
export function fail(message: string): never {
    throw new Error(message);
}

