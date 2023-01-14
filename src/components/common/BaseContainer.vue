<template>
  <div class="container"><slot></slot></div>
</template>

<style lang="scss">
.container {
  border-radius: 8px;
}

@media screen and (min-width: $breakpoint-xs-max) {
  .container {
    padding-inline: 2rem;
    padding-block-start: 2rem;
    padding-block-end: 1rem;
  }
}

@media screen and (max-width: $breakpoint-xs-max) {
  .container {
    padding-inline: 1rem;
    padding-block-start: 1.5rem;
    padding-block-end: 1rem;
  }
}
</style>
