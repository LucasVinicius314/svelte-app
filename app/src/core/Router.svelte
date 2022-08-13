<script lang="ts">
  import { Router, Route } from 'svelte-routing'

  import Home from '../pages/Home.svelte'
  import Login from '../pages/Login.svelte'
  import Splash from '../pages/Splash.svelte'
  import { userStore } from '../stores/user'
  import type { User } from '../typescript/user'

  let user: User | null = null

  userStore.subscribe((value) => {
    user = value
  })
</script>

<Router>
  {#if user === null}
    <Route path="/" component={Splash} />
    <Route path="/login" component={Login} />
  {:else}
    <Route path="/" component={Home} />
  {/if}
</Router>

<style>
</style>
