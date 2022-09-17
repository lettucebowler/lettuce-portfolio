<script>
	export let board = false;
</script>

<div
	class="grid-cols-3 grid-rows-3 bg-polar-300 grid gap-[1px]"
	class:gap-[3px]={!!board}
	class:aspect-square={!!board}
>
	<slot />
</div>
