export default {
  name: 'arriving-book',
  title: 'Arriving Book',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Name of the book',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the book',
    },
  ],
}
