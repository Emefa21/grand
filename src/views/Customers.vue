<template>
<div class="customers">
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
            <a href="#" class="items-center px-8 space-x-5 justify-start lg:inline-flex lg:w-full px-3 py-2 rounded text-gray-400
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
      
      <!-- for datatable -->
          <!-- <div id="vue-root" class="bg-gray-500">
    <datatable :columns="columns" :data="rows"></datatable>
</div> -->

<div class="pl-8 capitalize text-lg pt-7 flex justify-end">
  <input class="focus:outline-none focus:ring focus:border-blue-300" type="text" id="myInput" onkeyup="myFunction()" placeholder="Search..">
</div>

<div class="flex justify-center pt-7">
  <table id="myTable" class="shadow-lg bg-white">
    <!-- <t-pagination
    :total-items="totalRows"
    :per-page="perPage"
    :limit="limit"
    :disabled="disabled"
    v-model="currentPage"
  /> -->

    <tr>
      <th class="bg-blue-100 border text-left px-8 py-4">Company</th>
      <th class="bg-blue-100 border text-left px-8 py-4">Contact</th>
      <th class="bg-blue-100 border text-left px-8 py-4">Country</th>
      <th class="bg-blue-100 border text-left px-8 py-4">State</th>
    </tr>
    <tr>
      <td class="border px-8 py-4">Alfreds Futterkiste</td>
      <td class="border px-8 py-4">Dante Sparks</td>
      <td class="border px-8 py-4">Italy</td>
      <td class="border px-8 py-4">Italy</td>
    </tr>
    <tr>
      <td class="border px-8 py-4">Centro comercial Moctezuma</td>
      <td class="border px-8 py-4">Neal Garrison</td>
      <td class="border px-8 py-4">Spain</td>
      <td class="border px-8 py-4">Italy</td>
    </tr>
    <tr>
      <td class="border px-8 py-4">Ernst Handel</td>
      <td class="border px-8 py-4">Maggie O'Neill</td>
      <td class="border px-8 py-4">Austria</td>
      <td class="border px-8 py-4">Italy</td>
    </tr>
    <tr>
      <td class="border px-8 py-4">Handel</td>
      <td class="border px-8 py-4">O'Neill</td>
      <td class="border px-8 py-4">Bustria</td>
      <td class="border px-8 py-4">Italy</td>
    </tr>
  </table>
</div>

<!-- 2nd table -->
<div class="bg-gray-100 text-gray-900 tracking-wider leading-normal">
  
      <!--Container-->
      <div class="container w-full md:w-4/5 xl:w-3/5  mx-auto px-2">
			<!--Card-->
			 <div id='recipients' class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
				
				<table id="example" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">
					<thead>
						<tr>
							<th data-priority="1">Name</th>
							<th data-priority="2">Position</th>
							<th data-priority="3">Office</th>
							<th data-priority="4">Age</th>
							<th data-priority="5">Start date</th>
							<th data-priority="6">Salary</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Tina May</td>
							<td>Coffee Manager</td>
							<td>Ljubljana</td>
							<td>61</td>
							<td>2011/04/25</td>
							<td>$320,800</td>
						</tr>
						
						<!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)-->
						
						<tr>
							<td>Donna Snider</td>
							<td>Customer Support</td>
							<td>New York</td>
							<td>27</td>
							<td>2011/01/25</td>
							<td>$112,000</td>
						</tr>
					</tbody>
					
				</table>
				
				
			</div>
			<!--/Card-->


      </div>
      <!--/container-->
   

</div>



      </div>
    </div>

    <!-- footer or playbar -->
      <div class="w-full bg-yellow-400" style="height: 12vh">

      </div>

    
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header
  }

  // methods: {
    // myFunction() {
  // Declare variables
  // var input, filter, table, tr, td, i, txtValue;
  // input = document.getElementById("myInput");
  // filter = input.value.toUpperCase();
  // table = document.getElementById("myTable");
  // tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }
  // }

  // for datatable
  // data: () => ({
  //   columns: [
  //           {label: 'id', field: 'id'},
  //           {label: 'Username', field: 'user.username', headerClass: 'class-in-header second-class'},
  //           {label: 'First Name', field: 'user.firstName'},
  //           {label: 'Last Name', field: 'user.lastName'},
  //           {label: 'Email', field: 'user.email'},
  //           {label: 'Address', representedAs: ({address, city, state}) => `${address}<br />${city}, ${state}`, interpolate: true}
  //       ],
  //       rows: [
  //           //...
            // {
            //     id: 1,
            //     user: {
            //         username: "dprice0",
            //         firstName: "Daniel",
            //         lastName: "Price",
            //         email: "dprice0@blogs.com"
            //     },
            //     address: "3 Toban Park",
            //     city: "Pocatello",
            //     state: "Idaho"
            // }
            //...
  //       ]
  // }),

//   methods: {
//     var $ = require( 'jquery' );
// require( 'datatables.net-buttons' )( window, $ );
//   }

  //styling datatable
  
}
</script>


<style>
/*Form fields*/
		.dataTables_wrapper select,
		.dataTables_wrapper .dataTables_filter input {
			color: #4a5568; 			/*text-gray-700*/
			padding-left: 1rem; 		/*pl-4*/
			padding-right: 1rem; 		/*pl-4*/
			padding-top: .5rem; 		/*pl-2*/
			padding-bottom: .5rem; 		/*pl-2*/
			line-height: 1.25; 			/*leading-tight*/
			border-width: 2px; 			/*border-2*/
			border-radius: .25rem; 		
			border-color: #edf2f7; 		/*border-gray-200*/
			background-color: #edf2f7; 	/*bg-gray-200*/
		}

		/*Row Hover*/
		table.dataTable.hover tbody tr:hover, table.dataTable.display tbody tr:hover {
			background-color: #ebf4ff;	/*bg-indigo-100*/
		}
		
		/*Pagination Buttons*/
		.dataTables_wrapper .dataTables_paginate .paginate_button		{
			font-weight: 700;				/*font-bold*/
			border-radius: .25rem;			/*rounded*/
			border: 1px solid transparent;	/*border border-transparent*/
		}
		
		/*Pagination Buttons - Current selected */
		.dataTables_wrapper .dataTables_paginate .paginate_button.current	{
			color: #fff !important;				/*text-white*/
			box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06); 	/*shadow*/
			font-weight: 700;					/*font-bold*/
			border-radius: .25rem;				/*rounded*/
			background: #667eea !important;		/*bg-indigo-500*/
			border: 1px solid transparent;		/*border border-transparent*/
		}

		/*Pagination Buttons - Hover */
		.dataTables_wrapper .dataTables_paginate .paginate_button:hover		{
			color: #fff !important;				/*text-white*/
			box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);	 /*shadow*/
			font-weight: 700;					/*font-bold*/
			border-radius: .25rem;				/*rounded*/
			background: #667eea !important;		/*bg-indigo-500*/
			border: 1px solid transparent;		/*border border-transparent*/
		}
		
		/*Add padding to bottom border */
		table.dataTable.no-footer {
			border-bottom: 1px solid #e2e8f0;	/*border-b-1 border-gray-300*/
			margin-top: 0.75em;
			margin-bottom: 0.75em;
		}
		
		/*Change colour of responsive icon*/
		table.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child:before, table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child:before {
			background-color: #667eea !important; /*bg-indigo-500*/
		}


</style>