<script lang="ts">
	export let icon: string;
	export let href: string;
	export let caption = 'caption';
	export let color = 'green';

	const icons = new Map([
		[
			'download',
			'M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
		],
		[
			'code',
			'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
		]
	]);
</script>

<figure class="flex flex-col justify-end">
	<a {href} title={caption} target="_blank" class="block hover:brightness-90"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			class:text-aurora-400={color === 'green'}
			class:text-aurora-200={color === 'orange'}
		>
			<path fill-rule="evenodd" d={icons.get(icon)} clip-rule="evenodd" />
		</svg>
	</a>
	<figcaption class="font-sm text-lg">{caption}</figcaption>
</figure>
