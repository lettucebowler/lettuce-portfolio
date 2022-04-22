<script context="module">
	export const hydrate = false;
	export const prerender = true;
</script>

<script lang="ts">
	import IconLink from '$lib/components/IconLink.svelte';
	import Spacing from '$lib/components/Spacing.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>Grant Montgomery</title>
</svelte:head>

<Card>
	<h1>Hello, I'm Grant!</h1>
	<div class="tagline">Web Developer | Sudoku Enthusiast | Linux Hobbyist</div>
	<p>
		I like Sudoku puzzles and I like learning new things. I'm a web developer currently working in
		the healthcare industry.
	</p>
	<div class="block">
		<div class="content">
			<div class="margin">
				<IconLink href="/Resume.pdf" icon="insert_drive_file" color="twelve" caption="Resume" />
			</div>
			<div class="margin">
				<IconLink href="https://github.com/lettucebowler" icon="git" caption="Github" />
			</div>
		</div>
	</div>
</Card>

<style>
	h1 {
		font-size: 3.75rem;
		margin: 0 0 0 0;
	}

	p {
		font-size: 1.25rem;
		padding: 0px 14px;
		text-align: center;
	}

	.block {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
	}

	.content {
		flex-wrap: wrap;
		flex: 1 1 auto;
		justify-content: center;
		flex-direction: row;
		display: flex;
	}

	.margin {
		margin: 3px 8px;
		flex: 1 1 auto;
	}

	.tagline {
		font-size: 1.5rem;
		margin: 1.5rem 0;
		font-weight: 500;
	}
</style>
