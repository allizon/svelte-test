<script>
  import { ProgramDetailsData } from "./store";
  import FormRow from "./FormRow.svelte";
</script>

<div class="programDetails">
  <h2>Program Details</h2>

  <FormRow label="Program Name">
    <input type="text" bind:value={$ProgramDetailsData.commandName}>
  </FormRow>

  <FormRow label="Request Type">
    <input type="checkbox" bind:group={$ProgramDetailsData.requestType} value="SSO"> Single Sign-On
    <input type="checkbox" bind:group={$ProgramDetailsData.requestType} value="LDAP"> LDAP
  </FormRow>

  <FormRow label="Network">
    <input type="radio" bind:group={$ProgramDetailsData.network} value="NIPR" /> NIPR
    <input type="radio" bind:group={$ProgramDetailsData.network} value="SIPR" /> SIPR
  </FormRow>

  <h2>Office Details</h2>

  <FormRow label="Location">
    <input type="text" bind:value={$ProgramDetailsData.office.location}>
  </FormRow>

  <FormRow label="Status">
    <select bind:value={$ProgramDetailsData.office.status}>
      <option>Open</option>
      <option>Closed</option>
    </select>
  </FormRow>

  <FormRow label="Telephone Number">
    <input type="text" bind:value={$ProgramDetailsData.office.phone}>
  </FormRow>

  <FormRow label="DSN">
    <input type="text" bind:value={$ProgramDetailsData.office.dsn}>
  </FormRow>
</div>