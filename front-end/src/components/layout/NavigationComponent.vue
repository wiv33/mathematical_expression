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
      txt: "mdi-file-document-outline"
    }
  }),
  created() {
    this.categories = [{
      "id": 1,
      "category": "함수",
      "name": "표현식",
      "src": "",
      "file": "txt"
    },{
      "id": 2,
      "category": "미분",
      "name": "최소제곱법",
      "src": "https://docs.google.com/document/d/e/2PACX-1vT_x9WS6keS0sGmYxp3sY6WrfUmeAzz0jfE-_3hlZlvtMEmBrxxF7fyHwnWppcfOULT4_0szq8DDKCt/pub?embedded=true",
      "file": "txt"
    },{
      "id": 3,
      "category": "미분",
      "name": "최급하강법",
      "src": "",
      "file": "txt"
    },{
      "id": 4,
      "category": "미분",
      "name": "다항식 회귀",
      "src": "",
      "file": "txt"
    },{
      "id": 5,
      "category": "미분",
      "name": "중회귀",
      "src": "",
      "file": "txt"
    },{
      "id": 6,
      "category": "미분",
      "name": "확률 경사하강법",
      "src": "",
      "file": "txt"
    }]
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
