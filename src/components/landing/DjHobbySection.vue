<template>
  <div id="dj-hobby" class="dj-hobby-section">
    <iframe
      frameborder="0"
      height="400"
      src="https://player-widget.mixcloud.com/widget/iframe/?feed=%2FNiDee%2Fnick-messing-horizons-3%2F"
      width="90%"
    />
  </div>
</template>

<style scoped>
.dj-hobby-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-electric-blue);
  height: var(--height-section);

  iframe {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    border: 0;
    border-radius: 1rem;
  }
}
</style>
