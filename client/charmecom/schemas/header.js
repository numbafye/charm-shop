//HEADER PRODUCT SCHEMA

export default {
  name: 'header',
  title: 'Header',
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
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },
  ],
}
