<div class="center">
	<div class="page">
		<slot />
	</div>
</div>

<style>
	.page {
		margin: 0 auto;
		max-width: calc(100vh / 8.5 * 5);
		justify-content: start;
		height: auto;
	}

	.center {
		margin: 0 0;
		display: flex;
	}
</style>
