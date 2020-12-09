<template>
  <div class="avatar flex">
    <img
      class="rounded-full w-8 h-8 m-2"
      :src="require(`~/assets/img/${article.author.img}`)"
      alt="Author"
    />
    <div class="info relative -top-1 my-2 pt-0 text-75">
      <div class="text-gray-600 font-bold">{{ article.author.name }}</div>
      <div v-if="article.createdAt" class="text-gray-600">
        {{ $formatDate(article.createdAt) }}
      </div>
    </div>

    <!-- TODO - follow links or some other CTA -->
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => {
        return {
          createdAt: null,
          author: {
            img: '',
            name: '',
          },
        }
      },
    },
  },
}
</script>
