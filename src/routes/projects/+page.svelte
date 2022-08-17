<script lang="ts">
	import SudokuProject from '$lib/components/SudokuProject.svelte';
	import WordleProject from '$lib/components/WordleProject.svelte';
	import GithubProject from '$lib/components/GithubProject.svelte';
	import PokedexProject from '$lib/components/PokedexProject.svelte';
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="projects">
	<h1>Projects</h1>
	<p>
		Here are a few personal projects that I currently feel like showing off. I've recently been
		getting into sveltekit so you'll find a few of my sveltekit projects below.
	</p>
	<SudokuProject />
	<WordleProject />
	<PokedexProject />
	<GithubProject />
</div>

<style>
	.projects {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	h1 {
		font-size: 3.75rem;
		margin: 0 0 0 0;
	}

	p {
		font-size: 1.25rem;
		text-align: center;
	}
</style>
