<script>
  import Editor from "./Editor.svelte";
  import Stats from "./Stats.svelte";
</script>

<svelte:head>
  <title>Draft One v2304</title>
</svelte:head>

<main>
  <header>Draft One v2304</header>
  <div class="columns is-centered">
    <div class="column is-two-thirds">
      <h1>Hi there.</h1>
      <Stats />
      <Editor />
    </div>
  </div>
  <footer>footer go here</footer>
</main>

<style>
  header {
    height: 144px;
    background-color: antiquewhite;
    margin-bottom: 2rem;
  }

  main {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
