<script lang="ts">
	import classnames from 'classnames';
	export let number = '';
	export let selected = false;
	export let peerCell = false;
	export let peerDigit = false;
</script>

<div
	class={classnames('grid place-items-center text-polar-100 select-none font-medium', {
		'text-transparent': number === '0',
		'bg-aurora-300': selected,
		'bg-snow-100': !selected && !peerCell && !peerDigit,
		'bg-frost-200': peerCell,
		'bg-frost-300': peerDigit
	})}
>
	{number}
</div>
