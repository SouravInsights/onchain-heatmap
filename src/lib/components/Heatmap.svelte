<!-- src/lib/Heatmap.svelte -->
<script lang="ts">
  import { generateDates } from '../utils/generateDates'; // Import date generation utility function
  import MonthHeatmap from './MonthHeatmap.svelte'; // Import MonthHeatmap component
  import Legend from './Legend.svelte'; // Import Legend component

  // Define contribution object type
  interface Contribution {
    date: string;
    level: string;
  }

  // Define props type
  export let contributions: Contribution[] = [];
</script>

<style>
  /* Define heatmap container styles */
  .heatmap-container {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<div class="heatmap-container">
  {#each generateDates(new Date().getFullYear()) as monthDates}
    <MonthHeatmap {monthDates} {contributions} />
  {/each}

  <!-- Legend component -->
  <Legend levels={['low', 'medium', 'high']} />
</div>
