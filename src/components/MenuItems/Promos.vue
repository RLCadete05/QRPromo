<template>
  <div style="max-width: 1200px; padding: 56px" class="mx-auto">
    <v-app-bar class="p-4" :elevation="0" color="#f0f3f8">
      <v-icon icon="mdi-qrcode-scan" class="ml-2 mr-2"></v-icon>
      <h1>Promoções</h1>
    </v-app-bar>

    <div class="d-flex justify-space-around">
      <v-spacer></v-spacer>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            class="text-none font-weight-regular"
            variant="plain"
            color="blue-darken-4"
            v-bind="props"
            density
          >
            Selecione
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div class="pa-4 text-center">
        <v-dialog v-model="dialog" max-width="700">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              class="text-none font-weight-regular"
              prepend-icon="mdi-plus"
              variant="plain"
              color="green-darken-1"
              text="CRIAR PPROMOÇÃO"
              v-bind="activatorProps"
            ></v-btn>
          </template>

          <v-card prepend-icon="mdi-account" title="Promoção">
            <v-card-text>
              <v-row dense>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="['Loja 1', 'Loja 2', 'Loja 3', 'Loja 4']"
                    label="Lojas"
                    auto-select-first
                    multiple
                    chips
                    color="#05445E"
                  ></v-autocomplete>
                </v-col>

                <v-col cols="12" md="4" sm="6">
                  <v-text-field label="Nome *" required></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6">
                  <v-text-field
                    hint="example of helper text only on focus"
                    label="Descrição *"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6">
                  <v-text-field
                    label="Código do Google Tag Manager"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" sm="6">
                  <v-text-field
                    label="Código do Facebook"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-container>
                    <v-file-input
                      v-model="selectedFile"
                      label="Imagem padrão da promoção *"
                      accept="image/*"
                      @change="onFileChange"
                    ></v-file-input>

                    <v-img
                      v-if="selectedFile"
                      :src="imageUrl"
                      width="300"
                    ></v-img>
                  </v-container>
                </v-col>
              </v-row>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                text="VOLTAR"
                variant="plain"
                @click="dialog = false"
              ></v-btn>

              <v-btn
                color="primary"
                text="SALVAR"
                variant="tonal"
                @click="dialog = false"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>

    <!-- <v-row style="background-color: #ffffff">
      <v-col>
        <v-container class="d-flex align-center flex-wrap-reverse">
          <v-card>
            <v-card-actions>
              <v-btn>
                ATIVAS <v-icon icon="mdi-help-circle-outline" end></v-icon
              ></v-btn>
              <v-btn>
                INATIVAS <v-icon icon="mdi-help-circle-outline" end></v-icon
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-col>
    </v-row> -->

    <v-card>
      <v-tabs v-model="tab" align-tabs="center" stacked>
        <v-tab value="tab-1">
          <v-icon>mdi-help-circle-outline</v-icon>
          ATIVAS
        </v-tab>

        <v-tab value="tab-2">
          <v-icon>mdi-help-circle-outline</v-icon>
          INATIVAS
        </v-tab>
      </v-tabs>

      <v-window v-model="tab" class="ml-3 mr-3 mt-3 mb-3">
        <v-window-item v-for="i in 3" :key="i" :value="'tab-' + i">
          <v-alert type="warning" variant="outlined" color="primary">
            {{ text }}
          </v-alert>
          <!-- <v-card>
            <v-card-text>{{ text }}</v-card-text>
          </v-card> -->
        </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Promos",
  data() {
    return {
      dialog: false,

      items: [{ title: "Mais antigos" }, { title: "Mais recentes" }],

      tab: null,
      text: "Nenhuma promoção ativa encontrada!",

      selectedFile: null,
      imageUrl: null,
    };
  },
  methods: {
    onFileChange(event) {
      // Captura o arquivo selecionado pelo usuário
      const file = event.target.files[0];

      // Atualiza a visualização da imagem
      if (file) {
        this.imageUrl = URL.createObjectURL(file);
      }
    },
  },
};
</script>

<style>
body {
  background-color: #f0f3f8 !important;
}
</style>
