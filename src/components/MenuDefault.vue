<template>
  <v-navigation-drawer color="#05445E" absolute permanent expand-on-hover rail >
    <v-divider></v-divider>
    <v-list nav dense rounded>
      <v-list-item v-for="menu in menus" :key="menu.title" :to="menu.link">
        <v-list-item-icon>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ menu.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template #append>
      <v-list nav dense rounded>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-menu-open</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Fixar menu</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>
<script>

export default {
  name: "MenuDefault",
  data() {
    return {
      menus: [
        { title: "Promoções", icon: "mdi-qrcode-scan", link: "/promoções" },
        { title: "Empresas", icon: "mdi-domain", link: "/empresas" },
        { title: "Usuários", icon: "mdi-account", link: "/usuários" },
        { title: "Sair", icon: "mdi-exit", link:"/logout" }
      ],
    }
  },

 
}
</script>
