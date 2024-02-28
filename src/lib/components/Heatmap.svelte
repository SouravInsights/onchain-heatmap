<script lang="ts">
  import { generateDates } from '../utils/generateDates'; // Import date generation utility function
  import MonthHeatmap from './MonthHeatmap.svelte'; // Import MonthHeatmap component
  import Legend from './Legend.svelte'; // Import Legend component

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
    flex-direction: row;
  }

  /* Add some margin between MonthHeatmap components */
  .month-container {
    margin-bottom: 20px;
  }
</style>

<div class="heatmap-container">
  {#each generateDates(new Date().getFullYear()) as monthDates, monthIndex}
    <div class="month-container">
      <MonthHeatmap {monthDates} {contributions} />
    </div>
  {/each}

  <!-- Legend component -->
  <Legend levels={['low', 'medium', 'high']} />
</div>
