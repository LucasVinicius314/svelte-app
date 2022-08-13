<script lang="ts">
  // import Button from '@smui/button'
  import IconButton from '@smui/icon-button'
  import TopAppBar, { Section, Title } from '@smui/top-app-bar'

  // export let title: string

  // let items = [
  //   {
  //     name: 'Something',
  //   },
  //   {
  //     name: 'Something else',
  //   },
  // ]

  // const addItem = () => {
  //   items = [...items, { name: 'New something' }]
  // }
</script>

<main>
  <TopAppBar variant="static">
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>Home</Title>
    </Section>
  </TopAppBar>

  <!-- <div style="padding: 0 16px 0 16px;">
    <h1 style="word-wrap: break-word;">Welcome to {title}!</h1>

    <p>{items.length}</p>

    <div>
      <Button on:click={addItem}>New item</Button>
    </div>
  </div> -->

  <!-- <p style="padding: 0 16px; word-wrap: break-word;">
    Check out your new stuff:
  </p> -->

  <!-- <div
    style="background-color: white; margin: 0 16px 16px 16px; border-radius: 8px; align-items: stretch; overflow: hidden;"
  >
    {#each items as item, i}
      {#if i !== 0}
        <hr />
      {/if}
      <ListItem
        title={item.name}
        onClick={() => {
          items = items.filter((v) => v != item)
        }}
      />
    {/each}
  </div>

  <div style="padding: 0 16px 16px 16px;">
    <Table />
  </div>

  <div style="padding: 0 16px 16px 16px;">
    <Table />
  </div>

  <div style="padding: 0 16px 16px 16px;">
    <Table />
  </div> -->
</main>

<style>
</style>
