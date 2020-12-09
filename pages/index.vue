<template>
  <div class="bb-container">
    <div class="row">
      <div
        v-for="(aObj, aKey) in articles"
        :key="aKey"
        class="col-span-12 md:col-span-6 lg:col-span-4 elevation-2"
      >
        <nuxt-link
          class="text-gray-700 no-underline"
          :to="`/articles/${aObj.slug}`"
        >
          <img :src="aObj.img" :alt="aObj.title" />
          <div class="tags text-gray-600 text-75 m-0 px-4 py-3">tags</div>
          <div class="as-h4 m-0 px-4 py-0">{{ aObj.title }}</div>
          <div class="text-87 m-0 px-4 pt-0 pb-3">{{ aObj.description }}</div>
          <!-- <Avatar /> -->
          <div class="px-2">
            <avatar :article="aObj" />
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return { articles: null }
  },
  created() {
    this.getArticles()
    console.log('this', this) // eslint-disable-line no-console
  },
  methods: {
    getArticles() {
      this.$content('articles')
        .fetch()
        .then((articles) => {
          console.log('----- articles', articles) // eslint-disable-line no-console
          return (this.articles = articles)
        })
    },
  },
})
</script>
