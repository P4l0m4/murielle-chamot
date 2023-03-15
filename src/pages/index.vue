<template>
  <main>
    <div class="banner">
      <div class="banner__text">
        <ul class="banner__leftcontent__titles">
          <li class="banner__leftcontent__titles__title">Vitrerie</li>
          <li class="banner__leftcontent__titles__title">Miroiterie</li>
          <li class="banner__leftcontent__titles__title">Encadrement</li>
          <li class="banner__leftcontent__titles__title">Artisanal</li>
        </ul>
        <nuxt-link class="banner__leftcontent__link button" to="/"
          >Plus d'infos</nuxt-link
        >
      </div>
    </div>
    <div class="cards">
      <div class="cards__card">
        <figure>
          <img class="cards__card__img" src="@/assets/valentine1.png" />
          <h5>
            ENCADREMENT ARTISANAL <br />
            ARTISAN D'ART
          </h5>
        </figure>
        <nuxt-link class="cards__card__link button" to="/"
          >En savoir plus</nuxt-link
        >
      </div>
      <div class="cards__card">
        <img class="cards__card__img" src="@/assets/artist2.png" />
        <nuxt-link class="cards__card__link button" to="/"
          >En savoir plus</nuxt-link
        >
      </div>
      <div class="cards__card">
        <img class="cards__card__img" src="@/assets/artist3.png" />
        <nuxt-link class="cards__card__link button" to="/"
          >En savoir plus</nuxt-link
        >
      </div>
      <div class="cards__card">
        <img class="cards__card__img" src="@/assets/artist4.png" />
        <nuxt-link class="cards__card__link button" to="/"
          >En savoir plus</nuxt-link
        >
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.banner {
  width: 100%;
  display: flex;
  padding: 1rem;

  &__leftcontent {
    width: 50%;
    padding-left: 3rem;
    &__titles {
      padding-bottom: 1rem;

      &__title {
        font-family: $headings-font;
        font-size: 3rem;
        line-height: 3.6rem;
        font-weight: bold;
        list-style: none;
      }
    }
  }

  &__rightcontent {
    margin: auto;
    width: 70%;
    height: 100%;
    &__img {
    }
  }
}
.cards {
  padding: 2rem;
  max-width: 100%;
  gap: 24px;
  display: flex;
  justify-content: space-between;

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    &__img {
      width: 100%;
      border-radius: 10px;
    }

    &__link {
      width: 100%;
      margin: auto;
    }
  }
}
</style>
