const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: 's9x0wz9u',
    dataset: 'production',
    apiVersion: '2023-05-03',
    useCdn: true,
});

client.fetch('*[_type == "checklistItem"][0...1]').then((data) => {
    console.log('Sanity Fetch Result:', data);
}).catch((error) => {
    console.error('Sanity Fetch Error:', error);
});
