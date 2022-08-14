<script lang="ts">
  import IconButton from '@smui/icon-button'
  import Tooltip, { Wrapper } from '@smui/tooltip'
  import { onMount } from 'svelte'

  import type { Todo } from '../typescript/todo'

  export let todo: Todo
  export let onClick: () => void
</script>

<div style="display: flex;">
  <div style="display: flex; flex-direction: column; flex: 1; padding: 16px;">
    <span>{todo.title}</span>

    <div style="height: 8px;" />

    <small>{todo.content}</small>

    <div style="height: 8px;" />

    <small style="font-size: 10px; color: #555;">
      Created: {new Date(todo.createdAt).toDateString()}
    </small>
  </div>

  <div class="spacer" />

  <div class="icon">
    <Wrapper>
      <IconButton class="material-icons" on:click={onClick}>close</IconButton>

      <Tooltip>Remove</Tooltip>
    </Wrapper>
  </div>
</div>

<style>
  .icon {
    align-items: center;
    display: flex;
    height: 60px;
    justify-content: center;
    padding: 0;
    width: 60px;
  }

  .spacer {
    width: 16px;
  }
</style>
