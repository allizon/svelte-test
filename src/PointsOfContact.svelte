<script>
  import { Datatable, rows } from "svelte-simple-datatables";
  import { PointsOfContactData } from "./store";
  import AddPointOfContact from "./modals/AddPointOfContact.svelte";

  const settings = {
    sortable: true,
    pagination: false,
    columnFilter: false,
    rowPerPage: 10,
  };

  const showAddModal = () => {
    console.log("showing a modal");
  };
</script>

<h2>Points of Contact</h2>

<Datatable {settings} data={$PointsOfContactData}>
  <thead>
    <th data-key="pocName">Name</th>
    <th data-key="email">Email</th>
    <th data-key="isAdmin">Administrator?</th>
    <th>Roles</th>
  </thead>
  <tbody>
    {#each $rows as row}
      <tr>
        <td>{row.pocName}</td>
        <td>{row.email}</td>
        <td>{row.isAdmin}</td>
        <td>{row.roles}</td>
      </tr>
    {/each}
  </tbody>
</Datatable>

<div class="listing">
  {#each $PointsOfContactData as contact}
    <div class="row">
      <div class="name">{contact.pocName}</div>
      <div class="email">{contact.email}</div>
      <div class="roles">{contact.roles}</div>
    </div>
  {/each}
</div>

<button on:click={() => (showAddModal = true)}>Add New Contact</button>

{#if showAddModal}
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
