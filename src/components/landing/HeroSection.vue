<template>
  <div id="hero" class="hero-section-container">
    <div class="hero-section">
      <video autoplay loop muted>
        <source src="https://assets.html.nickmessing.com/background.webm" type="video/webm" />
      </video>
      <div class="content">
        <div class="h1-container">
          <h1 class="glitch" data-glitch-content="Salut, eu sunt Nicolai Moraru, dezvoltator de software și DJ.">
            Salut, eu sunt Nicolai Moraru, dezvoltator de software și DJ.
          </h1>
        </div>
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
    <div v-for="dotIndex in 19" :key="dotIndex" :class="`dot-${dotIndex}`" class="dot" />
  </div>
</template>

<style scoped>
.hero-section-container {
  --height-section-container: calc(30rem + var(--height-section));
  position: relative;
  height: var(--height-section-container);
  view-timeline: --container-scroll-timeline block;

  > .dot {
    --dot-size: 0.5rem;
    --dot-color: var(--color-electric-blue);
    --dot-distance-top: 0px;
    --dot-distance-left: 0px;
    position: absolute;
    top: var(--dot-distance-top);
    left: var(--dot-distance-left);
    transform: translate(-50%, -50%);
    z-index: 3;
    animation: grow 3s infinite;
    animation-timing-function: ease-in-out;
    box-shadow: 0 0 var(--dot-size) var(--dot-color);
    border-radius: calc(var(--dot-size) * 0.5);
    background-color: var(--dot-color);
    width: var(--dot-size);
    height: var(--dot-size);

    &.dot-1 {
      --dot-distance-top: 5%;
      --dot-distance-left: 10%;
      --dot-color: var(--color-electric-blue);
    }

    &.dot-2 {
      --dot-distance-top: 10%;
      --dot-distance-left: 63%;
      --dot-color: var(--color-neon-green);
    }

    &.dot-3 {
      --dot-distance-top: 15%;
      --dot-distance-left: 40%;
      --dot-color: var(--color-magenta-glow);
    }

    &.dot-4 {
      --dot-distance-top: 20%;
      --dot-distance-left: 12%;
      --dot-color: var(--color-electric-blue);
    }

    &.dot-5 {
      --dot-distance-top: 25%;
      --dot-distance-left: 73%;
      --dot-color: var(--color-neon-green);
    }

    &.dot-6 {
      --dot-distance-top: 30%;
      --dot-distance-left: 30%;
      --dot-color: var(--color-magenta-glow);
    }

    &.dot-7 {
      --dot-distance-top: 35%;
      --dot-distance-left: 80%;
      --dot-color: var(--color-electric-blue);
    }

    &.dot-8 {
      --dot-distance-top: 40%;
      --dot-distance-left: 20%;
      --dot-color: var(--color-neon-green);
    }

    &.dot-9 {
      --dot-distance-top: 45%;
      --dot-distance-left: 70%;
      --dot-color: var(--color-magenta-glow);
    }

    &.dot-10 {
      --dot-distance-top: 50%;
      --dot-distance-left: 50%;
      --dot-color: var(--color-electric-blue);
    }

    &.dot-11 {
      --dot-distance-top: 55%;
      --dot-distance-left: 90%;
      --dot-color: var(--color-neon-green);
    }

    &.dot-12 {
      --dot-distance-top: 60%;
      --dot-distance-left: 10%;
      --dot-color: var(--color-magenta-glow);
    }

    &.dot-13 {
      --dot-distance-top: 65%;
      --dot-distance-left: 60%;
      --dot-color: var(--color-electric-blue);
    }

    &.dot-14 {
      --dot-distance-top: 70%;
      --dot-distance-left: 40%;
      --dot-color: var(--color-neon-green);
    }

    &.dot-15 {
      --dot-distance-top: 75%;
      --dot-distance-left: 80%;
      --dot-color: var(--color-magenta-glow);
    }

    &.dot-16 {
      --dot-distance-top: 80%;
      --dot-distance-left: 30%;
      --dot-color: var(--color-electric-blue);
    }

    &.dot-17 {
      --dot-distance-top: 85%;
      --dot-distance-left: 70%;
      --dot-color: var(--color-neon-green);
    }

    &.dot-18 {
      --dot-distance-top: 90%;
      --dot-distance-left: 50%;
      --dot-color: var(--color-magenta-glow);
    }

    &.dot-19 {
      --dot-distance-top: 95%;
      --dot-distance-left: 90%;
      --dot-color: var(--color-electric-blue);
    }
  }

  > .hero-section {
    position: relative;
    width: 100%;
    height: var(--height-section);
    animation-timeline: --container-scroll-timeline;
    animation-timing-function: linear;
    animation-fill-mode: both;
    animation-range: contain 0% contain 100%;
    animation-duration: 1ms; /* Firefox requires this to apply the animation */
    animation-name: keep-in-view;

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

      > .h1-container {
        animation-timeline: --container-scroll-timeline;
        animation-name: h1;
        animation-range: contain 0% contain 100%;
        animation-duration: 1ms; /* Firefox requires this to apply the animation */
        animation-timing-function: linear;
        animation-fill-mode: both;

        > h1 {
          color: var(--color-white);
          font-weight: bold;
          font-size: 2.25rem;
          line-height: 2.5rem;
          font-family: var(--font-family-display);
          text-align: center;
        }
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
          animation-timeline: --container-scroll-timeline;
          animation-duration: 1ms; /* Firefox requires this to apply the animation */
          animation-timing-function: linear;
          animation-fill-mode: both;
          animation-name: sentence;

          &:nth-child(1) {
            animation-range: contain 0% contain 40%;
          }

          &:nth-child(2) {
            animation-range: contain 30% contain 70%;
          }

          &:nth-child(3) {
            animation-range: contain 60% contain 100%;
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
    transform: translate(-50%, calc(-50% + 2rem));
    opacity: 0;
  }
  10% {
    transform: translate(-50%, -50% + 1rem);
    opacity: 1;
  }
  90% {
    transform: translate(-50%, -50% - 1rem);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, calc(-50% - 2rem));
    opacity: 0;
  }
}

@keyframes h1 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-3rem);
  }
}
</style>
