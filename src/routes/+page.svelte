<script lang="ts">
	import IconLink from '$lib/components/IconLink.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>Grant Montgomery</title>
</svelte:head>

<Card>
	<h1>Hello, I'm Grant!</h1>
	<p>
		I like Sudoku puzzles and learning new things. I'm a web developer currently working in the
		healthcare industry.
	</p>
	<div class="block">
		<div class="content">
			<div class="margin">
				<IconLink href="/Resume.pdf" icon="download" caption="Resume" />
			</div>
			<div class="margin">
				<IconLink href="https://github.com/lettucebowler" icon="code" caption="Github" />
			</div>
		</div>
	</div>
</Card>

<style>
	h1 {
		font-size: 3.75rem;
		margin: 0 0 0 0;
	}

	/* p {
		font-size: 1.5rem;
		padding: 0px 14px;
		text-align: center;
	} */

	.block {
		display: flex;
		flex-wrap: wrap;
		justify-content: center
		/* align-items: flex-start; */
	}

	.content {
		flex-wrap: wrap;
		/* flex: 1 1 auto; */
		justify-content: center;
		flex-direction: row;
		display: flex;
	}

	.margin {
		margin: 3px 8px;
		/* flex: 1 1 auto; */
	}
</style>
