<script lang="ts">
  import IconButton from '@smui/icon-button'
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar'
  import { onMount } from 'svelte'
  import CircularProgress from '@smui/circular-progress'
  import Tooltip, { Wrapper } from '@smui/tooltip'
  import Fab, { Icon } from '@smui/fab'
  import Dialog, { Actions, Content, Title as DialogTitle } from '@smui/dialog'
  import Button, { Label } from '@smui/button'

  import { TodoRepository } from '../repositories/todorepository copy'
  import { todoStore } from '../stores/todo'
  import type { Todo } from '../typescript/todo'
  import ListItem from '../components/ListItem.svelte'
  import LogoutIconButton from '../components/LogoutIconButton.svelte'
  import RoundedCard from '../components/RoundedCard.svelte'

  let todosPromise: Promise<Todo[]> | null = null

  let open: boolean = false

  const create = async () => {
    // TODO: fix
    const res = await TodoRepository.create({
      content: 'Something',
      title: 'Titleee letsgoo',
    })

    fetchTodos()
  }

  const fetchTodos = async () => {
    const req = TodoRepository.all()

    todoStore.set(req)
  }

  todoStore.subscribe((value) => {
    todosPromise = value
  })

  onMount(() => {
    fetchTodos()
  })
</script>

<section>
  <TopAppBar variant="static">
    <Row>
      <Section>
        <Wrapper>
          <IconButton class="material-icons">menu</IconButton>

          <Tooltip>Menu</Tooltip>
        </Wrapper>
        <Title>Home</Title>
      </Section>
      <Section align="end">
        <LogoutIconButton />
      </Section>
    </Row>
  </TopAppBar>

  <h1 style="padding: 0 16px;">Your todos</h1>

  <div style="padding: 0 16px 16px 16px;">
    <RoundedCard>
      {#await todosPromise}
        <div style="padding: 16px; display: flex; justify-content: center;">
          <CircularProgress style="height: 32px; width: 32px;" indeterminate />
        </div>
      {:then todos}
        {#if (todos?.length ?? 0) === 0}
          <div style="padding: 16px;">
            <span> Your todo list is empty. </span>
          </div>
        {:else}
          {#each todos ?? [] as todo, i}
            {#if i !== 0}
              <hr />
            {/if}
            <ListItem
              {todo}
              onClick={async () => {
                await TodoRepository.delete({ id: todo.id })

                fetchTodos()
              }}
            />
          {/each}
        {/if}
      {:catch error}
        <span>{error}</span>
      {/await}
    </RoundedCard>
  </div>

  <Wrapper>
    <Fab
      on:click={() => {
        open = true
      }}
      style="position: absolute; bottom: 16px; right: 16px;"
    >
      <Icon class="material-icons">add</Icon>
    </Fab>

    <Tooltip>Create new todo</Tooltip>
  </Wrapper>

  <Dialog bind:open>
    <DialogTitle>New todo</DialogTitle>
    <Content>Create new todo?</Content>
    <Actions>
      <Button on:click={() => (open = false)}>
        <Label>Close</Label>
      </Button>
      <Button on:click={create}>
        <Label>Create</Label>
      </Button>
    </Actions>
  </Dialog>
</section>

<style>
</style>
