import { defineType, defineField } from "sanity";

export default defineType({
  name: "work",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
    }),
    defineField({
      name: "endDate",
      title: "End Date or Present",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "tasks",
      title: "Tasks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "description", title: "Task Description", type: "text" },
          ],
        },
      ],
      description: "List of tasks performed during the professional journey",
    }),
  ],
});
