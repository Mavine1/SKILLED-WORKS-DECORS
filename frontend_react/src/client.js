import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '4m1bn9c6',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
  token: 'sksBzMpMbZias290rdlN9Py3uSAmovxSrg8R5SWSBmszYNE4YQvxstr7gpFFyqfj8Q46LA10aMoMuMVENp9p7eCaQp5n2DhRfeUOWBQl65cd5jG1dSfeuZxkQbXBapeTJWrJ76NXx6Lur38bEvaNzDwPjMXT5drGb7lkjpYSaOWVyc4RCNbN',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
