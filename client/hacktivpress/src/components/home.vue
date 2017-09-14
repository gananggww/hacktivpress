<template>
  <div class="ui container">
    <div class="ui segment">
      <div class="ui items">
        <div class="item" v-for="all in articles">
          <div class="image">
            <img src="/images/wireframe/image.png">
          </div>
          <div class="content">
            <a class="header">{{all.title}}</a>
            <div class="meta">
              <span></span>
            </div>
            <div class="description">
              <p></p>
            </div>
            <div class="extra">
              Additional Details
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  methods: {
    ...mapActions([
      'getArticles'
    ]),
    articles () {

    }
  },
  computed: {
    articles () {
      return this.$store.state.allArticles
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>

<style lang="css">
</style>
