<script lang="ts">
  import type { Key } from '$lib/keyboard'
  import { KeyLength } from '$lib/keyboard'

  export let key: Key
  export let length: KeyLength

  const getWidth = (): string => {
    switch (length) {
      case KeyLength.Normal:
        return 'w-20'
      case KeyLength.Medium:
        return 'w-28'
      case KeyLength.Long:
        return 'w-36'
    }
  }

  const isFlatKey = (): boolean => {
    return !!key.normal.match(/^F\d+/) || key.normal.includes('Arrow') || key.normal.includes('Page')
  }
</script>

<span
  class="{key.pressed ? 'bg-gray-900' : 'bg-gray-800'} text-white {isFlatKey()
    ? 'h-14'
    : 'h-20'} {getWidth()} mx-1 p-2 rounded-lg"
  class:material-icons={key.icon}
>
  {#if key.displayShift}
    <div>{key.shift}</div>
  {/if}
  <div>{key.displayText}</div>
</span>
