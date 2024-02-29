<!-- HeatmapLegend.svelte -->
<script lang="ts">
  export let legendItems: { color: string; text: string }[] = [];
</script>

<div class="legend">
  {#each legendItems as item}
    <div class="legend-item">
      <span class="legend-color" style="background-color: {item.color}"></span>
      <span class="legend-text">{item.text}</span>
    </div>
  {/each}
</div>

<style>
  .legend {
    display: flex;
    flex-direction: column;
    font-size: 12px;
  }

  .legend-item {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }

  .legend-color {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    border-radius: 2px;
  }
</style>
