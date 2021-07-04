<script>
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
  />
</svelte:head>

<main>
  <div class="container">
    <h1>Hi there.</h1>
    This is a new app. I'm testing Svelte. I know this whole dev/deployment thing
    works, but now I have to figure out what the hell to do with this.
  </div>
</main>

<style>
  .container {
    width: 1140px;
    margin: 0 auto;
  }

  .debug {
    padding: 2rem 0;
    font-family: monospace;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
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
