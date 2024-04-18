<template>
  <v-container style="max-width: 1200px; padding: 56px" class="mx-auto">
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Chat</v-card-title>
          <v-divider></v-divider>

          <v-card-text class="chat-messages">
            <div
              v-for="(message, index) in messages"
              :key="index"
              :class="{
                'message-user': message.author === 'Você',
                'message-bot': message.author === 'ZapServer',
              }"
              class="message-row"
            >
              <v-avatar size="32px" class="mr-2">
                <v-img :src="message.avatar"></v-img>
              </v-avatar>
              <div
                class="message-content"
                :style="{
                  backgroundColor:
                    message.author === 'Você' ? '#05445E' : '#546E7A',
                }"
              >
                {{ message.text }}
              </div>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="d-flex flex-wrap mt-3">
            <v-text-field
              v-model="newMessage"
              label="Digite uma mensagem"
              variant="outlined"
              dense
              @keyup.enter="sendMessage"
            ></v-text-field>
            <v-btn color="#05445E" @click="sendMessage">
              <v-icon>mdi-send</v-icon>
            </v-btn>
            <v-btn
              v-for="option in documentOptions"
              :key="option"
              color="#05445E"
              class="ml-2"
              @click="sendDocument(option)"
            >
              {{ option }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {
      newMessage: "",
      messages: [],
      documentOptions: [], 
    };
  },
  methods: {
    sendMessage() {
      if (!this.newMessage) return;
      this.messages.push({
        author: "Você",
        text: this.newMessage,
        avatar:
          "https://ui-avatars.com/api/?name=Eu&background=05445E&color=fff",
      });
      this.newMessage = "";
      this.automaticAnswer();
    },
    sendDocument(document) {
      this.messages.push({
        author: "Você",
        text: `Documento selecionado: ${document}`,
        avatar:
          "https://ui-avatars.com/api/?name=Eu&background=05445E&color=fff",
      });
      this.documentOptions = []; 
    },
    automaticAnswer() {
      if (this.messages.length === 0) return;
      const lastUserMessage = this.messages[this.messages.length - 1].text;
      let reply = "";

      if (lastUserMessage.includes("Documento")) {
        reply =
          "Iremos realizar sua coleta de dados. Por favor, selecione um documento:";
        this.documentOptions = [
          "RG Completo",
          "RG Frente",
          "CPF",
          "CNH",
          "COPASA",
          "CEMIG",
          "Certidão de Nascimento",
          "Certidão de Casamento",
        ];
      } else {
        reply =
          "Olá! Tudo bem? Para iniciar o processo digite o telefone(apenas números com DDD) do candidato, por favor. Para inserir seus documentos, digite Documentos";
      }

      setTimeout(() => {
        this.messages.push({
          author: "ZapServer",
          text: reply,
          avatar:
            "https://ui-avatars.com/api/?name=ZSr&background=546E7A&color=fff",
        });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.chat-messages {
  height: 400px;
  overflow-y: auto;
}
.message-row {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.message-user {
  justify-content: end;
}
.message-bot {
  justify-content: start;
}
.message-content {
  padding: 8px;
  border-radius: 5px;
  color: white;
  display: inline-block;
  max-width: 75%;
}
</style>
