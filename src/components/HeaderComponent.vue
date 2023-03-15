<template>
  <header class="header">
    <img class="header__logo" src="@/assets/logo_valleiry.png" alt="" />
    <nav class="header__nav">
      <nuxt-link class="header__nav__link" to="/">Accueil</nuxt-link>
      <nuxt-link class="header__nav__link" to="/prestations"
        >Mes prestations</nuxt-link
      >
      <nuxt-link class="header__nav__link" to="/galerie"
        >Galerie photo</nuxt-link
      >
      <nuxt-link class="header__nav__link" to="/a-propos"
        >Qui suis-je ?</nuxt-link
      >
      <nuxt-link class="header__nav__link" to="/contact"
        >Me contacter</nuxt-link
      >
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 2rem;
  &__logo {
    width: 150px;
  }

  &__nav {
    display: flex;
    gap: 1.5rem;
    font-size: medium;

    &__link {
      text-decoration: none;
      color: $text-color-faded;
      transition: color 0.4s ease-in-out;
    }

    &__link:hover {
      color: $text-color;
    }
  }
}
</style>
