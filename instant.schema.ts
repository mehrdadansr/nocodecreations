import { i } from "@instantdb/react";

const _schema = i.schema({
  entities: {
    $users: i.entity({
      email: i.string().unique().indexed(),
    }),
    contacts: i.entity({
      name: i.string(),
      email: i.string(),
      phone: i.string().optional(),
      company: i.string().optional(),
      message: i.string(),
      createdAt: i.number(),
    }),
    quotes: i.entity({
      projectType: i.string(),
      services: i.string(),
      budget: i.string(),
      timeline: i.string(),
      name: i.string(),
      email: i.string(),
      phone: i.string().optional(),
      company: i.string().optional(),
      description: i.string().optional(),
      createdAt: i.number(),
    }),
  },
});

type _AppSchema = typeof _schema;
interface AppSchema extends _AppSchema {}
const schema: AppSchema = _schema;

export type { AppSchema };
export default schema;
