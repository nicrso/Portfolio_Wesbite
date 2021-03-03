export default {
    name: 'artwork',
    title: 'Artwork',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: "order",
        title: "Order",
        type: "number",
        hidden: true,
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
      },
    },
  }
  