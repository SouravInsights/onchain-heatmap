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
    // Implement your color-coding logic based on the contribution level
    // Example:
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
    const dateString = date.toISOString().split('T')[0];
    const contribution = contributions.find((c: Contribution) => c.date === dateString);
    return contribution ? contribution.level : 'none';
  }

  // Function to get the name of the month
  function getMonthName(monthDate: Date): string {
    return monthDate.toLocaleString('default', { month: 'long' });
  }
</script>

<style>
  /* Define heatmap styles */
  .heatmap {
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  .week-label,
  .heatmap-cell {
    width: 20px;
    height: 20px;
    text-align: center;
    border: 1px solid #ccc;
  }

  .week-label {
    font-weight: bold;
  }
</style>

<div>
  <h2>{getMonthName(monthDates[0])}</h2>
  <table class="heatmap">
    <thead>
      <tr>
        {#each ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as day}
          <th class="week-label">{day}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      <tr>
        {#each monthDates as date}
          <td class="heatmap-cell" style="background-color: {getColor(getContributionLevel(date))};"></td>
        {/each}
      </tr>
    </tbody>
  </table>
</div>
