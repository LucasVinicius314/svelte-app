<script lang="ts">
  import CircularProgress from '@smui/circular-progress'
  import Button from '@smui/button'
  import { navigate } from 'svelte-routing'

  const login = () => {
    navigate('/login')
  }

  const register = () => {
    navigate('/register')
  }
</script>

<section>
  <CircularProgress style="height: 32px; width: 32px;" indeterminate />

  <div style="height: 32px;" />

  <Button on:click={login}>Login</Button>
  <Button on:click={register}>Register</Button>
</section>

<style>
  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
  }
</style>
