export const post = {
  name: 'post',
  title: 'Blog Post (AEO Optimized)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'seoTitle',
      title: 'SEO Meta Title',
      type: 'string',
      description: 'Used for search engines and Answer Engines. Include exact workflow keywords.',
    },
    {
      name: 'seoDescription',
      title: 'SEO Meta Description',
      type: 'text',
      description: 'A punchy summary that an AI crawler can use to summarize the workflow.',
    },
    {
      name: 'loomVideoUrl',
      title: 'Loom Video URL',
      type: 'url',
      description: 'Embed URL for the authentic, manual Loom demonstration.',
    },
    {
      name: 'mainImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for screen readers and SEO.',
        },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body Text',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Describe the image for screen readers and SEO.',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Optional caption shown below the image.',
            },
          ],
        },
      ],
    },
  ],
}
