import { createClient, type ClientConfig } from '@sanity/client';
// import { sanityConfig } from './sanityConfig';

// const client = createClient({
//   projectId: sanityConfig.projectId,
//   dataset: sanityConfig.dataset,
//   apiVersion: sanityConfig.apiVersion,
//   useCdn: sanityConfig.useCdn,
// });

const config: ClientConfig = {
  projectId: 's9x0wz9u',
  dataset: 'production',
  apiVersion: '2023-08-01',
  useCdn: true,
};
const client = createClient(config);

export default client;
