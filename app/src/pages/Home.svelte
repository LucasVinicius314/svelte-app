<script lang="ts">
  import Button from '@smui/button'
  import IconButton from '@smui/icon-button'
  import TopAppBar, { Section, Title } from '@smui/top-app-bar'

  import { userStore } from '../stores/user'

  const logout = () => {
    userStore.set(null)
  }
</script>

<section>
  <TopAppBar variant="static">
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>Home</Title>
    </Section>
  </TopAppBar>

  <h1 style="padding: 0 16px;">Your todos</h1>

  <div>
    <Button on:click={logout}>Logout</Button>
  </div>
</section>

<style>
  div {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    padding: 16px;
  }
</style>
