<script>
	import LetterBox from '$lib/components/wordle/LetterBox.svelte';
	export let data;
</script>

<div>
	{#each data as word, i}
		{#each word.word as letter, j}
			<LetterBox letter={letter?.letter || ''} status={letter?.status || 'none'} top={!i} left={!j} right={j === 4} />
		{/each}
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-gap: 4px;
		margin: 0 auto;
		width: 100%;
		aspect-ratio: 5 / 6;
	}
</style>
