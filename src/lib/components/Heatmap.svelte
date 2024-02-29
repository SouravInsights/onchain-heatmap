<script lang="ts">
  import HeatmapCell from './HeatmapCell.svelte';
  import HeatmapLegend from './HeatmapLegend.svelte';
  import HeatmapTooltip from './HeatmapTooltip.svelte';

  export let data: { date: Date; color: string }[] = []; // Your contribution data array

  const today = new Date();
  const currentYear = today.getFullYear();

  type DayOfYear = { date: Date; color: string };
  const allDaysOfYear: DayOfYear[] = [];

  for (let month = 0; month < 12; month++) {
    const daysInMonth = new Date(currentYear, month + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      allDaysOfYear.push({
        date: new Date(currentYear, month, day),
        color: '#eee' // Default color for days with no contributions
      });
    }
  }

  // Update colors from contributionData
  data.forEach(({ date, color }) => {
    const dateString = date.toDateString(); // Convert to string for comparison
    const dayIndex = allDaysOfYear.findIndex(day => day.date.toDateString() === dateString);
    if (dayIndex !== -1) {
      allDaysOfYear[dayIndex].color = color; // Update color if date matches
    }
  });

  let tooltipDate: Date | null = null;
  let tooltipContributions: number = 0;

  function handleMouseOver(date: Date) {
    tooltipDate = date;
    tooltipContributions = Math.floor(Math.random() * 10);
    console.log('mouse hover');
  }

  function handleMouseOut() {
    tooltipDate = null;
    tooltipContributions = 0;
    console.log('mouse out');
  }
</script>

<svg class="heatmap" viewBox="0 0 725 112">
  {#each allDaysOfYear as { date, color }}
    <HeatmapCell {date} color={color} on:mouseover={() => handleMouseOver(date)} on:mouseout={() => handleMouseOut()} />
  {/each}
</svg>

<HeatmapLegend legendItems={[{ color: '#ebedf0', text: 'No activity' }, /* Add more legend items as needed */]} />

{#if tooltipDate !== null}
  <HeatmapTooltip date={tooltipDate} contributions={tooltipContributions} />
{/if}

<style>
  .heatmap {
    width: 100%;
    height: auto;
    border: 1px solid #ccc;
  }
</style>
