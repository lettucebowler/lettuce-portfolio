export type Cell = {
	peerCell: boolean;
	peerDigit: boolean;
	number: string;
	selected: boolean;
	row: number;
	col: number;
};

export type Letter = {
	letter: string;
	status: string;
};

export type Word = {
	complete: boolean;
	word: Letter[];
};
