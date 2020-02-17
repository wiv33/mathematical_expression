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
            :open="open"
            :items="items"
            activatable
            item-key="id"
            open-on-click
          >
            <template v-slot:prepend="{ item, open }">
              <v-icon v-if="!item.file">
                {{ open ? "mdi-folder-open" : "mdi-folder" }}
              </v-icon>
              <v-icon v-else @click="changeSrc(item)">
                {{ files[item.file] }}
              </v-icon>
            </template>
          </v-treeview>
        </v-card-text>
      </v-col>
      <v-divider vertical></v-divider>
    </v-row>

    <v-divider></v-divider>
  </v-card>
</template>

<script>
import Constant from "../../assets/Constant";

export default {
  name: "NavigationComponent",
  data: () => ({
    open: ["수식"],
    isLoading: false,
    tree: [],
    types: [],
    categories: [],
    files: {
      html: 'mdi-language-html5',
      js: 'mdi-nodejs',
      json: 'mdi-json',
      md: 'mdi-markdown',
      pdf: 'mdi-file-pdf',
      png: 'mdi-file-image',
      txt: 'mdi-file-document-outline',
      xls: 'mdi-file-excel'
    }
  }),
  created() {
    this.fetch();
  },
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
    }
  },

  watch: {
    categories(val) {
      this.types = val
        .reduce((acc, cur) => {
          const type = cur.category;
          if (!acc.includes(type)) acc.push(type);
          return acc;
        }, [])
        .sort();
    }
  },

  methods: {
    fetch: function () {
      if (this.categories.length) return;

      this.axios
              .get("/navigationData.json")
              .then(res => (this.categories = res.data))
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
    },
    changeSrc: function(item) {
      this.$store.commit(Constant.CHANGE_SRC, item);
    }
  }
};
</script>

<style scoped></style>
