<script lang="ts">
	import SudokuProject from '$lib/components/SudokuProject.svelte';
	import WordleProject from '$lib/components/WordleProject.svelte';
	import PokedexProject from '$lib/components/PokedexProject.svelte';
	import P from '$lib/components/util/P.svelte';
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="flex flex-col gap-2">
	<h1 class="m-0 text-6xl font-bold">Projects</h1>
	<P>
		Here are a few personal projects that I currently feel like showing off. I've recently been
		getting into sveltekit so you'll find a few of my sveltekit projects below.
	</P>
	<SudokuProject />
	<WordleProject />
	<PokedexProject />
</div>
