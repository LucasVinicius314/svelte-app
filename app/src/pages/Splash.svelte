<script lang="ts">
  import CircularProgress from '@smui/circular-progress'
  import { onMount } from 'svelte'
  import { userStore } from '../stores/user'

  onMount(() => {
    userStore.set({
      createdAt: new Date(),
      email: 'a',
      id: 0,
      password: '',
      updatedAt: new Date(),
      username: '',
    })
  })
</script>

<div>
  <CircularProgress style="height: 32px; width: 32px;" indeterminate />
</div>

<style>
  div {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
  }
</style>
