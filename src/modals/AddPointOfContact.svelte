<script>
  import { Modal, ModalBody, ModalHeader, ModalFooter } from "sveltestrap";
  import { PointsOfContactData } from "../store";
  import FormRow from "../FormRow.svelte";
  import ToggleSwitch from "../ToggleSwitch.svelte";
  import MultiSelect from "../MultiSelect.svelte";

  let isOpen = true,
    contact = {
      pocName: "",
      email: "",
      phone: "",
      dsn: "",
      isAdministator: false,
      roles: [],
    };

  $: console.log(contact);
  $: console.log($PointsOfContactData);

  const toggle = () => {
    isOpen = !isOpen;
  };

  const addContact = () => {
    $PointsOfContactData = [contact, ...$PointsOfContactData];
  };

</script>

<Modal {isOpen} {toggle} size="lg">
  <ModalHeader {toggle}>Header</ModalHeader>

  <ModalBody>
    <FormRow label="Name">
      <input type="text" bind:value={contact.pocName} />
    </FormRow>

    <FormRow label="Email">
      <input type="text" bind:value={contact.email} />
    </FormRow>

    <FormRow label="Phone">
      <input type="text" bind:value={contact.phone} />
    </FormRow>

    <FormRow label="DSN">
      <input type="text" bind:value={contact.dsn} />
    </FormRow>

    <FormRow label="Administrator?">
      <ToggleSwitch bind:value={contact.isAdministator} />
    </FormRow>

    <FormRow label="Roles">
      <MultiSelect bind:value={contact.roles}>
        <option>Role 1</option>
        <option>Role 2</option>
        <option>Role 3</option>
        <option>Role 4</option>
      </MultiSelect>
    </FormRow>

    <button>Cancel</button>
    <button on:click={addContact}>Add Point of Contact</button>
  </ModalBody>

  <ModalFooter>Footer</ModalFooter>
</Modal>

<style></style>
