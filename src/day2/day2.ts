
export type Rock = 'A' | 'X';
export type Paper = 'B' | 'Y';
export type Scissors = 'C' | 'Z';
export type Result = 'win' | 'draw' | 'loss'
export type OwnHand = Exclude<Rock, 'A'> | Exclude<Paper, 'B'> | Exclude<Scissors, 'C'>;
export type OpponentHand = Exclude<Rock, 'X'> | Exclude<Paper, 'Y'> | Exclude<Scissors, 'Z'>;

export type Match = {
    a: OpponentHand,
    b: OwnHand,
}


const resultMap:{[key:string]: Result} = {
    ['X']: 'loss',
    ['Y']: 'draw',
    ['Z']: 'win'
}


const resultPoints:Record<Result, number> = {
    'win': 6,
    'loss': 0,
    'draw': 3
}


const handPoints:Record<OwnHand, number> = {
    'X': 1,
    'Y': 2,
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
export function aggregateResult(matches:Match[], calculateFunction: (match:Match) => number):number{
    const results = matches.map(x => calculateFunction(x));
    return results.reduce((a,b) => a+b, 0)
}

export function calculateResult(match:Match):number {
    const result = calculateWinner(match);
    return resultPoints[result] + handPoints[match.b];
}

export function calculateHand(match: Match):number {
    switch(match.a) {
        case 'A':
            switch(match.b){
                case 'X':
                    return handPoints['Z'] + resultPoints[resultMap[match.b]]
                case 'Y':
                    return handPoints['X'] + resultPoints[resultMap[match.b]]
                case 'Z':
                    return handPoints['Y']  + resultPoints[resultMap[match.b]]                          
            }
        case 'B':
            switch(match.b){
                case 'X':
                    return handPoints['X'] + resultPoints[resultMap[match.b]]
                case 'Y':
                    return handPoints['Y'] + resultPoints[resultMap[match.b]]
                case 'Z':
                    return handPoints['Z']  + resultPoints[resultMap[match.b]]                          
            }
        case 'C':
            switch(match.b){
                case 'X':
                    return handPoints['Y'] + resultPoints[resultMap[match.b]]
                case 'Y':
                    return handPoints['Z'] + resultPoints[resultMap[match.b]]
                case 'Z':
                    return handPoints['X']  + resultPoints[resultMap[match.b]]                          
            }
        default:
            return 0
    }
}
export function calculateWinner(match:Match):Result {
    switch(match.a) {
        case 'A':
            {
            switch(match.b) {
                case 'X':
                {
                    return 'draw';
                }
                case 'Y':
                    return 'win';
                default:
                    return 'loss'
            }
        }
        case 'B':
            switch(match.b) {
                case 'Y':
                {
                    return 'draw';
                }
                case 'Z':
                    return 'win';
                default:
                    return 'loss'
            }
        case 'C':
            switch(match.b) {
                case 'Z':
                {
                    return 'draw';
                }
                case 'X':
                    return 'win';
                default:
                    return 'loss'
        }
        default: 
            return 'loss'
    }
}
