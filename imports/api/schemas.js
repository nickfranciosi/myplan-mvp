import SimpleSchema from 'simpl-schema';
const Schemas = {};

Schemas.Plan = new SimpleSchema({
    title: {
      type: String,
      label: "Title",
    },
    student: {
      type: String,
      label: "Student",
    },
    media: {
      type: String,
      label: "Media",
      optional: true,
    },
    description: {
      type: String,
      label: "Description",
      optional: true,
    },
    endDate: {
      type: Date,
      label: "End Date",
      optional: true
  },

});

export default Schemas;