<template>
  <div class="container">
    <HeaderComponent />
    <main><slot /></main>
    <FooterComponent />
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 32px;
}
</style>
