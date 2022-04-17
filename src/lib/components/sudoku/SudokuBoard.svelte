<script lang="ts">
	import SudokuCell from '$lib/components/sudoku/SudokuCell.svelte';
	import SudokuBlock from '$lib/components/sudoku/SudokuBlock.svelte';
	import type { Cell } from '$lib/types/types';

	const order = 3;
	const board: Cell[] = [
		{
			number: '5',
			row: 0,
			col: 0,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '3',
			row: 0,
			col: 1,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 0,
			col: 2,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 0,
			col: 3,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '7',
			row: 0,
			col: 4,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 0,
			col: 5,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 0,
			col: 6,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 0,
			col: 7,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 0,
			col: 8,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '6',
			row: 1,
			col: 0,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 1,
			col: 1,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 1,
			col: 2,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '1',
			row: 1,
			col: 3,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '9',
			row: 1,
			col: 4,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '5',
			row: 1,
			col: 5,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 1,
			col: 6,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 1,
			col: 7,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 1,
			col: 8,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 2,
			col: 0,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '9',
			row: 2,
			col: 1,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '8',
			row: 2,
			col: 2,
			selected: false,
			peerCell: false,
			peerDigit: true
		},
		{
			number: '0',
			row: 2,
			col: 3,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '0',
			row: 2,
			col: 4,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 2,
			col: 5,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 2,
			col: 6,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '6',
			row: 2,
			col: 7,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 2,
			col: 8,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '8',
			row: 3,
			col: 0,
			selected: false,
			peerCell: false,
			peerDigit: true
		},
		{
			number: '0',
			row: 3,
			col: 1,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 3,
			col: 2,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 3,
			col: 3,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '6',
			row: 3,
			col: 4,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '0',
			row: 3,
			col: 5,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '0',
			row: 3,
			col: 6,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 3,
			col: 7,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '3',
			row: 3,
			col: 8,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '4',
			row: 4,
			col: 0,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '0',
			row: 4,
			col: 1,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '0',
			row: 4,
			col: 2,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '8',
			row: 4,
			col: 3,
			selected: true,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 4,
			col: 4,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '3',
			row: 4,
			col: 5,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '0',
			row: 4,
			col: 6,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '0',
			row: 4,
			col: 7,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '1',
			row: 4,
			col: 8,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '7',
			row: 5,
			col: 0,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 5,
			col: 1,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 5,
			col: 2,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 5,
			col: 3,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '2',
			row: 5,
			col: 4,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '0',
			row: 5,
			col: 5,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '0',
			row: 5,
			col: 6,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 5,
			col: 7,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '6',
			row: 5,
			col: 8,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 6,
			col: 0,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '6',
			row: 6,
			col: 1,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 6,
			col: 2,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 6,
			col: 3,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '0',
			row: 6,
			col: 4,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 6,
			col: 5,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '2',
			row: 6,
			col: 6,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '8',
			row: 6,
			col: 7,
			selected: false,
			peerCell: false,
			peerDigit: true
		},
		{
			number: '0',
			row: 6,
			col: 8,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 7,
			col: 0,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 7,
			col: 1,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 7,
			col: 2,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '4',
			row: 7,
			col: 3,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '1',
			row: 7,
			col: 4,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '9',
			row: 7,
			col: 5,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 7,
			col: 6,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 7,
			col: 7,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '5',
			row: 7,
			col: 8,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 8,
			col: 0,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 8,
			col: 1,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 8,
			col: 2,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 8,
			col: 3,
			selected: false,
			peerCell: true,
			peerDigit: false
		},
		{
			number: '8',
			row: 8,
			col: 4,
			selected: false,
			peerCell: false,
			peerDigit: true
		},
		{
			number: '0',
			row: 8,
			col: 5,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '0',
			row: 8,
			col: 6,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '7',
			row: 8,
			col: 7,
			selected: false,
			peerCell: false,
			peerDigit: false
		},
		{
			number: '9',
			row: 8,
			col: 8,
			selected: false,
			peerCell: false,
			peerDigit: false
		}
	];

	$: chunks = board ? getChunks(board) : [];

	const getChunk = (row: number, col: number, order: number) => {
		const trunk = Math.floor(row / order);
		const lane = Math.floor(col / order);
		const chunk = trunk * order + lane;
		return chunk;
	};

	const getChunks = (board: Cell[]): Cell[][] => {
		const b =
			board &&
			board.reduce((all, one) => {
				const ch = getChunk(one.row, one.col, order);
				all[ch] = [].concat(all[ch] || [], one);
				return all;
			}, []);
		return b;
	};
</script>

{#if !!board && board.length !== 16 && board.length !== 81}
	<div>Board is not correct length.</div>
{:else if board?.length}
	<div class="container">
		<SudokuBlock board {order}>
			{#each chunks as chunk}
				<SudokuBlock {order}>
					{#each chunk as cell}
						<SudokuCell
							number={cell.number.toString()}
							row={cell.row}
							col={cell.col}
							selected={cell.selected}
							peerCell={cell.peerCell}
							peerDigit={cell.peerDigit}
							on:cellSelection
						/>
					{/each}
				</SudokuBlock>
			{/each}
		</SudokuBlock>
	</div>
{/if}

<style>
	.container {
		width: 100%;
		aspect-ratio: 1;
		margin: auto;
	}
</style>
