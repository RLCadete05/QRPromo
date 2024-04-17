<template>
  <v-navigation-drawer
    color="#05445E"
    absolute
    permanent
    expand-on-hover
    rail
  >
    <v-list>
      <v-list-item
        prepend-avatar="https://ui-avatars.com/api/?name=Administrator&background=465569&color=fff"
        title="Administrator"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item v-for="menu in menus" :key="menu.title" :to="menu.link">
        <v-list-item-icon>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ menu.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>


  </v-navigation-drawer>
</template>
<script>
export default {
  name: "MenuDefault",
  data() {
    return {
      menus: [
        { title: "Users", icon: "mdi-account", link: "/users" },
        { title: "Planos", icon: "mdi-format-list-bulleted", link: "/planos" },
        { title: "Combos", icon: "mdi-smart-card", link: "/combos" },
        { title: "Mensagens", icon: "mdi-chat", link: "/mensagens" },
        { title: "Tarefas", icon: "mdi-calendar-check", link: "/tarefas" },
        { title: "Promoções", icon: "mdi-sale", link: "/promocoes" },
      ],
    };
  },
};
</script>
