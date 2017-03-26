<template>
  <v-row class="row-body">
    <v-card class="ma-4 company-card" v-for="company in allCompanies">
      <v-card-row class="cyan darken-2">
        <v-card-title>
          <span class="white--text">{{ company.Name}}</span>
          <v-spacer></v-spacer>
          <v-menu id="space" bottom left origin="top right" transition="v-scale-transition">
            <v-btn icon="icon" slot="activator" class="white--text">
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-item v-for="location in company.Locations">
                <v-list-tile>
                  <v-list-tile-title>{{ location }}</v-list-tile-title>
                </v-list-tile>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-title>
      </v-card-row>
      <v-card-row height="15em" :class="company.Background" class="company-logo">
        <img :src="company.Logo" :alt="company.Name" :title="company.Name" class="pa-2 company-logo-image">
      </v-card-row>
      <v-card-row actions class="blue-grey darken-2 mt-0">
        <v-spacer></v-spacer>
        <a :href="company.Website" target="_blank" rel="nofollow"><button flat class="white--text">{{ company.Website }}</button></a>
        <v-spacer></v-spacer>
      </v-card-row>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      allCompanies: _.orderBy(YAML.load('./data/companies.yml'), ['Name'], ['asc'])
     }
   }
}
</script>
