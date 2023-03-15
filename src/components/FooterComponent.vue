<template>
  <footer class="footer">
    <p>
      Copyright © 2020-2022 SAS EMV Murielle Chamot - Tous droits réservés -
    </p>
    <div class="footer__link">
      <nuxt-link href="images/Mentions légales.pdf"
        >Mentions légales
      </nuxt-link>
      <nuxt-link href="#">Espace Administrateur </nuxt-link>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0rem;
  font-size: 13px;
  margin: 1.5em;

  &__link {
    text-decoration: none;
    display: flex;
    gap: 24px;
    color: $text-color-faded;
    transition: color 0.4s ease-in-out;
  }

  &__link:hover {
    color: $text-color;
  }
}
</style>
