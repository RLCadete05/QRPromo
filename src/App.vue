<template>
  <v-app>
    <!-- <v-main>
      <DashboardPage />
    </v-main>  -->
    <MenuDefault v-if="$route.path !== '/'" />
    <v-container>
      <RouterView></RouterView>
    </v-container>
  </v-app>
</template>
