<script lang='ts'>
  export let date: Date;
  export let contributions: number;
</script>

<div class="tooltip">
  <p>Date: {date.toDateString()}</p>
  <p>Contributions: {contributions}</p>
</div>

<style>
  .tooltip {
    position: absolute;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>