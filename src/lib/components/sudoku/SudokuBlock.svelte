<script>
	export let board = false;
</script>

<div
	class="grid grid-cols-3 grid-rows-3 gap-[1px] bg-polar-300"
	class:gap-[3px]={!!board}
	class:aspect-square={!!board}
>
	<slot />
</div>
