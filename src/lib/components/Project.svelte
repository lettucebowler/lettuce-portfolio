<script>
	import '$lib/styles/app.css';
</script>

<div class="project">
	<div class="description">
		<slot name="description" />
	</div>
	<div class="figure">
		<slot name="figure" />
	</div>
	<slot />
</div>

<style lang="scss">
	.description {
		margin: 3px;
		flex: 2 2 400px;
	}

	.project {
		display: flex;
		flex-wrap: wrap;
		background-color: var(--nord-1);
		border-radius: 12px;
		padding: 3px;
		align-items: flex-start;
	}

	.figure {
		margin: 3px;
		flex: 1 1 200px;
	}

	:global(p) {
		font-size: 1.25rem;
		text-align: left;
		padding: 0 8px;
	}

	:global(h2) {
		margin: 0 0 0 0;
		font-size: 2.5rem;
		text-align: left;
		padding-left: 8px;
	}

	:global(a) {
		text-decoration: none;
		color: var(--nord-14);
	}
</style>
