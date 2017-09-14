<template>
  <div class="ui container">
    <div class="ui segment">
      <div class="ui items">
        <div class="item" v-for="all in articles">
          <div class="image">
            <img src="http://ideasuccessnetwork.com/wp-content/uploads/2012/06/articles.gif">
          </div>
          <div class="content">
            <a class="header">{{all.title}}</a>
            <div class="meta">
              <span></span>
            </div>
            <div class="description">
              <p>{{all.content}}</p>
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
    ])
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
