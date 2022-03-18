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
		// grid-column: span 2;
		flex: 2 2 200px;
	}

	// .project {
	// 	display: grid;
	// 	column-gap: 4px;
	// 	background-color: var(--nord-1);
	// 	border-radius: 12px;
	// 	padding: 6px 6px;
	// 	@media screen and (min-width: 650px) {
	// 		grid-template-columns: 1fr 1fr 1fr;
	// 	}
	// }

	.project {
		display: flex;
		// column-gap: 4px;
		width: 100%;
		flex-wrap: wrap;
		// flex-direction: row;
		justify-content: center;
		background-color: var(--nord-1);
		border-radius: 12px;
		padding: 6px 6px;
		// @media screen and (min-width: 650px) {
		// 	grid-template-columns: 1fr 1fr 1fr;
		// }
	}

	.figure {
		// grid-column: span 1;
		// @media screen and (max-width: 650px) {
		// 	grid-column: span 2;
		// }
		flex: 1 1 190px;
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
