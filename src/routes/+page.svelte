<script>
  import Heatmap from '$lib/components/Heatmap.svelte';

  const contributionData = [
    { date: new Date('2024-03-02'), color: 'red' },
    { date: new Date('2024-03-07'), color: 'yellow' },
    // Add more contribution data as needed
  ];
</script>

<!-- <Heatmap /> -->
<Heatmap data={contributionData} />