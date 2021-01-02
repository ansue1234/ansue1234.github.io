import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReactMD from "react-markdown"

export default function About({ data }) {
  var contact = null;
  for (var n of data.allMarkdownRemark.edges) {
    if (n.node.frontmatter.title === "Contact") {
      contact = n.node;
    }
  }
  return (
    <Layout>
        <h1>{contact.frontmatter.title}</h1>
        <ReactMD>{contact.internal.content}</ReactMD>
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
          internal {
            content
          }
        }
      }
    }
  }
`
