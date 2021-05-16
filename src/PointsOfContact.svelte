<script>
  import { PointsOfContactData } from "./store";
  import AddPointOfContact from "./modals/AddPointOfContact.svelte";

  let showModal = false;

  const showAddModal = () => {
    console.log("showing a modal");
  };

</script>

<h2>Points of Contact</h2>

<div class="listing">
  {#each $PointsOfContactData as contact}
    <div class="row">
      <div class="name">{contact.pocName}</div>
      <div class="email">{contact.email}</div>
      <div class="roles">{contact.roles}</div>
    </div>
  {/each}
</div>

<button on:click={() => (showModal = true)}>Add New Contact</button>

{#if showModal}
  <AddPointOfContact />
{/if}

<style>
  .row {
    display: grid;
    grid-template-columns: 3fr 2fr 5fr;
  }

  .row div {
    padding: 0.25rem;
    text-align: left;
  }

</style>
