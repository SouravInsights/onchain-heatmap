<!-- src/lib/MonthHeatmap.svelte -->
<script lang="ts">
  // Define contribution object type
  interface Contribution {
    date: string;
    level: string;
  }

  export let monthDates: Date[] = [];
  export let contributions: Contribution[] = [];
  
  // Define color-coding logic
  function getColor(level: string): string {
    if (level === 'low') {
      return 'lightblue';
    } else if (level === 'medium') {
      return 'blue';
    } else if (level === 'high') {
      return 'darkblue';
    }
    return 'white'; // Default color if no color logic applied
  }

  // Function to get the contribution level for a given date
  function getContributionLevel(date: Date): string {
    if (!date) return 'none'; // Check if date is undefined
    const dateString = date.toISOString().split('T')[0];
    const contribution = contributions.find(c => c.date === dateString);
    return contribution ? contribution.level : 'none';
}

  // Function to get the name of the month
  function getMonthName(monthDate: Date): string {
    return monthDate.toLocaleString('default', { month: 'short' });
  }

  // Define function to get the index of the first day of the month
  function getFirstDayIndex(): number {
    return monthDates[0].getDay(); // Get the day of the week for the first day of the month
  }
</script>

<style>
  /* Define heatmap styles */


  .heatmap-cell {
    text-align: center;
    border: 1px solid #ccc;
    width: 30px; /* Same as grid-template-columns width */
    height: 30px; /* Same as grid-template-rows height */
    aspect-ratio: 1 / 1; /* Ensure aspect ratio is 1:1 for perfect squares */
  }

  .week-label {
    font-weight: bold;
  }
</style>

<div>
  <h2>{getMonthName(monthDates[0])}</h2>
  <table class="heatmap">
    <!-- <thead>
      <tr>
        {#each ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as day}
          <th class="week-label">{day}</th>
        {/each}
      </tr>
    </thead> -->
    <tbody>
      {#each [0, 1, 2, 3, 4, 5] as rowIndex}
        <tr>
          {#each [0, 1, 2, 3, 4, 5, 6] as colIndex}
            {#if monthDates[rowIndex * 7 + colIndex - getFirstDayIndex()]}
              <td class="heatmap-cell" style="background-color: {getColor(getContributionLevel(monthDates[rowIndex * 7 + colIndex - getFirstDayIndex()]))};"></td>
            {:else}
              <td></td>
            {/if}
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>