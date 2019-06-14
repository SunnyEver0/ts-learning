function add(x: number, y: number): number {
    return x + y;
}

let add2: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
    return x + y;
}

