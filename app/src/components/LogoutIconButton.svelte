<script lang="ts">
  import IconButton from '@smui/icon-button'
  import Tooltip, { Wrapper } from '@smui/tooltip'
  import Dialog, { Title, Content, Actions } from '@smui/dialog'
  import Button, { Label } from '@smui/button'

  import { setToken } from '../services/localstorage'
  import { userStore } from '../stores/user'

  let open: boolean = false

  const logout = () => {
    setToken(null)

    userStore.set(null)
  }
</script>

<Dialog bind:open>
  <Title>Notice</Title>
  <Content>Log out?</Content>
  <Actions>
    <Button on:click={() => (open = false)}>
      <Label>No</Label>
    </Button>
    <Button on:click={logout}>
      <Label>Yes</Label>
    </Button>
  </Actions>
</Dialog>

<Wrapper>
  <IconButton class="material-icons" on:click={() => (open = true)}>
    logout
  </IconButton>

  <Tooltip>Log out</Tooltip>
</Wrapper>

<style>
</style>
