<script lang="ts">
	export let icon: string;
	export let href: string;
	export let color = 'fourteen';
	export let caption = 'caption';
</script>

<figure>
	<a {href} title={caption} target="_blank"
		><span class={`icon-${icon} ${color}`} alt={caption} /></a
	>
	<figcaption>{caption}</figcaption>
</figure>

<style>
	a {
		text-decoration: none;
	}

	a .fourteen {
		color: var(--nord-14);
	}

	a .twelve {
		color: var(--nord-12);
	}

	span {
		font-size: 8rem;
	}

	figcaption {
		font-size: 1.5rem;
	}
</style>
