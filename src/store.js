import { writable } from "svelte/store";

const defaultProgramDetails = {
  commandName: "some stored command name",
  requestType: [],
  network: "NIPR",
  office: {
    location: "",
    status: "",
    phone: "",
    dsn: "",
  },
};
export const ProgramDetailsData = writable(defaultProgramDetails);

// Other pages get their own states
let defaultPointsOfContact = [
  {
    pocName: "Allison Holt",
    email: "alholt@example.com",
    roles: ["requestor"],
    key: "allison-holt",
  },
  {
    pocName: "Matt Hudson",
    email: "mhudson@example.com",
    key: "matt-hudson",
  },
  {
    pocName: "Amy Black",
    email: "amyb@example.com",
    roles: ["government_poc"],
    key: "amy-black",
  },
  {
    pocName: "Elizabeth Harmon",
    email: "grandmaster@example.com",
    isAdmin: true,
    key: "beth-harmon",
  },
  {
    pocName: "Elizabeth Windsor",
    email: "hrh@example.com",
    isAdmin: true,
    key: "elizabeth-windsor",
  },
];

export const PointsOfContactData = writable(defaultPointsOfContact);
