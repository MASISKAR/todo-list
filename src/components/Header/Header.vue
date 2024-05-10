<template>
  <header>
    <h1>Header</h1>
    <h1>Counter {{ counter }}</h1>
    <h3>{{ myMessage }}</h3>
    <h1>Task count: {{ tasksCount }}</h1>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/contact-us">Contact us</RouterLink>
    <RouterLink to="/about">About us</RouterLink>
  </header>
</template>

<script src="./header.js"></script>
