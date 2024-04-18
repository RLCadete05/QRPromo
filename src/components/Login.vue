<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-container style="max-width: 470px" justify="center" align="center">
      <v-img
        :width="150"
        class="mx-auto mt-1 mb-4"
        aspect-ratio="16/9"
        cover
        src="../assets/logo.svg"
      ></v-img>
      <v-form fast-fail>
        <v-text-field v-model="email" label="E-mail"></v-text-field>
  
        <v-text-field
          v-model="password"
          :type="visible ? 'text' : 'password'"
          :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
          label="Senha"
          hide-details
          @click:append="visible = !visible"
        ></v-text-field>
  
        <v-btn class="mt-4" color="#05445E" to="/promos"
          ><v-icon class="mr-1">mdi-email</v-icon> Entrar</v-btn
        >
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    data: () => ({
      email: "",
      password: "",
      visible: false,
    }),
  };
  </script>