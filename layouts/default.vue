<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
    >
      <!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->

      <v-toolbar-title style="width: 350px">
        <a to="/" class="white--text" style="text-decoration: none"
          ><v-icon>mdi-headphones</v-icon>&nbsp;HeadGears</a
        >
      </v-toolbar-title>
      <v-spacer />
      <div v-if="$auth.isAuthenticated">
        You're logged in as {{ $auth.email }}
      </div>
      <div v-if="!$auth.isAuthenticated">
        <v-btn to="/login" icon>
          <v-icon>mdi-login</v-icon>
        </v-btn>
        <v-btn to="/signup" icon>
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
        <v-btn to="/cart" icon>
          <v-badge content="2" value="2" color="green" overlap>
            <v-icon>mdi-cart</v-icon>
          </v-badge>
          <!-- <v-badge content="2" value="2" color="green" overlap> -->
          <!-- </v-badge> -->
        </v-btn>
      </div>
      <div v-else>
        <v-btn icon @click="$store.dispatch('auth/logout')">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-account-check</v-icon>
        </v-btn>
        <v-btn to="/checkout" icon>
          <v-icon>mdi-credit-card-check-outline</v-icon>
        </v-btn>
        <v-btn to="/cart" icon>
          <!-- <v-badge content="2" value="2" color="green" overlap> -->
          <v-badge content="2" value="2" color="green" overlap>
            <v-icon>mdi-cart</v-icon>
          </v-badge>
          <!-- </v-badge> -->
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-bottom-navigation :value="activeBtn" color="primary" horizontal>
        <v-btn href="/" class="v-btn">
          <span>Home</span>
        </v-btn>
        <v-btn href="/shop" class="v-btn">
          <span>Shop</span>
        </v-btn>
        <v-btn href="/product" class="v-btn">
          <span>Product</span>
        </v-btn>
        <v-btn href="/blog" class="v-btn">
          <span>Blog</span>
        </v-btn>
      </v-bottom-navigation>
    </v-main>
    <router-view />
    <v-footer :padless="true">
      <v-card flat tile width="100%" class="secondary white--text text-center">
        <v-card-text>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-home</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-email</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-calendar</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-delete</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>HeadGears</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      activeBtn: 1,
    }
  },
  computed: {
    count() {
      return this.$store.getters['cart/cartItemCount']
    },
  },
}
</script>
