<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <navigation-component></navigation-component>
        <v-list-item class="mt-4" link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >empty</v-list-item-title
          >
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >admin</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="red" dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-icon class="mx-4">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Mathematical expression</span>
      </v-toolbar-title>
      <v-spacer />
      <v-row align="center" style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="fas fa-search"
          color="white"
          hide-details
        />
        <i class=" fa-search"></i>
      </v-row>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavigationComponent from "./components/layout/NavigationComponent";
export default {
  components: { NavigationComponent },
  data: () => ({
    drawer: null,
    props: {
      source: String
    },
    categories: [
      { category: "함수", text: "empty" },
      { category: "미분", text: "최소제곱법" }
      // { text: 'Subscriptions' },
      // { text: 'History' },
      // { text: 'Playlists' },
      // { text: 'Watch Later' },
    ],
    items2: [
      { picture: 28, text: "Joseph" },
      { picture: 38, text: "Apple" },
      { picture: 48, text: "Xbox Ahoy" },
      { picture: 58, text: "Nokia" },
      { picture: 78, text: "MKBHD" }
    ]
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
