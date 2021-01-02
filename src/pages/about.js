import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReactMD from "react-markdown"

export default function About({ data }) {
  var about = null;
  for (var n of data.allMarkdownRemark.edges) {
    if (n.node.frontmatter.title === "About Me") {
      about = n.node;
    }
  }
  return (
    <Layout>
      <div>
        <h1>{about.frontmatter.title}</h1>
        <ReactMD>{about.internal.content}</ReactMD>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          headings {
            id
            value
            depth
          }
          internal {
            content
          }
        }
      }
    }
  }
`
