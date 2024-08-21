import { defineType, defineField } from "sanity";

export default defineType({
  name: "certificates",
  title: "Certificates",
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
      name: "certificateLink",
      title: "Certificate Link",
      type: "url",
      description: "Link to view the certificate",
    }),
    defineField({
      name: "certificateFile",
      title: "Certificate File",
      type: "file",
    }),
  ],
});
