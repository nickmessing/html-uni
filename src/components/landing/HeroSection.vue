<template>
  <div id="hero" class="hero-section">
    <video autoplay loop muted>
      <source src="https://html-nm-assets.fra1.cdn.digitaloceanspaces.com/background.webm" type="video/webm" />
    </video>
    <div class="content">
      <h1 class="glitch" data-glitch-content="Salut, eu sunt Nicolai Moraru, dezvoltator de software și DJ.">
        Salut, eu sunt Nicolai Moraru, dezvoltator de software și DJ.
      </h1>
      <p>Frontend, Backend, Muzică. Explorăm viitorul împreună.</p>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  width: 100dvw;
  height: calc(100dvh - var(--height-header));

  > video {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > .content {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 2;
    backdrop-filter: blur(2px);
    background-color: hsla(0, 0%, 0%, 0.7);
    padding: 0 1rem;
    width: 100%;
    height: 100%;

    > h1 {
      color: var(--color-white);
      font-weight: bold;
      font-size: 2.25rem;
      line-height: 2.5rem;
      font-family: var(--font-family-display);
      text-align: center;
    }

    > p {
      color: var(--color-white);
      font-size: 1.25rem;
      text-align: center;
    }
  }
}
</style>
