<script lang="ts">
	import LetterBox from '$lib/components/wordle/LetterBox.svelte';
	import type { Word } from '$lib/types/types';
	export let data: Word[];
</script>

<div class="grid grid-cols-5 grid-rows-6 gap-1 mt-0 mb-0 mr-auto ml-auto w-full">
	{#each data as word, i}
		{#each word.word as letter, j}
			<LetterBox letter={letter?.letter || ''} status={letter?.status || 'none'} />
		{/each}
	{/each}
</div>
