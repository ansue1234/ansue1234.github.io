import React from "react"
import { css } from "@emotion/react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PDFpg1 from "../files/ResumeF'2020_Page_1.jpg"
import PDFpg2 from "../files/ResumeF'2020_Page_2.jpg"

export default function Resume({ data }) {

    var pathPdf = null;

    
    for (var file of data.allFile.edges) {
        if (file.node.extension === "pdf") {
            pathPdf = file.node.publicURL;
        }
    }
    return (
        <div>
            <Layout>
                <h1>Resume</h1>
                <a href={pathPdf} download>If you like, click here to download my resume!</a>
            </Layout>
            <img src = {PDFpg1} alt="page 1" css={css`width:60rem; margin-left:9rem`}/>
            <img src = {PDFpg2} alt="page 2" css={css`width:60rem; margin-left:9rem`}/>
        </div>
        
    )
}

export const query = graphql`
  query {
    allFile(filter: {name: {eq: "ResumeFall2020"}}) {
        edges {
          node {
            publicURL
            extension
          }
        }
      }
  }
`
