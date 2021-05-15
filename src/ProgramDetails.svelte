<script>
  import { FormData } from "./store";
  import FormRow from "./FormRow.svelte";
  import FormLabel from "./FormLabel.svelte";
  import FormField from "./FormField.svelte";

  export let formData = {};
  FormData.subscribe(data => {
    formData = data;
  });

  // let commandName = 'some command name';
  let requestType = [];
  let network = '';
  let office = {
    location: '',
    status: '',
    phone: '',
    dsn: ''
  }
</script>

<div class="programDetails">
  <h2>Program Details</h2>

  <div class="debug">
    {requestType}
    {network}
    {JSON.stringify(office)}
    {JSON.stringify(formData)}
  </div>

  <FormRow>
    <FormLabel>Command/Program Name:</FormLabel>
    <FormField><input type="text" bind:value={formData.commandName}></FormField>
  </FormRow>

  <FormRow>
    <FormLabel>Request Type:</FormLabel>
    <FormField>
      <input type="checkbox" bind:group={requestType} value="SSO"> Single Sign-On
      <input type="checkbox" bind:group={requestType} value="LDAP"> LDAP
    </FormField>
  </FormRow>

  <FormRow>
    <FormLabel>Network:</FormLabel>
    <FormField>
      <input type="radio" bind:group={network} value="NIPR" /> NIPR
      <input type="radio" bind:group={network} value="SIPR" /> SIPR
    </FormField>
  </FormRow>

  <h2>Office Details</h2>

  <FormRow>
    <FormLabel>Office Location:</FormLabel>
    <FormField><input type="text" bind:value={office.location}></FormField>
  </FormRow>

  <FormRow>
    <FormLabel>Office Status:</FormLabel>
    <FormField>
      <select bind:value={office.status}>
        <option>Open</option>
        <option>Closed</option>
      </select>
    </FormField>
  </FormRow>

  <FormRow>
    <FormLabel>Office Telephone Number:</FormLabel>
    <FormField><input type="text" bind:value={office.phone}></FormField>
  </FormRow>

  <FormRow>
    <FormLabel>Office DSN:</FormLabel>
    <FormField><input type="text" bind:value={office.dsn}></FormField>
  </FormRow>
</div>

<style>
</style>