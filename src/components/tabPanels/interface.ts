type ReadBook = {
    id: number,
    title: string,
    author: string,
    Understanding: string,
}

type Exercise = {
    id: number,
    action: string,
    author: string,
    toObtain: string,
}

type Learning = {
    id: number;
    title: string;
    author: string;
    toObtain: string;
}

type Categories = {
    readBook: ReadBook[],
    exercise: Exercise[],
    learning: Learning[],
}


export type { Categories }