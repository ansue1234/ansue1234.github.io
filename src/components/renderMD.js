import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Layout from "../components/layout"
import ReactMD from "react-markdown"

export default function RenderMD({ name }) {

    const data = useStaticQuery(graphql`
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
  `)

    var md = null;
    for (var n of data.allMarkdownRemark.edges) {
      if (n.node.frontmatter.title === name) {
        md = n.node;
      }
    }
    return (
        <div>
          <h1>{md.frontmatter.title}</h1>
          <ReactMD>{md.internal.content}</ReactMD>
        </div>
    )
  }
  