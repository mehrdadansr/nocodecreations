import type { InstantRules } from "@instantdb/react";

const rules = {
  contacts: {
    allow: {
      create: "true",
    },
  },
  quotes: {
    allow: {
      create: "true",
    },
  },
} satisfies InstantRules;

export default rules;
