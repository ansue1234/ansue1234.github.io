import { Chip } from '@material-ui/core'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Layout from "./layout"
import Toc from "./toc"
import {css} from '@emotion/react'

export default function Page({ data }) {
  const { body, frontmatter, tableOfContents} = data.mdx
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      {
        tableOfContents?.items && frontmatter.toc && (
            <Toc items={tableOfContents.items}/>
        )
      }
      {
        frontmatter.category ==='projects' && (
          <ul css = {css`
                      overflow-x: auto;
                      margin:auto
                      `}>
              {frontmatter.tags.map((tag)=>{
                  return(
                      <li id={tag}  key={tag} css={css`display: inline-block; margin: 0px`}>
                          <Chip key={tag} label={tag} css={css`margin: 3px`}/>
                      </li>
                  )
              })}
          </ul>
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
        toc
        category
        tags
      }
      body
      headings {
          depth
          value
      }
      tableOfContents(maxDepth: 2)
      fields {
        slug
      }
    }
  }
`