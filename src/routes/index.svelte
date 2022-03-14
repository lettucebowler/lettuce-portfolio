<script context="module">
	export const hydrate = false;
	export const prerender = true;
</script>

<script lang="ts">
	import Spacing from '$lib/components/Spacing.svelte';
</script>

<svelte:head>
	<title>Grant Montgomery</title>
</svelte:head>

<Spacing />
<h1>Hello, I'm Grant!</h1>
<div class="tagline">All-Star Dev | Sudoku Enthusiast | Linux Hobbyist</div>
<p>
	I like Sudoku puzzles and I like learning new things. I'm a web developer currently working in the
	healthcare industry.
</p>

<style>
	h1 {
		font-size: 3.75rem;
		margin: 0 0 0 0;
	}

	p {
		font-size: 1.25rem;
		text-align: left;
		padding: 0 14px;
	}

	.tagline {
		font-size: 1.5rem;
		margin: 1.5rem 0;
		font-weight: 500;
	}
</style>
