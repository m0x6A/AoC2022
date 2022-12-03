
export type Rock = 'A'  | 'X';
export type Paper = 'B' | 'Y';
export type Scissors = 'C' | 'Z';
export type Result = 'win' | 'draw' | 'loss'
export type Hand = Rock | Paper | Scissors;

export type Match = {
    a: Hand,
    b: Hand,
}
export type Equals<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false;

declare const equalityComparer: <T, U>(
        draft: T & Equals<T, U>,
        expected: U & Equals<T, U>
      ) => Equals<T, U>

const resultPoints:Record<Result, number> = {
    'win': 6,
    'loss': 0,
    'draw': 3
}


const handPoints:Record<Hand, number> = {
    'A': 1,
    'X': 1,
    'B': 2,
    'Y': 2,
    'C': 3,
    'Z': 3
}

export function importMatches(input:string) {
    const parsedData = input.split('\n');
    return parsedData.filter(x => x !== '').map(element => {
        return element.split(' ');
    }).map(x => {
        return { a: x[0], b: x[1]} as Match;
    });
}
export function aggregateResult(matches:Match[]){
    const results = matches.map(x => calculateResult(x));
    return results.reduce((a,b) => a+b)
}
export function calculateResult(match:Match):number {
    const result = calculateWinner(match);
    return resultPoints[result] + handPoints[match.b];
}

export function calculateWinner(match:Match):Result {
    switch(match.a) {
        case 'A':
        case 'X':
            {
            switch(match.b) {
                case 'A':
                case 'X':
                {
                    return 'draw';
                }
                case 'B':
                case 'Y':
                    return 'win';
                default:
                    return 'loss'
            }
        }
        case 'B':
        case 'Y':
            switch(match.b) {
                case 'B':
                case 'Y':
                {
                    return 'draw';
                }
                case 'C':
                case 'Z':
                    return 'win';
                default:
                    return 'loss'
            }
            case 'C':
            case 'Z':
                switch(match.b) {
                    case 'X':
                    case 'Z':
                    {
                        return 'draw';
                    }
                    case 'A':
                    case 'X':
                        return 'win';
                    default:
                        return 'loss'
                }
            }
    }
    // if(match.a === match.b || (match.a === 'A' && match.b === 'X') || (match.a === 'B' && match.b === 'Y') || (
    //     match.a === 'C' && match.b === 'Z')
    // )
    // {
    //     return 'draw';
    // }
    // if(match.a === 'A' || match.a === 'X')
    // {
    //     return match.b === 'B' || match.b ==='Y' ? 'win' : 'loss'
    // }
    // if(match.a === 'B' || match.a === 'Y')
    // {
    //     return match.b === 'C' || match.b ==='Z' ? 'win' : 'loss'
    // }
    // return 'win';

//  export function 
