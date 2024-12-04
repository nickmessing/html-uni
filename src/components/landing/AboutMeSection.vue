<template>
  <div id="about-me" class="about-me-section">
    <div class="animation">
      <div class="image-container ts">
        <img alt="Typescript" src="/src/assets/images/ts.svg" />
      </div>
      <div class="image-container js">
        <img alt="Javascript" src="/src/assets/images/js.svg" />
      </div>
      <div class="image-container vue">
        <img alt="Vue.js" src="/src/assets/images/vue.svg" />
      </div>
    </div>
    <div class="sections">
      <div class="section">
        <h2>Nume</h2>
        <p>Nicolai Moraru</p>
      </div>
      <div class="section">
        <h2>Locație</h2>
        <p>Chișinău, Republica Moldova</p>
      </div>
      <div class="section">
        <h2>Realizări (github)</h2>
        <ul>
          <li>
            <a href="https://github.com/nickmessing?achievement=mars-2020-contributor&tab=achievements">
              Mars 2020 Contributor
            </a>
          </li>
          <li>
            <a href="https://github.com/nickmessing?achievement=arctic-code-vault-contributor&tab=achievements">
              Arctic Code Vault Contributor
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
@property --rotate {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: true;
}

.about-me-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  height: var(--height-section);

  .animation {
    position: relative;
    width: 100%;
    height: 20rem;

    .image-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(var(--rotate));
      height: 15rem;

      &.ts {
        animation: rotate-1 6s infinite linear;
      }
      &.js {
        animation: rotate-1 6s infinite linear;
        animation-delay: -4s;
      }
      &.vue {
        animation: rotate-1 6s infinite linear;
        animation-delay: -2s;
      }

      img {
        transform: rotate(calc(var(--rotate) * -1));
        width: 4rem;
        height: 4rem;
      }
    }
  }

  .sections {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    padding: 0 2rem;
    .section {
      display: flex;
      flex-direction: column;

      h2 {
        color: var(--color-white);
        font-weight: bold;
        font-size: 1.5rem;
      }

      p {
        color: var(--color-soft-gray);
        font-size: 1rem;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;

        li {
          a {
            color: var(--color-white);
            font-size: 1rem;
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    padding: 0 2rem;
    height: 100%;

    .animation {
      width: 20rem;
      height: 100%;
    }
  }
}

@keyframes rotate-1 {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}
</style>
