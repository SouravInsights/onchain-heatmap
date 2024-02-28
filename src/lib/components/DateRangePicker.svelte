<script lang="ts">
  interface DateRange {
    start: Date;
    end: Date;
  }

  export let initialDate: Date = new Date();
  export let selectedRange: DateRange = { start: initialDate, end: initialDate };
  export let on: { change: (selectedRange: DateRange) => void };
  

  function handleStartDateChange(newStartDate: Date): void {
    if (newStartDate > selectedRange.end) {
      selectedRange = { start: newStartDate, end: newStartDate };
    } else {
      selectedRange = { ...selectedRange, start: newStartDate };
    }
    on.change(selectedRange);
  }

  function handleEndDateChange(newEndDate: Date): void {
    if (newEndDate < selectedRange.start) {
      selectedRange = { start: newEndDate, end: newEndDate };
    } else {
      selectedRange = { ...selectedRange, end: newEndDate };
    }
    on.change(selectedRange);
  }
</script>

<div class="date-range-picker">
  <input type="date" value={selectedRange.start.toISOString().split('T')[0]} on:change={e => handleStartDateChange(new Date(e.target.value))} />
  <div class="separator">to</div>
  <input type="date" value={selectedRange.end.toISOString().split('T')[0]} on:change={e => handleEndDateChange(new Date(e.target.value))} />
</div>

<style>
  .date-range-picker {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
  }

  .separator {
    font-weight: bold;
  }
</style>