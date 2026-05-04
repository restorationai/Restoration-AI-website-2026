import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'sloj5um4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);

export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  seoTitle?: string;
  seoDescription?: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
  loomVideoUrl?: string;
  publishedAt?: string;
  body?: any;
};

export const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id, title, slug, seoTitle, seoDescription, publishedAt, mainImage
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id, title, slug, seoTitle, seoDescription, mainImage, loomVideoUrl, publishedAt, body
}`;
