<script lang="ts">
	export let number = '';
	export let selected = false;
	export let peerCell = false;
	export let peerDigit = false;
</script>

<div
	class="grid select-none place-items-center font-medium text-polar-100"
	class:text-transparent={number === '0'}
	class:bg-aurora-300={selected}
	class:bg-snow-100={!selected && !peerCell && !peerDigit}
	class:bg-frost-200={peerCell}
	class:bg-frost-300={peerDigit}
>
	{number}
</div>
