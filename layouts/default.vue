<template>
  <div>
    <!-- HEADER -->
    <header
      class="bb-nav-bar fixed z-30 top-0 left-0 w-full bg-heron-500 border elevation-2 border-gray-200 border-solid m-0 px-0"
      aria-label="Enclosing"
    >
      <nav
        class="flex justify-between text-gray-900 font-bold font-defaultFont py-4 px-2 lg:px-8"
        aria-label="Main"
      >
        <nuxt-link to="/" class="no-underline">
          <span
            class="logo font-logoFont font-light relative tracking-widest subpixel-antialiased top-2"
          >
            /// SIMON MJ GARRETT ..:.<em>dev</em>:.::...//
          </span>
        </nuxt-link>
        <div>[search] links</div>
      </nav>
    </header>

    <!-- MAIN BODY -->
    <div class="bb-container pt-16 pb-16">
      <div class="row">
        <!-- LHS -->
        <div class="col-span-12 md:col-span-1"></div>

        <!-- Main article content -->
        <div class="col-span-12 md:col-span-9 px-2">
          <Nuxt class="page-content relative z-20" role="main" />
        </div>

        <!-- Popular posts -->
        <div class="col-span-12 md:col-start-11 md:col-span-2">
          <h3 class="relative top-3 pt-10 mb-0">Popular posts</h3>
          <ul class="no-top">
            <li v-for="(aObj, aKey) in articles" :key="aKey">
              <nuxt-link class="text-gray-700" :to="`/articles/${aObj.slug}`">
                {{ aObj.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <footer class="bb-container w-full bg-heron-500">
      <div class="row">
        <!-- LHS -->
        <div class="col-span-12 md:col-span-2"></div>

        <!-- Central footer -->
        <div
          class="col-span-12 md:col-span-8 text-gray-700 text-87 text-center font-light px-16"
        >
          <span class="relative top-4"
            >&copy; {{ new Date().getFullYear() }} -</span
          >
          <span
            class="relative top-4 logo font-logoFont font-light tracking-widest subpixel-antialiased"
          >
            SIMON MJ GARRETT
          </span>
        </div>

        <!-- RHS footer -->
        <div class="col-span-12 md:col-span-2"></div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
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
}
</script>

<style scoped>
.logo {
  text-shadow: -1px 0px -4px rgb(128 128 128 / 19%),
    1px 2px 4px rgb(192 192 192 / 18%);
}
</style>
