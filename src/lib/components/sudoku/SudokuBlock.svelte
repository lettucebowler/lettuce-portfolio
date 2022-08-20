<script>
	export let board = false;
	import classnames from 'classnames';
</script>

<div
	class={classnames('grid-cols-3 grid-rows-3 bg-polar-300 grid gap-[1px]', {
		'gap-[3px] aspect-square': board
	})}
>
	<slot />
</div>
