<template>
  <div class="app-shell">
    <div class="blueprint-field" aria-hidden="true"></div>

    <AppHeader />

    <main class="app-main">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.app-shell {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.app-main {
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px), (max-height: 800px) {
  .app-shell {
    height: auto;
    min-height: 100vh;
    overflow: visible;
  }
}
</style>
