<script>
	export let letter;
	export let status;
	export let top;
	export let left;
	export let right;
</script>

<div class={`${status}`}>
	{letter.toUpperCase()}
</div>

<style>
	div {
		aspect-ratio: 1;
		justify-content: center;
		text-align: center;
		align-items: center;
		vertical-align: center;
		display: inline-flex;
		font-size: 1.5rem;
		border-radius: 16px;
		color: var(--nord-6);
		font-weight: 500;
	}

	.none {
		background-color: var(--none);
		border-color: var(--incorrect);
		border-style: solid;
		border-width: medium;
	}

	.correct {
		background-color: var(--correct);
	}

	.contains {
		background-color: var(--contains);
	}

	.incorrect {
		background-color: var(--incorrect);
	}
</style>
