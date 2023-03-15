<template>
  <main>
    <div class="banner">
      <div class="banner__text">
        <ul class="banner__text__titles">
          <li class="banner__text__titles__title">Vitrerie</li>
          <li class="banner__text__titles__title">Miroiterie</li>
          <li class="banner__text__titles__title">Encadrement</li>
          <li class="banner__text__titles__title">Artisanal</li>
        </ul>
        <nuxt-link class="banner__text__link button" to="/"
          >Plus d'infos</nuxt-link
        >
      </div>
    </div>
    <div class="cards">
      <div class="cards__card">
        <div class="cards__card__text img1">
          <h5>
            ENCADREMENT ARTISANAL <br />
            ARTISAN D'ART
          </h5>
          <p>Je vous propose :</p>
          <ul>
            <li>Mes créations sur mesure</li>
            <li>Mise en valeur et personnalisation</li>
            <li>Montage des sujets</li>
            <li>Conservation</li>
            <li>Protection</li>
          </ul>
        </div>

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
  background-image: url("@/assets/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  width: 100%;
  height: 423px;
  display: flex;
  align-items: center;

  &__text {
    background-color: rgba($primary-color, $alpha: 0.8);
    backdrop-filter: blur(10px);
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-left: 4rem;
    justify-content: center;
    &__titles {
      &__title {
        font-family: $headings-font;
        font-size: 3.5rem;
        font-weight: bold;
        list-style: none;
      }
    }

    &__link {
      width: 200px;
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

    &__text {
      width: 399px;
      height: 399px;
      border-radius: 10px;
      padding: 1rem;
      h5 {
        text-align: center;
        font-weight: bold;
        font-size: 1.2rem;
        padding: 1rem 0;
      }
      p ul {
        line-height: 1em;
        text-align: left;
        font-size: 0.9rem;
      }
      ul {
        padding: 1rem;
      }
    }
  }

  &__img {
    width: 100%;
    border-radius: 10px;
  }

  &__link {
    width: 100%;
    margin: auto;
  }
}
.img1 {
  background-image: url(@/assets/valentine1.png);
}
</style>
