<template>
  <v-card>
    <v-layout>
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
          <v-list-item
            prepend-icon="mdi-chat"
            title="Conversas"
            value="chat"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-qrcode-scan"
            title="Promoções"
            value="promotions"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-domain"
            title="Empresas"
            value="companies"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account"
            title="Usuários"
            value="users"
          ></v-list-item
          >
          <v-divider></v-divider>
          <v-list-item 
            prepend-icon="mdi-exit-to-app"
            title="Sair"
            value="exit"
          ></v-list-item>  
          <v-list-item
            prepend-icon="mdi-menu-open"
            title="Fixar Menu"
            value="exit"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh"></v-main>
    </v-layout>
  </v-card>
</template>
