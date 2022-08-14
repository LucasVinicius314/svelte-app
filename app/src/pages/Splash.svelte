<script lang="ts">
  import CircularProgress from '@smui/circular-progress'
  import Button from '@smui/button'
  import { navigate } from 'svelte-routing'
  import { onMount } from 'svelte'

  import { UserRepository } from '../repositories/userrepository'
  import { getToken } from '../services/localstorage'
  import { userStore } from '../stores/user'

  const login = () => {
    navigate('/login')
  }

  const register = () => {
    navigate('/register')
  }

  onMount(async () => {
    const token = getToken()

    if (token !== null) {
      const res = await UserRepository.validate()

      userStore.set(res)
    }
  })
</script>

<section>
  <CircularProgress style="height: 32px; width: 32px;" indeterminate />

  <div style="height: 32px;" />

  <Button on:click={login}>Login</Button>
  <Button on:click={register}>Register</Button>
</section>

<style>
  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
  }
</style>
