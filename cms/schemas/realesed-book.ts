export default {
  name: 'released-book',
  title: 'Released Book',
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
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Link to the book',
    },
  ],
}
