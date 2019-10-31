<template>
  <a target="_blank" :href="href" class="link-item">
    <div class="link-time">[{{time | formatDate}}] </div>
    <div class="link-text">
      <slot/>
    </div>
  </a>
</template>

<script>
import { formatDate } from "~/filters";

export default {
  props: {
    href: String,
    time: String
  },
  filters: {
    formatDate
  }
};
</script>
<style scoped>

  .link-item {
    padding: 5px 10px;
    display: flex;
    line-height: 30px
  }

  .link-item:hover {
    background: var(--hoverBg)
  }

  .link-time {
    width: 113px;
  }

  .link-text {
    width: 787px;
  }

  @media screen and (max-width: 800px) {
      .link-item {
        display: block;
        border-bottom: 1px solid var(--hoverBg)
      }

      .link-text {
        width: auto;
      }

      .link-time {
        font-size: 12px
      }

    }
</style>
