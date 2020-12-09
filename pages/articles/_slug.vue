<template>
  <div id="vuepress-theme-blog__post-layout">
    <article
      class="bb-container"
      itemscope
      itemtype="https://schema.org/BlogPosting"
    >
      <!-- ARTICLE HEADER -->
      <div class="row justify-content-center">
        <div class="col-span-12 lg:col-span-10">
          <div>
            <!-- Heading -->
            <h1 class="article-head no-top mb-0 pb-2" itemprop="name headline">
              {{ article.title }}
            </h1>

            <!-- Lead -->
            <p class="lead text-125 text-gray-600 font-semi-bold pt-5">
              {{ article.description }}
            </p>

            <!-- Avatar -->
            <avatar :article="article" />

            <!-- Tags -->
            {{ article.tags }}
          </div>

          <!-- IMAGE -->
          <img
            class="featured-image text-center my-8 py-0 w-full"
            :src="article.img"
          />

          <!-- CONTENT -->
          <nuxt-content :document="article" />
        </div>

        <!-- TOC -->
        <div class="hidden lg:block lg:col-span-2">
          <!-- <Newsletter />
            <Comment /> -->
          <toc />
          asdfasdf asdfasdf asdf asdf asdfasdf
          {{ article.toc }}
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    console.log('---- params', params) // eslint-disable-line no-console
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
}
</script>
