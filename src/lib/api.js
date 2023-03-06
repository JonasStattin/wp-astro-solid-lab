const API_URL = process.env.WP_URL || 'http://localhost:8000/graphql';

async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  const body = JSON.stringify({ query, variables });

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllPages() {
  const data = await fetchAPI(`
  {
    pages(first: 1000) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
  `);
  return data?.pages;
}

export async function getPageBySlug(slug) { 
  const data = await fetchAPI(`
    {
      page(id: "${slug}", idType: URI) {
        title
        content
        slug
        blocks {
          originalContent
          name
        }
      }
    }
  `);
  return data?.page;
}