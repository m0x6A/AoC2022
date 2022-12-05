export type UppercaseLetter = 'A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'|'I'|'J'|'K'|'L'|'M'|'N'|'O'|'P'|'Q'|'R'|'S'|'T'|'X'|'Y'|'Z';
export type Crate = `${UppercaseLetter}`
export type Stack = 1|2|3

export type Move = {
    source: Stack;
    destination: Stack;
    amount: number;
};

export type Stacks = {
   [k in Stack]:Crate[];
}
export type LoadingProcess = {
    stacks: Stacks;
    moves: Move[]

}
export function importStacks(data:string) {

}