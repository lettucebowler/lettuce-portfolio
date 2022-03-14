<script lang="ts">
	import SudokuBoard from '$lib/components/sudoku/SudokuBoard.svelte';
	import type { Cell } from '$lib/types/types';

	export let order = 3;
	export let initialGameList = [
		5, 3, 0, 0, 7, 0, 0, 0, 0, 6, 0, 0, 1, 9, 5, 0, 0, 0, 0, 9, 8, 0, 0, 0, 0, 6, 0, 8, 0, 0, 0, 6,
		0, 0, 0, 3, 4, 0, 0, 8, 0, 3, 0, 0, 1, 7, 0, 0, 0, 2, 0, 0, 0, 6, 0, 6, 0, 0, 0, 0, 2, 8, 0, 0,
		0, 0, 4, 1, 9, 0, 0, 5, 0, 0, 0, 0, 8, 0, 0, 7, 9
	];

	let boardList = initialGameList;
	let initialBoardList = boardList;
	const selectedRow = 4;
	const selectedCol = 3;

	$: board = getBoard(boardList, selectedRow, selectedCol);

	const isPeerCell = (
		row: number,
		col: number,
		order: number,
		selectedRow: number,
		selectedCol: number
	) => {
		const isSameRow = row === selectedRow;
		const isSameCol = col === selectedCol;
		const isSelected = isSameRow && isSameCol;
		const isSameTrunk = Math.floor(row / order) === Math.floor(selectedRow / order);
		const isSameLane = Math.floor(col / order) === Math.floor(selectedCol / order);
		const isSameBlock = isSameTrunk && isSameLane;
		return !isSelected && (isSameRow || isSameCol || isSameBlock);
	};

	const isCellLegal = (
		number: number,
		row: number,
		col: number,
		board: number[],
		order: number
	) => {
		const lane = Math.floor(row / order);
		const trunk = Math.floor(col / order);
		const rowLegal =
			!number ||
			board.filter((num, index) => {
				const fRow = Math.floor(index / order / order);
				return row == fRow && board[index] === number;
			}).length <= 1;
		const colLegal =
			!number ||
			board.filter((num, index) => {
				const fCol = index % (order * order);
				return col == fCol && board[index] === number;
			}).length <= 1;
		const blockLegal =
			!number ||
			board.filter((num, index) => {
				const fTrunk = Math.floor(index / order / order / order);
				const fLane = Math.floor((index % (order * order)) / order);
				return lane === fLane && trunk === fTrunk && board[index] === number;
			}).length <= 1;
		return rowLegal && colLegal && blockLegal;
	};

	const getCell = (
		number: number,
		index: number,
		order: number,
		selectedRow: number,
		selectedCol: number
	): Cell => {
		const row = Math.floor(index / (order * order));
		const col = Math.floor(index % (order * order));
		const selected = row === selectedRow && col === selectedCol;
		const peerCell = isPeerCell(row, col, order, selectedRow, selectedCol);
		const selectedNum = boardList[selectedRow * order * order + selectedCol];
		const peerDigit =
			number && (row !== selectedRow || col !== selectedCol) && number === selectedNum;
		const initial = !!initialBoardList[index];
		const legal = isCellLegal(number, row, col, boardList, order);
		const success = false;
		return {
			number: number ? number.toString() : '',
			row,
			col,
			selected,
			peerCell,
			peerDigit,
			initial,
			legal,
			success
		};
	};

	const getBoard = (board: number[], selectedRow: number, selectedCol: number): Cell[] => {
		if (!board) {
			return null;
		}
		const boardReal = board.map((c, index) => getCell(c, index, order, selectedRow, selectedCol));
		const success =
			boardReal.filter((cell: Cell) => !!cell.legal && cell.number !== '').length ===
			order * order * order * order;
		const validated = boardReal.map((cell: Cell) => ({ ...cell, success }));
		return validated;
	};
</script>

<SudokuBoard order={3} {board} />
