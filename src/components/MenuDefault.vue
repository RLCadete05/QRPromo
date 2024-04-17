<template>

    <div>
      <v-navigation-drawer
      style="height: 100vh"
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
            :to="{ name: 'Chat' }"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-qrcode-scan"
            title="Promoções"
            to="/promos"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-domain"
            title="Empresas"
            :to="{ name: 'Companies' }"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account"
            title="Usuários"
            :to="{ name: 'Users' }"
          ></v-list-item>
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

    </div>

</template>
