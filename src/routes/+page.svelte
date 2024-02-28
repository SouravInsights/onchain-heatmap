<script>
  import Heatmap from '../lib/components/Heatmap.svelte';

  // Sample contributions data
  let contributions = [
    { date: '2024-02-01', level: 'low' },
    { date: '2024-02-02', level: 'medium' },
  ];
</script>

<Heatmap contributions={contributions} />