<script lang="ts">
	import type { Key } from '$lib/keyboard'

	export let key: Key
</script>

<span
	class="{key.pressed ? 'bg-gray-900' : 'bg-gray-800'} text-white h-20 w-20 mx-1 p-2 rounded-lg"
	class:material-icons={key.icon}
>
	{#if key.displayShift}
		<div>{key.shift}</div>
	{/if}
	<div>{key.displayText}</div>
</span>
