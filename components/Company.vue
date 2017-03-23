<template>
  <article class="company">
    <header class="company-header">
      Company Name
    </header>
    <section class="company-body">
      <img src="">
    </section>
    <footer class="company-footer">
      Footer
    </footer>
  </article>
</template>

<script>
const YAML = require('yamljs')

 export default {
  data() {
    return {
      allCompanies: YAML.load('../data/companies.yml')
     }
   }
}
</script>
