export type UppercaseLetter =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'X'
  | 'Y'
  | 'Z';
export type Crate = `${UppercaseLetter}`;

export type Section = 'moves' | 'stacks';

export type Move = {
  from: number;
  to: number;
  amount: number;
};

export type Stack = {
  crates: Crate[];
};
export type LoadingProcess = {
  stacks: Stack[];
  moves: Move[];
};

export function importStacks(data: string) {
  let section: Section = 'stacks';
  let currentProcess: LoadingProcess = getDefaultProcess();
  const lines = data.split('\n');
  for (const line of lines) {
    if (line === '') {
      section = 'moves';
      continue;
    }
    switch (section) {
      case 'stacks':
        if (line.startsWith('1')) {
          break;
        }
        currentProcess = getStacks(currentProcess, line);
        break;

      case 'moves':
        currentProcess.moves.push(getMove(line));
        break;
    }
  }
  for (let i = 0; i < currentProcess.stacks.length; i++) {
    currentProcess.stacks[i].crates = currentProcess.stacks[i].crates.reverse();
  }
  return currentProcess;
}
export function moveCrates(process: LoadingProcess): string {
  for (const move of process.moves) {
    for (let i = 0; i < move.amount; i++) {
      const item = process.stacks[move.from - 1].crates.pop();
      if (item) {
        process.stacks[move.to - 1].crates.push(item);
      }
    }
  }
  const result: Crate[] = [];

  process.stacks.forEach((x) => {
    result.push(x.crates[x.crates.length - 1]);
  });
  return result.join('');
}

export function moveCratesInBatches(process: LoadingProcess): string {
  const localProcess = process;
  for (const move of process.moves) {
    const from = move.from - 1;
    const to = move.to - 1;
    const items = localProcess.stacks[from].crates.slice(-(move.amount));
    
    localProcess.stacks[to].crates = [...localProcess.stacks[to].crates, ...items]
    for(let i = 0; i < move.amount; i++) {
        localProcess.stacks[from].crates.pop();
    }
  }
  const result: Crate[] = [];

  localProcess.stacks.forEach((x) => {
    result.push(x.crates[x.crates.length - 1]);
  });
  return result.join('');
}
function getMove(line: string): Move {
  const splitLine = line.split(' ');

  return {
    amount: parseInt(splitLine[1]),
    from: parseInt(splitLine[3]),
    to: parseInt(splitLine[splitLine.length - 1]),
  };
}

function getStacks(
  currentProcess: LoadingProcess,
  line: string,
): LoadingProcess {
  let col = 0;
  for (let i = 1; i < line.length; i += 4) {
    if (!currentProcess.stacks[col]) {
      currentProcess.stacks.push({ crates: [] } as Stack);
    }
    const stack = parseStack(line[i]) as Crate;
    if (stack) {
      currentProcess.stacks[col].crates.push(parseStack(line[i]) as Crate);
    }
    col++;
  }
  return currentProcess;
}
function parseStack(stack: string): Crate | undefined {
  return isNaN(parseInt(stack)) && stack !== ' ' ? (stack as Crate) : undefined;
}

function getDefaultProcess(): LoadingProcess {
  return {
    stacks: [] as Stack[],
    moves: [] as Move[],
  };
}
