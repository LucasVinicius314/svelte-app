<script lang="ts">
  import Button from '@smui/button'
  import IconButton from '@smui/icon-button'
  import TopAppBar, { Section, Title } from '@smui/top-app-bar'

  import { UserRepository } from '../repositories/userrepository'

  const register = async () => {
    const res = await UserRepository.register({
      email: 'sure@gmail.com',
      passord: 'sure',
      username: 'Sure',
    })
  }
</script>

<section>
  <TopAppBar variant="static">
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>Register</Title>
    </Section>
  </TopAppBar>

  <Button on:click={register}>Register</Button>
</section>

<style>
</style>
