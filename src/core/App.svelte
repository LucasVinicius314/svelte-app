<script lang="ts">
  import Button from '@smui/button'
  import IconButton from '@smui/icon-button'
  import TopAppBar, { Section, Title } from '@smui/top-app-bar'

  import ListItem from './components/ListItem.svelte'

  export let title: string

  let items = [
    {
      name: 'Something',
    },
    {
      name: 'Something else',
    },
  ]

  const addItem = () => {
    items = [...items, { name: 'New something' }]
  }
</script>

<main>
  <TopAppBar variant="static">
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>Somethings</Title>
    </Section>
  </TopAppBar>

  <div style="padding: 0 16px 16px 16px;">
    <h1>Welcome to {title}!</h1>

    <p>{items.length}</p>

    <div>
      <Button on:click={addItem}>New item</Button>
    </div>
  </div>

  <div style="padding: 0 16px 16px 16px;">
    {#each items as item, i}
      <ListItem
        title={item.name}
        onClick={() => {
          items = items.filter((v) => v != item)
        }}
      />
      <br />
    {/each}
  </div>
</main>

<style>
</style>
