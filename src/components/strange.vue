<template>
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-hover v-slot="{hover}">
          <transition name="fade" mode="in-out">
          <v-btn
          v-if="hover"
          class=" primary--text"
          depressed
          block
          height="40"
          rounded
          v-ripple="false"
          v-bind="attrs"
          v-on="on"
          >
          <i class="fas fa-meh-rolling-eyes fa-2x "></i>
          </v-btn>
          <v-btn
          class=" primary--text"
          v-else
          depressed
          block
          height="40"
          rounded
          v-ripple="false"
          v-bind="attrs"
          v-on="on"
          >
          냈던 것 같은데···
          </v-btn>
          </transition>
          
        </v-hover>
        
      </template>
      <v-card class="rounded-xl" >
        <v-toolbar flat >
          <v-spacer></v-spacer>
          <v-toolbar-title
            class="toolbar-font primary--text"
          >L0P0</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
          <div class="pa-13">
            <h>과비 납부하지 않았지만 어차피 이번학기 명단에도 없음</h>
            <v-spacer></v-spacer>
            <v-row>
            <v-col>
            <strange></strange>
            <isgood0></isgood0>
            <gopay></gopay>
            </v-col></v-row></div>
      </v-card>
    </v-dialog>

</template>

<script>
import strange from "./strange.vue"
import isgood0 from "./isgood0.vue"
import gopay from "./gopay.vue"
  export default {
    components:{
      strange,
      isgood0,
      gopay,
    },
  }
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.v-btn{
  text-transform: none !important;
  font-family: 'CookieRun-Regular';
  font-style: normal;
}

.v-btn--outlined{
  border: 2px solid currentColor
}
.toolbar-font{
  font-family: 'CookieRunOTF-Bold';
  font-style: normal;
  font-size: 30px;
  margin-top: 70px;
}
.rotate{
    transform: rotate(360deg);
    transition: all 0.4s ease-in-out;
}
</style>