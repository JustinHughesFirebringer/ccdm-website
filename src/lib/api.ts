import { gql } from '@apollo/client';
import client from './apollo-client';

export async function getAllPosts() {
  const query = gql`
    query AllPosts {
      posts {
        nodes {
          id
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const { data } = await client.query({ query });
  return data?.posts?.nodes;
}

export async function getPageBySlug(slug: string) {
  const query = gql`
    query PageBySlug($slug: ID!) {
      page(id: $slug, idType: URI) {
        id
        title
        content
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query,
    variables: { slug },
  });
  return data?.page;
}

export async function getAllServices() {
  const query = gql`
    query AllServices {
      services {
        nodes {
          id
          title
          slug
          excerpt
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  const { data } = await client.query({ query });
  return data?.services?.nodes;
}

export async function getPostBySlug(slug: string) {
  const query = gql`
    query PostBySlug($slug: ID!) {
      post(id: $slug, idType: URI) {
        id
        title
        content
        slug
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query,
    variables: { slug },
  });
  return data?.post;
}
