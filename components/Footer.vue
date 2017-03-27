<template>
  <v-footer class="secondary white--text">
    <div class="row text-xs-center">
      <article class="flow-text px-2 col xs12 md6">
        Drupal is a <a :href="drupalTrademark" target="_blank" rel="nofollow">registered trademark</a> of <a :href="dries" target="_blank" rel="nofollow">Dries Buytaert</a>.
      </article>
      <article class="flow-text px-2 col xs12 md6">
        Help me add missing companies from the list in <a :href="github" target="_blank" rel="nofollow">Github</a>
      </article>
    </div>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      drupalTrademark: 'http://drupal.com/trademark',
      dries: 'http://buytaert.net',
      github: 'https://github.com/rajibmp/drupalers-finland'
     }
  }
}
</script>
