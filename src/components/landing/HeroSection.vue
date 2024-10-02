<template>
  <div class="hero-section-container">
    <div id="hero" class="hero-section">
      <video autoplay loop muted>
        <source src="https://assets.html.nickmessing.com/background.webm" type="video/webm" />
      </video>
      <div class="content">
        <h1 class="glitch" data-glitch-content="Salut, eu sunt Nicolai Moraru, dezvoltator de software și DJ.">
          Salut, eu sunt Nicolai Moraru, dezvoltator de software și DJ.
        </h1>
        <p>Frontend, Backend, Muzică. Explorăm viitorul împreună.</p>
        <div class="sentences">
          <div class="sentence">
            Construiesc viitorul dezvoltării web prin contribuții la proiecte open-source influente.
          </div>
          <div class="sentence">
            Dinainte de a deveni popular, am modelat evoluția Vue.js și API-ul său de compoziție.
          </div>
          <div class="sentence">
            Explorarea științei și dedicarea totală sunt motoarele care mă împing mereu spre adâncimile necunoscutului.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section-container {
  --height-section-container: calc(20rem + var(--height-section));
  height: var(--height-section-container);
  view-timeline: --subjectReveal block;

  .hero-section {
    position: relative;
    width: 100dvw;
    animation-timeline: --subjectReveal;
    animation-name: keep-in-view;
    animation-range: contain 0% contain 100%;
    animation-duration: 1ms; /* Firefox requires this to apply the animation */
    animation-timing-function: linear;
    animation-fill-mode: both;
    height: var(--height-section);

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
        color: var(--color-soft-gray);
        font-size: 1rem;
        text-align: center;
      }

      > .sentences {
        display: flex;
        position: relative;
        width: 100%;
        height: 5rem;

        > .sentence {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          color: var(--color-white);
          font-size: 1rem;
          text-align: center;
          animation-timeline: --subjectReveal;
          animation-duration: 1ms; /* Firefox requires this to apply the animation */
          animation-timing-function: linear;
          animation-fill-mode: both;
          animation-name: sentence;

          &:nth-child(1) {
            animation-range: contain 0% contain 34%;
          }

          &:nth-child(2) {
            animation-range: contain 33% contain 67%;
          }

          &:nth-child(3) {
            animation-range: contain 66% contain 100%;
          }
        }
      }
    }
  }
}

@keyframes keep-in-view {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(calc(var(--height-section-container) - var(--height-section)));
  }
}

@keyframes sentence {
  0% {
    transform: translate(-50%, calc(-50% - 1rem));
    opacity: 0;
  }
  10% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  90% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, calc(-50% + 1rem));
    opacity: 0;
  }
}
</style>
