<template>
  <div id="header">
    <div id="nav">
      <nav class="flex items-center bg-purple-900 p-3 flex-wrap">
        <!-- <a href="#" class="p-2 mr-4 inline-flex items-center"> -->
        <a href="#" class="block h-8 w-8 rounded-full overflow-hidden border-2
        border-white focus:outline-none focus:border-emerald-300">
          <!-- <img src="../assets/events.png" alt="" 
          class="fill-current h-8 w-8 mr-2"> -->
          <img src="../assets/events.png" alt="" 
          class="h-full w-full object-cover">
          <span class="text-xl text-white font-bold uppercase tracking-wide">
          Let's Chill
        </span>
        </a>
        <button class="text-white inline-flex p-3 hover:bg-gray-900
         rounded lg:hidden ml-auto nav-toggler" 
         @click="toggleActive" :class="{
           'active': active
         }">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>

        <div class=" hidden top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto"
        id="navigation">
          <div class="lg:inline-flex lg:flex-row lg:ml-auto">
            <!-- to select to make changes, select and press cntrl+d -->
            <a href="#" class="lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400
             hover:text-white hover:bg-gray-900">
              <span>Home</span>
            </a>
            <a href="#" class="lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 
            hover:text-white hover:bg-gray-900">
              <span>About</span>
            </a>
            <a href="#" class="lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 
            hover:text-white hover:bg-gray-900">
              <span>Contact</span>
            </a>
            <a href="#" class="lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 
            hover:text-white hover:bg-gray-900">
              <span>Catalogue</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {

  // data() {
  //   props: {
  //     type: Boolean,
  //     required: true,
  //     default: false
  //   }
  // },

  // methods: {
  //   toggleActive() {
  //     this.active = !this.active
  //     this.$emit(Event: 'toggle-menu')
  //   }
  // }

  // methods: {
  //   $() {
  //     $(".nav-toggler").each(function (_, navToggler) {
  //       var target = $(navToggler).data("target");
  //       $(navToggler).on("click", function () {
  //         $(target).animate({
  //           height: "toggle"
  //         })
  //       })
  //     })
  //   }
  // }

}
</script>

<style>

</style>