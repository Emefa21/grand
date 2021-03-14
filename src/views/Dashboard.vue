<template>
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
          <a href="#" class="items-center mt-5 px-8 space-x-5 justify-start lg:inline-flex lg:w-full px-3 py-2 rounded text-gray-400
             hover:text-white hover:bg-gray-900">
             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              <span>Dashboard</span>
            </a>
          <!-- </button> -->
        </div>
        <div>
          <a href="/leads" class="items-center px-8  space-x-5 justify-start lg:inline-flex lg:w-full px-3 py-2 rounded text-gray-400
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

      <!-- buttons -->
      <!-- <div class="mx-2">
        <button v-for="page in pages" v-bind:key="page._id" @click="setID = page.id"
        :class="`w-full font-semibold text-sm rounded px-3 py-2 flex items-center
        justify-start` 
        ${setID === page.id ? 'bg-blue-500' : 'text-gray-500'">
        <i class="material-icons mr-3">{{page.icon}}</i>
        <p> {{page.name}} </p>
        </button>
      </div> -->
    </div>

    <!-- main content -->
    <div class="w-full bg-white  relative">
      <!-- header -->
    <!-- <div class="w-full bg-red-300 top-0 p-2"> -->

      <!-- <div class="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5">
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
    </div> -->

    <!-- </div> -->

    <!-- main body for grid -->
    <div class="">
    <div class="w-full bg-gray-300 top-0 p-2">
    <div class="grid grid-cols-1 lg:grid-cols-4 mt-5 gap-3">
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
    </div>

    <!-- 2nd grid -->
    <!-- <div class="w-full bg-gray-300 top-0 p-2">
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
    </div> -->

    <!-- For graph/ -->
    <h2>Monthly reports</h2>
    <div class="chart-wrapper">
   <apexchart 
     width="500" type="bar" 
     :options="options" :series="series">
   </apexchart>  
  </div>

<hr>
  <!-- For graph/2 -->
  <h2>Monthly reports</h2>
    <div class="chart-wrapper">
   <apexchart 
     width="500" type="line" 
     :options="options" :series="series">
   </apexchart>  
  </div>

    </div>

    </div>
  </div>

  <!-- footer or playbar -->
    <div class="w-full bg-yellow-400" style="height: 12vh">

    </div>

  <!-- for buttons -->
  <!-- <div class="flex justify-around py-10 ">
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
    </div> -->

    <!-- for image and text shrink -->
    <!-- <div class="flex p-8">
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
    </div> -->

    <!-- for grid -->

    <!-- <div class="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5">
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
    </div> -->

    <!-- for form informations -->
    <!-- <div class="overflow-hidden bg-white shadow lg:rounded-lg">
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
    </div> -->

    <!-- for svgs / use her -->
    <!-- <div class="p-8">
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
    </div> -->

    <!-- for forms, you need to visit tailwind custom forms to npm install so you can
    easily tweak your desired css (tut 1:10) -->

  <!-- <div class="wrapper">
    
    <div class="card">
      <h1 class="font-bold text-6xl">Everybody</h1>
      <h2 class="text-3xl">Come lets Celebrate</h2>
    </div> 
  </div> -->
  </div>
</template>

<script>
// import ApexCharts from 'apexcharts'
import Header from "../components/Header";
export default {
  components: {
    Header
  },
  // data: function(){
  //   return {

  //     setID: 'home',

  //     dropdown: false
  //   }
  // },

  // for chart

data: () => ({
    options: {
      chart: {
        id: 'vuechart-example'
      },
      xaxis: {
        categories: [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Oct",
         "Nov",
         "Dec"
        ]
      },

      title: {
        text: 'Monthly Report',
        align: 'center',
        style: {
          fontSize: '20px'
        }
      }
    },
    series: [{
      name: 'series-1',
      data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139]
    }]
  })
  
}
</script>

<style>
/* .wrapper {
  @apply flex justify-center items-center h-screen
  text-emerald-500 bg-gray-50;
}

.card {
  @apply rounded-lg border border-emerald-300 bg-emerald-100 
  p-10 shadow-lg;
} */

/* .buttn {
  @apply relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5
        text-gray-700 transition duration-150 ease-in-out bg-white
        border border-gray-300 rounded-l-md hover:text-gray-500
        focus:outline-none;
} */

/* .text {
  @apply max-w-md mt-4 text-xs font-medium text-gray-600;
} */

/* for graph/chart  */
div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center
}
</style>