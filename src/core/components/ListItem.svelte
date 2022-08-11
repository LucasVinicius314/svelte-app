<script lang="ts">
  import IconButton from '@smui/icon-button'
  import Paper from '@smui/paper'

  export let title: string
  export let onClick: () => void
</script>

<main>
  <div style="display: flex;">
    <Paper style="flex: 1; padding: 2px 16px;">
      <h3>{title}</h3>
    </Paper>

    <div style="width: 16px;" />

    <Paper style="display: flex; align-items: center; padding: 2px 16px;">
      <IconButton class="material-icons" on:click={onClick}>close</IconButton>
    </Paper>
  </div>
</main>

<style>
</style>
