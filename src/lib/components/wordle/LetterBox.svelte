<script lang="ts">
	import classnames from 'classnames';
	export let letter: string;
	export let status: string;
</script>

<div
	class={classnames(
		'aspect-square justify-center text-center grid place-items-center text-2xl font-bold rounded-lg',
		{
			'bg-polar-400': status === 'incorrect',
			'bg-aurora-300': status === 'contains',
			'bg-aurora-400': status === 'correct',
			'bg-polar-100 border-4 border-solid border-polar-400 rounded-lg': status === 'none'
		}
	)}
>
	{letter.toUpperCase()}
</div>
