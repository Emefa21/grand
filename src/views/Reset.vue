<template>
  <div class="reset bg-blue-200">
      <!-- <img src="../assets/bck4.jpeg" alt="" 
          class="fixed hidden lg:block inset-0 h-full w-full"
          style="z-index: -1"> -->

      <div class="w-screen h-screen flex flex-col justify-center items-center
      lg:grid lg:grid-cols-2">
        <img src="../assets/unlock1.svg" alt="" class="hidden lg:block
        w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto">

        <form class="flex flex-col justify-center items-center w-1/2">
          <img src="../assets/male.svg" alt="" class="w-32">
          <h2 class="my-8 font-display font-bold text-3xl 
          text-gray-700 text-center">Reset Password</h2>
          <p>Enter your your code and new password</p>
          
          <div class="relative mt-6">
            <svg class="w-6 h-6 absolute text-xl text-blue-900" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            <input type="text" placeholder="code" 
            class="pl-8 border-b-2 font-display capitalize text-lg
            focus:outline-none focus:border-blue-500
            transition-all duration-500">
          </div>
          
          <div class="relative mt-8">
            <svg class="w-6 h-6 absolute text-xl text-blue-900" 
            fill="none" stroke="currentColor" 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            <input type="password" placeholder="New password" 
            class="pl-8 border-b-2 font-display capitalize text-lg
            focus:outline-none focus:border-blue-500
            transition-all duration-500">
          </div>

          <a href="/" class="py-3 px-20 bg-blue-500 rounded-full
          font-bold uppercase text-lg text-white mt-4 transform 
          transition-all duration-500 hover:translate-y-1">Submit</a>
        </form>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>