<script>
  import '../app.scss'
</script>

<svelte:head>
  <title>Nabeel's Almost Accurate Keyboard</title>
</svelte:head>

<div class="w-3/4 h-screen mx-auto">
  <div class="h-full flex flex-col justify-center">
    <div class="flex">
      <slot />
    </div>
  </div>
</div>

<style lang="scss">
</style>
