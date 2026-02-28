export default {
  name: 'pet',
  title: 'Pets',
  type: 'document',
  fields: [
    { name: 'type', type: 'string', title: 'Type of pet' },
    { name: 'name', type: 'string', title: 'Pet Name' },
    {
      name: 'image',
      type: 'image',
      title: 'Photo',
      options: { hotspot: true },
      fields: [{
      name: 'alt',
      type: 'text',
      title: 'Alternative Text',
    }],
    },
    { name: 'sex', type: 'string', title: 'Sex' },
    { name: 'breed', type: 'string', title: 'Breed' },
    { name: 'age', type: 'string', title: 'Age (e.g., 2yrs)' },
    { name: 'location', type: 'string', title: 'Location' },
    { name: 'bio', type: 'text', title: 'Bio' },
  ]
}