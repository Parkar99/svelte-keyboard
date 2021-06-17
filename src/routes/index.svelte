<script lang="ts">
  import NormalKey from '$lib/components/NormalKey.svelte'
  import SpaceKey from '$lib/components/SpaceKey.svelte'
  import { keyboardLayout } from '$lib/keyboard'
  import { findKeyInList, isKeyDown, isLocationKey, isNormalKey } from '$lib/utils'

  let allKeys = keyboardLayout

  const handleKeyboardPresses = (e: KeyboardEvent) => {
    e.preventDefault()

    const position = findKeyInList(keyboardLayout, e.key, isLocationKey(e) ? e.location : undefined)
    if (position === undefined) return

    const first = position[0]
    const second = position[1]

    const key = allKeys[first][second]

    allKeys[first][second] = { ...key, pressed: isKeyDown(e) }
    allKeys = [...allKeys]
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    handleKeyboardPresses(e)
  }

  const handleKeyUp = (e: KeyboardEvent) => {
    handleKeyboardPresses(e)
  }
</script>

<svelte:window on:keydown={handleKeyDown} on:keyup={handleKeyUp} />

<div class="flex flex-col space-y-1 justify-center">
  {#each allKeys as keyRow, rowNumber}
    <div class="flex" class:justify-end={rowNumber === 6}>
      {#each keyRow as key}
        <span class:flex-1={rowNumber !== 6} class="flex">
          {#if isNormalKey(key)}
            <NormalKey {key} />
          {:else if key.normal === ' '}
            <SpaceKey {key} />
          {:else}
            <span class:material-icons={key.icon}>
              {key.displayText}
            </span>
          {/if}</span
        >
      {/each}
    </div>
  {/each}
</div>
