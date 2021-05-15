import { writable } from "svelte/store";

const defaultFormData = {
  commandName: 'some stored command name'
}

// Use default state?
export const FormData = writable(defaultFormData);