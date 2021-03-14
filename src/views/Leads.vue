<template>
<div class="leads">
  <div class="bg-gray-200 h-screen">
    <Header />

  <!-- for side nav -->
    <div class="flex" >
      <div class="w-50 bg-indigo-700  flex-none">
        <!-- <div>
          <img src="../assets/logoo.png" alt="" style="filter: brightness(0) inverted(1);"
          class="h-20 p-3">
        </div>  -->

        <!-- for nav -->
        <div class="space-y-3">
          <div>
            <!-- <button class="w-full"> -->
            <a href="/dashboard" class="items-center mt-5 px-8 space-x-5 justify-start lg:inline-flex lg:w-full px-3 py-2 rounded text-gray-400
              hover:text-white hover:bg-gray-900">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                <span>Dashboard</span>
              </a>
            <!-- </button> -->
          </div>
          <div>
            <a href="#" class="items-center px-8  space-x-5 justify-start lg:inline-flex lg:w-full px-3 py-2 rounded text-gray-400
              hover:text-white hover:bg-gray-900">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                <span class="">Leads</span>
              </a>
          </div>
          <div>
            <!-- <button class="w-full"> -->
            <a href="/prospects" class="items-center px-8 space-x-5 justify-start lg:inline-flex lg:w-full px-3 py-2 rounded text-gray-400
              hover:text-white hover:bg-gray-900">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Prospects</span>
              </a>
            <!-- </button> -->
          </div>
          <div>
            <!-- <button class="w-full"> -->
            <a href="/customers" class="items-center px-8 space-x-5 justify-start lg:inline-flex lg:w-full px-3 py-2 rounded text-gray-400
              hover:text-white hover:bg-gray-900">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Customers</span>
              </a>
            <!-- </button> -->
          </div>

          <!-- for profile  -->
          <div class="mt-3 w-full relative">
            <button @click="dropdown = true" class="flex items-center justify-start rounded w-full
            hover:text-white hover:bg-gray-500">
              <img src="../assets/female.svg" alt="profile picture"
              class="w-10 h-10 ml-4  mt-2 rounded-full border border-gray-700" >
              <div class="ml-6">
                <p class="text-sm font-bold leading-tight">Emily</p>
              </div>
              <svg class="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            <!-- for dropdown -->
            <div class="mt-10 absolute bottom-0 left-0 w-64 mb-16">
              <!-- <button v-if="dropdown === true" @click="dropdown = false" class="flex items-center justify-start rounded w-full
              hover:text-white hover:bg-gray-500">
                <img src="../assets/female.svg" alt="profile picture"
                class="w-10 h-10 ml-4  mt-2 rounded-full border border-gray-700" >
                <div class="ml-6">
                  <p class="text-sm font-bold leading-tight">Emily</p>
                </div>
                <svg class="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button> -->
  
              <button v-if="dropdown === true" @click="dropdown = false" class="w-full text-left hover:bg-gray-800 border-t
              border-gray-500 p-3 text-sm">
                Log-out
              </button>
            </div>

          </div>
        </div>

        
      </div>

      <!-- main content -->
      <div class="w-full bg-white  relative">
      

      </div>
    </div>

    <!-- footer or playbar -->
      <div class="w-full bg-yellow-400" style="height: 12vh">

      </div>

    
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>


<style>

</style>