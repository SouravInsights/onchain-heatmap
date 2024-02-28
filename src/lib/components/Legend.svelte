<!-- src/lib/Legend.svelte -->
<script lang="ts">
  export let levels: string[] = []; // Array of contribution levels

  // Define color-coding logic
  function getColor(level: string): string {
    // Implement your color-coding logic based on the contribution level
    if (level === 'low') {
      return 'lightblue';
    } else if (level === 'medium') {
      return 'blue';
    } else if (level === 'high') {
      return 'darkblue';
    }
    return 'white'; // Default color if no color logic applied
  }
</script>

<style>
  /* Define legend styles here */
  .legend-item {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  .legend-color {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 50%;
  }
</style>

{#each levels as level}
  <div class="legend-item">
    <div class="legend-color" style="background-color: {getColor(level)};"></div>
    <div>{level}</div>
  </div>
{/each}
