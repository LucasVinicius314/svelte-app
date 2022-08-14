<script lang="ts">
  import Button from '@smui/button'
  import TopAppBar, { Section, Title } from '@smui/top-app-bar'

  import { UserRepository } from '../repositories/userrepository'
  import { userStore } from '../stores/user'

  const register = async () => {
    const res = await UserRepository.login({
      email: 'sure@gmail.com',
      passord: 'sure',
    })

    userStore.set(res)
  }
</script>

<section>
  <TopAppBar variant="static">
    <Section>
      <Title>Login</Title>
    </Section>
  </TopAppBar>

  <div>
    <Button on:click={register}>Login</Button>
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
