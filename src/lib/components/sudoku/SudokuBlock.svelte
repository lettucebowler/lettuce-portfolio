<script>
	const order = 3;
	export let board = false;
	import classnames from 'classnames';
</script>

<div class={classnames('three bg-polar-300 grid gap-[1px]', { board: board })}>
	<slot />
</div>

<style>
	.three {
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
	}

	.board {
		grid-gap: 3px;
		aspect-ratio: 1;
	}
</style>
