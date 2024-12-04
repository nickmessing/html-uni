<template>
  <div class="contact-page">
    <h1>Date de contact</h1>

    <p>
      Email:
      <a href="mailto:ceo@nickmessing.com">ceo@nickmessing.com</a>
    </p>
    <p>
      Telefon:
      <a href="tel:+37378272059">+37378272059</a>
    </p>
  </div>
</template>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;
  width: 100%;
  height: var(--height-section);

  > h1 {
    color: var(--color-white);
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 2.5rem;
    text-align: center;
  }

  > p {
    color: var(--color-soft-gray);
    font-size: 1rem;
    text-align: center;

    > a {
      color: var(--color-white);
      text-decoration: none;
    }
  }
}
</style>
