<script>
	import '$lib/styles/app.css';
	import Card from '$lib/components/Card.svelte';
</script>

<Card>
	<div class="project">
		<div class="description">
			<slot name="description" />
		</div>
		<div class="figure" aria-hidden="true">
			<slot name="figure" />
		</div>
	</div>
</Card>

<style>
	.description {
		margin: 3px;
		flex: 2 2 30rem;
	}

	.project {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		align-items: flex-start;
	}

	.figure {
		margin: 3px;
		flex: 1 1 15rem;
	}

	:global(p) {
		font-size: 1.25rem;
		text-align: left;
	}

	:global(h2) {
		margin: 0 0 0 0;
		font-size: 2.5rem;
		text-align: left;
		margin: 0;
	}

	:global(a, span) {
		text-decoration: none;
		color: var(--nord-14);
	}
</style>
