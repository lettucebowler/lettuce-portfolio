<script>
	import pikachu from '$lib/assets/25.webp';
</script>

<div class="inner">
	<div class="image">
		<img src={pikachu} alt="pikachu" />
	</div>
	<div class="types">electric</div>
</div>

<style>
	.inner {
		border: solid 8px #fae078;
		background-color: white;
		border-radius: 16px;
		aspect-ratio: 1;
		display: grid;
		padding: 4px;
	}

	.types {
		background-color: #f8d030;
		color: black;
		font-weight: 500;
		border-radius: 4px;
		padding: 4px;
	}

	img {
		max-height: 300px;
		aspect-ratio: 1;
	}
</style>
