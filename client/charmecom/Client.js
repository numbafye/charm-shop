import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '6wrbtqnt',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-10-29',
})

export default client

