<script lang="ts">
  import IconButton from '@smui/icon-button'
  import Tooltip, { Wrapper } from '@smui/tooltip'

  export let title: string
  export let onClick: () => void
</script>

<div style="display: flex;">
  <div style="flex: 1; padding: 16px;">
    <span>{title}</span>
  </div>

  <div class="spacer" />

  <div class="icon">
    <Wrapper>
      <IconButton class="material-icons" on:click={onClick}>close</IconButton>

      <Tooltip>Close</Tooltip>
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
