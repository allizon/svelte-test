<script>
  import { ProgramDetailsData } from "./store";
  import ProgramDetails from "./ProgramDetails.svelte";
  import PointsOfContact from "./PointsOfContact.svelte";

  let activeTab = "pointsOfContact";

  $: programName = `PROGRAM: ${$ProgramDetailsData.commandName} (${$ProgramDetailsData.network})`;
  $: {
    console.log("-----");
    console.log($ProgramDetailsData);
  }

</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
  />
</svelte:head>

<main>
  <div class="container">
    <h1>{programName}</h1>

    <div>
      <a
        href="#"
        on:click|preventDefault={() => (activeTab = "programDetails")}
      >
        Program Details
      </a>
      <a
        href="#"
        on:click|preventDefault={() => (activeTab = "pointsOfContact")}
      >
        Points of Contact
      </a>
      <a
        href="#"
        on:click|preventDefault={() => (activeTab = "hostingDetails")}
      >
        Hosting Details
      </a>
    </div>

    {#if activeTab === "programDetails"}
      <ProgramDetails />
    {:else if activeTab === "pointsOfContact"}
      <PointsOfContact />
    {/if}
  </div>

  <div class="debug">
    {JSON.stringify($ProgramDetailsData)}
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
