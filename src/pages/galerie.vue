<template>
  <main class="galerie">
    <img class="galerie__img" src="@/assets/galerie/tab1.png" alt="" />
    <img class="galerie__img" src="@/assets/galerie/tab2.png" alt="" />
    <img class="galerie__img" src="@/assets/galerie/tab3.png" alt="" />
    <img class="galerie__img" src="@/assets/galerie/tab4.jpg" alt="" />
    <img class="galerie__img" src="@/assets/galerie/tab5.jpg" alt="" />
    <img class="galerie__img" src="@/assets/galerie/tab6.jpg" alt="" />
    <img class="galerie__img" src="@/assets/galerie/tab7.jpg" alt="" />
    <img class="galerie__img" src="@/assets/galerie/tab8.jpg" alt="" />
    <img class="galerie__img" src="@/assets/galerie/tab10.jpg" alt="" />
    <img class="galerie__img" src="@/assets/galerie/tab13.jpg" alt="" />
    <img class="galerie__img" src="@/assets/galerie/tab14.jpg" alt="" />
    <img class="galerie__img" src="@/assets/galerie/tab15.jpg" alt="" />
    <img class="galerie__img" src="@/assets/galerie/tab17.jpg" alt="" />
    <img class="galerie__img" src="@/assets/galerie/tab18.jpg" alt="" />
    <img class="galerie__img" src="@/assets/galerie/tab19.jpg" alt="" />
  </main>
</template>
<style lang="scss" scoped>
.galerie {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  &__img {
    width: clamp(100px, 100%, 240px);
    object-fit: cover;
    transition: transform 0.3s ease, object-fit 0.3s ease;

    &:hover {
      transform: scale(1.6);
      cursor: pointer;
      object-fit: contain;
    }
  }
}
</style>
