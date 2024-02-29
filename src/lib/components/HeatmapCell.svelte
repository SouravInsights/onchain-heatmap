<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { getWeekNumber, getDayOfWeek } from '../utils/index';
  
  export let date: Date;
  export let color: string = '#eee';
  
  const dispatch = createEventDispatcher();

  function handleMouseOver() {
    dispatch('mouseover', date);
  }

  function handleFocus() {
    dispatch('focus', date);
  }

  function handleMouseOut() {
    dispatch('mouseout');
  }

  function handleOnBlur() {
    dispatch('onblur');
  }


  const weekNumber: number = getWeekNumber(new Date(date));
  const dayOfWeek: number = getDayOfWeek(new Date(date));
</script>

<rect
  role="button"
  tabindex="0"
  x={(weekNumber - 1) * 12}
  y={dayOfWeek * 12}
  width="10"
  height="10"
  fill={color}
  id="{date.toISOString().split('T')[0]}"
  on:mouseover={handleMouseOver}
  on:focus={handleFocus}
  on:mouseout={handleMouseOut}
  on:blur={handleOnBlur}
/>
