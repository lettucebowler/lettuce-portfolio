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
</div>

<style lang="scss">
	.description {
		grid-column: span 2;
	}

	.project {
		display: grid;
		column-gap: 4px;
		background-color: var(--nord-1);
		border-radius: 12px;
		padding: 6px 6px;
		margin: 2px 2px;
		@media screen and (min-width: 650px) {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	.figure {
		grid-column: span 1;
		@media screen and (max-width: 650px) {
			grid-column: span 2;
		}
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
