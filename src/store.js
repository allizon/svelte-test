import { writable } from "svelte/store";

const defaultProgramDetails = {
  commandName: 'some stored command name',
  requestType: [],
  network: 'NIPR',
  office: {
    location: '',
    status: '',
    phone: '',
    dsn: ''
  }
}
export const ProgramDetailsData = writable(defaultProgramDetails);

// Other pages get their own states