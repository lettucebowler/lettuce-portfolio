export type Cell = {
	peerCell: boolean;
	peerDigit: boolean;
	number: string;
	selected: boolean;
	row: number;
	col: number;
};

export type CellSelectionEvent = {
	detail: {
		row: number;
		col: number;
	};
};

export enum Status {
	NONE = 'none',
	CONTAINS = 'contains',
	CORRECT = 'correct',
	INCORRECT = 'incorrect'
}

export type Letter = {
	letter: string;
	status: Status;
};

export type Word = {
	complete: boolean;
	word: Letter[];
};
