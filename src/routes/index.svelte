<script context="module">
	export const hydrate = false;
	export const prerender = true;
</script>

<script lang="ts">
	import IconLink from '$lib/components/IconLink.svelte';
	import Spacing from '$lib/components/Spacing.svelte';
</script>

<svelte:head>
	<title>Grant Montgomery</title>
</svelte:head>

<div class="card">
	<div class="full">
		<h1>Hello, I'm Grant!</h1>
		<div class="tagline">Web Developer | Sudoku Enthusiast | Linux Hobbyist</div>
		<p>
			I like Sudoku puzzles and I like learning new things. I'm a web developer currently working in
			the healthcare industry.
		</p>
		<Spacing />
		<Spacing />

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
	</div>
</div>

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

	.card {
		background-color: var(--nord-1);
		border-radius: 12px;
		/* padding: 3px; */
		/* max-height: 500px; */
		padding-bottom: 8px;
		height: 100%;
	}

	.block {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		/* flex-direction: column; */
	}

	.content {
		/* margin: 3px; */
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
