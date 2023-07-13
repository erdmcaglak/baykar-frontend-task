<template>
  <router-view/>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
html,body{
  height: 100%;
  font-size: 10px;
  @media (min-width: 1025px) and (max-width: 1440px){
    font-size: 9px;
  }
  @media (min-width: 769px) and (max-width: 1024px){
    font-size: 8px;
  }
  @media (max-width: 768px) {
    font-size: 7px;
  }
}
</style>
