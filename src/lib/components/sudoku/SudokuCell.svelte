<script lang="ts">
	export let number = 0;
	export let row;
	export let col;
	export let selected = false;
	export let peerCell = false;
	export let peerDigit = false;
	export let order = 3;

	const top = row === 0;
	const bottom = row === order * order - 1;
	const left = col === 0;
	const right = col === order * order - 1;

	const getClass = (
		selected: boolean,
		peerCell: boolean,
		peerDigit: boolean,
		top: boolean,
		right: boolean,
		bottom: boolean,
		left: boolean
	) => {
		const classes = [];
		selected && classes.push('selected');
		peerCell && classes.push('peerCell');
		peerDigit && classes.push('peerDigit');
		top && right && classes.push('topRight');
		top && left && classes.push('topLeft');
		bottom && right && classes.push('bottomRight');
		bottom && left && classes.push('bottomLeft');
		return classes.join(' ');
	};

	$: classString = getClass(selected, peerCell, peerDigit, top, right, bottom, left);
</script>

<div class={classString}>
	{number !== 0 ? number : ''}
</div>

<style>
	div {
		display: grid;
		aspect-ratio: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--background-color);
		color: var(--text-color);
		text-align: center;
		cursor: pointer;
		-webkit-user-select: none; /* Safari */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* IE10+/Edge */
		user-select: none; /* Standard */
	}

	.selected {
		background-color: var(--nord-13);
	}

	.peerCell {
		background-color: var(--nord-8);
	}

	.peerDigit {
		background-color: var(--nord-9);
	}

	.topLeft {
		border-radius: 6px 0 0 0;
	}

	.topRight {
		border-radius: 0 6px 0 0;
	}

	.bottomLeft {
		border-radius: 0 0 0 6px;
	}

	.bottomRight {
		border-radius: 0 0 6px 0;
	}

	.initial {
		color: var(--nord-2);
	}

	.inputselect {
		caret-color: transparent;
	}
</style>
