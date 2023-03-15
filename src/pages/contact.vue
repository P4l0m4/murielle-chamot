<template>
  <main class="contact">
    <CalendlyComponent />
    <div class="contact__form">
      <h2 class="contact__title">Me contacter</h2>
      <label class="" for="prenom">
        <input
          class="contact__form__prenom"
          type="text"
          id="prenom"
          placeholder="Votre prénom"
          name="prenom"
        />
      </label>

      <label class="" for="nom">
        <input
          type="text"
          class="contact__form__nom"
          id="nom"
          placeholder="Votre nom"
          name="nom"
        />
      </label>
      <label class="" for="telephone">
        <input
          class="contact__form__telephone"
          type="text"
          id="telephone"
          placeholder="Votre numéro de téléphone"
          name="telephone"
        />
      </label>

      <label class="" for="email">
        <input
          class="contact__form__email"
          type="email"
          id="email"
          placeholder="Votre email"
          name="mail"
        />
      </label>

      <label class="" for="message">
        <textarea
          class="contact__form__message"
          id="message"
          placeholder="Votre message"
          name="message"
        ></textarea>
      </label>
    </div>
    <div class="contact__info">
      <div class="contact__info__coordonnees">
        <p>730 Route de St Julien, 74520 Valleiry</p>
        <p>Tél : 06 13 10 17 45</p>
      </div>
    </div>

    <iframe
      class="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2766.052794322215!2d5.975977115453415!3d46.10985497911395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c80986db68cb9%3A0x105ec46440dff85c!2s730%20Rte%20de%20Saint-Julien%2C%2074520%20Valleiry!5e0!3m2!1sfr!2sfr!4v1678899735904!5m2!1sfr!2sfr"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </main>
</template>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__title {
    text-align: center;
    font-family: "Dancing Script", cursive;
  }

  &__prenom {
  }

  &__nom {
  }

  &__telephone {
  }
  &__email {
  }

  &__prestation {
  }

  &__coordonnees {
  }
}
.map {
  width: 100%;
  height: 300px;
  border: 0;
  padding: 0 1rem;
}
</style>
