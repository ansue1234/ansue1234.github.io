import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Layout from "./layout"
import Toc from "./toc"

export default function Page({ data }) {
  const { body, frontmatter, tableOfContents } = data.mdx
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      {
        tableOfContents?.items && (
            <Toc items={tableOfContents.items}/>
        )
      }
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
      tableOfContents(maxDepth: 2)
      fields {
        slug
      }
    }
  }
`