export default {
  name: 'product',
  title: 'Product',
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
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'metalFinish',
      title: 'Metal Finish',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'Gold', value: 'gold'},
              {title: 'Silver', value: 'silver'},
              {title: 'Rose Gold', value: 'roseGold'},
              {title: 'Gunmetal', value: 'gunmetal'},
              {title: 'Other', value: 'other'},
            ],
          },
        },
      ],
    },

    {
      name: 'theme',
      title: 'Theme',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'Nature', value: 'nature'},
              {title: 'Celestial', value: 'celestial'},
              {title: 'Barbie', value: 'barbie'},
              {title: 'Kawaii', value: 'kawaii'},
              {title: 'Holiday', value: 'holiday'},
              {title: 'Animals', value: 'animals'},
              {title: 'Hello Kitty', value: 'hello-kitty'},
              {title: 'Miscellanous', value: 'miscellanous'},
              {title: 'Dangle', value: 'dangle'},
              {title: 'Alphabet', value: 'alphabet'},
            ],
          },
        },
      ],
    },

    {
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          {title: 'Pixie', value: 'pixie'},
          {title: 'Small', value: 'small'},
          {title: 'Medium', value: 'medium'},
          {title: 'Large', value: 'large'},
          {title: 'XL', value: 'xl'},
        ],
      },
    },

    {
      name: 'gemstones',
      title: 'Gemstones',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'Clear', value: 'clear'},
              {title: 'AB', value: 'ab'},
              {title: 'Colored', value: 'colored'},
              {title: 'Opal', value: 'opal'},
              {title: 'Pearl', value: 'pearl'},
              {title: 'Swarovski', value: 'swarovski'},
              {title: 'Zircon', value: 'zircon'},
            ],
          },
        },
      ],
    },
    {
      name: 'color',
      title: 'Color',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'Red', value: 'red'},
              {title: 'Blue', value: 'blue'},
              {title: 'Green', value: 'green'},
              {title: 'Yellow', value: 'yellow'},
              {title: 'Orange', value: 'orange'},
              {title: 'Purple', value: 'purple'},
              {title: 'Pink', value: 'pink'},
              {title: 'Black', value: 'black'},
              {title: 'White', value: 'white'},
              {title: 'Grey', value: 'grey'},
              {title: 'Brown', value: 'brown'},
              {title: 'Beige', value: 'beige'},
              {title: 'Teal', value: 'teal'},
              {title: 'Navy', value: 'navy'},
              {title: 'Maroon', value: 'maroon'},
              {title: 'Gold', value: 'gold'},
              {title: 'Silver', value: 'silver'},
              {title: 'Bronze', value: 'bronze'},
              {title: 'Copper', value: 'copper'},
              {title: 'Transparent', value: 'transparent'},
            ],
          },
        },
      ],
    },
  ],
}
