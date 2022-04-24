<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import SudokuProject from '$lib/components/SudokuProject.svelte';
	import WordleProject from '$lib/components/WordleProject.svelte';
	import GithubProject from '$lib/components/GithubProject.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="projects">
	<Card>
		<h1>Projects</h1>
		<p>Below are the personal projects I currently feel like showing off.</p>
	</Card>
	<SudokuProject />
	<WordleProject />
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
