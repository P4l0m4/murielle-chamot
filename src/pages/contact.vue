<template>
  <main>
    <div class="contact">
      <div class="contact__form">
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
        <div class="contact__info__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1383.0594176180614!2d5.976280658327958!3d46.1085389947785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDA2JzMwLjciTiA1wrA1OCczOC42IkU!5e0!3m2!1sfr!2sfr!4v1609347627391!5m2!1sfr!2sfr"
            frameborder="0"
            style="border: 0"
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.contact {
  font-size: 14px;

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  &__map {
  }
}
</style>
