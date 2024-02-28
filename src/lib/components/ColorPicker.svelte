<script lang="ts">
  interface ColorOption {
    label: string;
    color: string;
  }

  export let colorOptions: ColorOption[] = [
    { label: 'Low', color: '#ccc' },
    { label: 'Medium', color: '#ff0' },
    { label: 'High', color: '#f00' },
  ];
  export let on: { change: (updatedColorOptions: ColorOption[]) => void };

  function handleColorChange(optionIndex: number, newColor: string): void {
    const updatedOptions = [...colorOptions];
    updatedOptions[optionIndex].color = newColor;
    colorOptions = updatedOptions;

    on.change(updatedOptions); // Emit change event with updated options
  }
</script>

<div class="color-picker">
  <h3>Color Picker</h3>
  <ul>
    {#each colorOptions as option, index}
      <li>
        <label for={`color-picker-${index}`}>{option.label}</label>
        <input
          type="color"
          id={`color-picker-${index}`}
          value={option.color}
          on:change={() => handleColorChange(index, event.target.value)}
        />
      </li>
    {/each}
  </ul>
</div>

<style>
  .color-picker {
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px; /* Adjust spacing as needed */
  }

  .color-picker h3 {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .color-picker li {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  .color-picker label {
    margin-right: 5px;
  }
</style>
