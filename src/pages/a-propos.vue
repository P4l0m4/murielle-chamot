<template>
  <main>
    <div class="a-propos">
      <div class="a-propos__container">
        <h2 class="a-propos__title">Qui suis-je ?</h2>
        <p class="a-propos__text1">
          Licencié en SES mention gestion d’entreprise, c’est à 37 ans, alors
          directrice de magasin, que le besoin de revenir à mes sources s’est
          manifesté, et que j’ai décidé d’intégrer la petite entreprise
          familiale afin de la reprendre.
        </p>
        <p class="a-propos__text2">
          Ayant baigné dans cet artisanat depuis ma plus tendre enfance, il me
          tient, alors, à cœur d’apprendre et de maitriser les techniques
          d’encadrement, de vitrerie et de miroiterie afin de faire perdurer ces
          savoirs-faires en voie de disparition et c’est sous l’œil avisé de mon
          père que je vais faire mon apprentissage.
        </p>

        <button class="a-propos__button" href="">Contacter Murielle</button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.a-propos {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  &__container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  &__title {
    font-family: "Dancing Script", cursive;
  }

  &__text1 {
  }

  &__text2 {
  }
}
</style>
