<script lang="ts">
  import IconButton from '@smui/icon-button'
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar'
  import { onMount } from 'svelte'
  import CircularProgress from '@smui/circular-progress'
  import Tooltip, { Wrapper } from '@smui/tooltip'

  import { TodoRepository } from '../repositories/todorepository copy'
  import { todoStore } from '../stores/todo'
  import type { Todo } from '../typescript/todo'
  import ListItem from '../components/ListItem.svelte'
  import LogoutIconButton from '../components/LogoutIconButton.svelte'

  let todosPromise: Promise<Todo[]> | null = null

  todoStore.subscribe((value) => {
    todosPromise = value
  })

  onMount(() => {
    const req = TodoRepository.all()

    todoStore.set(req)
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

  {#await todosPromise}
    <CircularProgress style="height: 32px; width: 32px;" indeterminate />
  {:then todos}
    {#if (todos?.length ?? 0) === 0}
      <span style="padding: 0 16px;">Your todo list is empty.</span>
    {:else}
      {#each todos ?? [] as todo}
        <ListItem
          {todo}
          onClick={() => {
            // TODO: fix
          }}
        />
      {/each}
    {/if}
  {:catch error}
    <span>{error}</span>
  {/await}
</section>

<style>
</style>
