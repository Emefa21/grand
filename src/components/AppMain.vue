<template>
<div class="bg-gray-500 h-screen">
  <Header />

<!-- for side nav -->
  <div class="flex" style="height: 82vh;">
    <div class="w-56 bg-gray-900 h-full flex-none">
    </div>

    <!-- main content -->
    <div class="w-full h-full relative">
      <!-- header -->
    <div class="w-full bg-red-300 top-0 p-2">

    </div>
    </div>

    

  </div>
  <!-- footer or playbar -->
    <div class="w-full bg-yellow-400" style="height: 12vh">

    </div>

  <!-- for buttons -->
  <div class="flex justify-around py-10 ">
      <div class="inline-flex rounded-md shadow-sm">
        <button type="button" class="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5
        text-gray-700 transition duration-150 ease-in-out bg-white
        border border-gray-300 rounded-l-md hover:text-gray-500
        focus:outline-none focus:border-blue-300">
          Years
        </button>

         <button type="button" class="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5
        text-gray-700 transition duration-150 ease-in-out bg-white
        border border-gray-300 hover:text-gray-500
        focus:outline-none focus:border-blue-300">
          Months
        </button>

         <button type="button" class="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5
        text-gray-700 transition duration-150 ease-in-out bg-white
        border border-gray-300 rounded-r-md hover:text-gray-500
        focus:outline-none focus:border-blue-300">
          Days
        </button>
    </div>
    </div>

    <!-- for image and text shrink -->
    <div class="flex p-8">
      <div class="flex-shrink-0">
        <img class="w-56 rounded-lg" src="../assets/dance.png" 
        alt="Happy dancers">
      </div>

      <div class="ml-6 max-w-md flex flex-col items-center">
        <div class="text-sm font-bold tracking-wide text-yellow-500 uppercase">
          Let's Chill
        </div>
        <a href="#" class="block mt-1 text-lg font-semibold leading-tight
        text-gray-900 hover:underline">
        We celebrate every occation with you</a>

        <p class="text">
          Creating nolstalgic moments is our mission on each unique celebration.
          Gracing your occation in style and in colours to make each memory a moment well lived.
        </p>
      </div>
    </div>

    <!-- for grid -->

    <div class="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5">
      <div class="overflow-hidden bg-white rounded-lg shadow">
        <div class="px-4 py-5 lg:p-6">
          <dl>
            <dt class="text-sm font-medium leading-5 text-gray-500 truncate">
              Total Subscribers
            </dt>
            <dd class="mt-1 text-3xl font-semibold leading-9 text-gray-900">
              400
            </dd>
          </dl>
        </div>
      </div>

      <div class="overflow-hidden bg-white rounded-lg shadow">
        <div class="px-4 py-5 lg:p-6">
          <dl>
            <dt class="text-sm font-medium leading-5 text-gray-500 truncate">
              Total Subscribers
            </dt>
            <dd class="mt-1 text-3xl font-semibold leading-9 text-gray-900">
              400
            </dd>
          </dl>
        </div>
      </div>

      <div class="overflow-hidden bg-white rounded-lg shadow">
        <div class="px-4 py-5 lg:p-6">
          <dl>
            <dt class="text-sm font-medium leading-5 text-gray-500 truncate">
              Total Subscribers
            </dt>
            <dd class="mt-1 text-3xl font-semibold leading-9 text-gray-900">
              400
            </dd>
          </dl>
        </div>
      </div>
    </div>

    <!-- for form informations -->
    <div class="overflow-hidden bg-white shadow lg:rounded-lg">
      <div class="px-4 py-5 border-b border-gray-200 lg:px-6">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          Applicant Information
        </h3>
        <p class="max-w-2xl mt-1 text-sm leading-5 text-gray-500">
          Personl details and application
        </p>
      </div>
      <div class="px-4 py-5 lg:p-0">
        <dl>
          <h3>Location</h3>
          <div class="lg:px-6 lg:py-5 lg:grid lg:grid-cols-3">
            <h3>Status</h3>
            <dt class="text-sm font-medium leading-5 text-gray-500">Home</dt>
            <dd class="mt-1 text-sm leading-5 text-gray-900">Alright</dd>
          </div>
        </dl>
      </div>
    </div>

    <!-- for svgs / use her -->
    <div class="p-8">
      <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
        Email
      </label>
      <div class="relative mt-1 rounded-md shadow-sm">
        <div class="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"></svg>
        </div>

        <input id="email" class="block w-full pl-10 placeholder-gray-400 form-input sm:text-sm
        sm:leading-5" placeholder="you@example.com">
      </div>
    </div>

    <!-- for forms, you need to visit tailwind custom forms to npm install so you can
    easily tweak your desired css (tut 1:10) -->

  <div class="wrapper">
    
    <div class="card">
      <h1 class="font-bold text-6xl">Everybody</h1>
      <h2 class="text-3xl">Come lets Celebrate</h2>
    </div> 
  </div>
  </div>
</template>

<script>
import Header from "../components/Header"
export default {
  components: {
    Header
  }
}
</script>

<style>
.wrapper {
  @apply flex justify-center items-center h-screen
  text-emerald-500 bg-gray-50;
}

.card {
  @apply rounded-lg border border-emerald-300 bg-emerald-100 
  p-10 shadow-lg;
}

/* .buttn {
  @apply relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5
        text-gray-700 transition duration-150 ease-in-out bg-white
        border border-gray-300 rounded-l-md hover:text-gray-500
        focus:outline-none;
} */

.text {
  @apply max-w-md mt-4 text-xs font-medium text-gray-600;
}

</style>