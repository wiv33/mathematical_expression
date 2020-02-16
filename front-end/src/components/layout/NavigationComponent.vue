<template>
  <v-card>
    <v-toolbar color="dark" dark flat>
      <v-toolbar-title>수식</v-toolbar-title>
    </v-toolbar>

    <v-row>
      <v-col>
        <v-card-text>
          <v-treeview
            v-model="tree"
            :load-children="fetch"
            :items="items"
            selected-color="indigo"
            open-on-click
            return-object
            selectable
            expand-icon="mdi-chevron-down"
            on-icon="mdi-bookmark"
            off-icon="mdi-bookmark-outline"
            indeterminate-icon="mdi-bookmark-minus"
          >
          </v-treeview>
        </v-card-text>
      </v-col>
      <v-divider vertical></v-divider>
    </v-row>

    <v-divider></v-divider>
  </v-card>
</template>

<script>
export default {
  name: "NavigationComponent",
  data: () => ({
    breweries: [],
    isLoading: false,
    tree: [],
    types: [],
    categories: []
  }),

  computed: {
    items() {
      const children = this.types.map(type => ({
        id: type,
        name: this.getName(type),
        children: this.getChildren(type)
      }));

      return [
        {
          id: 1,
          name: "수식",
          children
        }
      ];
    },
    shouldShowTree() {
      return this.breweries.length > 0 && !this.isLoading;
    }
  },

  watch: {
    breweries(val) {
      this.types = val
        .reduce((acc, cur) => {
          const type = cur.category;
          if (!acc.includes(type)) acc.push(type);
          return acc;
        }, [])
        .sort();
    },
    categories(val) {
      this.types = val
              .reduce((acc, cur) => {
                const type = cur.category;
                console.log(acc)
                if (!acc.includes(type)) acc.push(type);
                return acc;
              }, [])
              .sort();
    }
  },

  methods: {
    fetch() {
      if (this.categories.length) return;

      fetch("/navigationData.json")
              .then(res => res.json())
              .then(res => (this.categories = res))
              .catch(err => console.log(err));
    },
    getChildren(type) {
      const categories = [];

      for (const item of this.categories) {
        if (item.category !== type) continue;

        categories.push({
          ...item,
          name: this.getName(item.name)
        });
      }
      return categories.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
    },
    getName(name) {
      return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
    }
  }
};
</script>

<style scoped></style>
