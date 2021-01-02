import React, {useState} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import PDFpg1 from "../files/ResumeF'2020_Page_1.jpg"
import PDFpg2 from "../files/ResumeF'2020_Page_2.jpg"

export default function Resume({ data }) {

    const [html, setHtml] = useState('');

    var pathPdf, pathHtml = null;

    
    for (var file of data.allFile.edges) {
        if (file.node.extension === "pdf") {
            pathPdf = file.node.publicURL;
        }
        if (file.node.extension === "html") {
            pathHtml = file.node.publicURL;
        }

    }
    fetch(pathHtml)
    .then(response => {
      return response.text()
    })
    .then(text => {
      setHtml(text)
    })
    console.log(ReactHtmlParser(html))
    return (
        <Layout>
            <h1>Resume</h1>
            <a href={pathPdf} download>If you like, click here to download my resume!</a>
            <img src = {PDFpg1}/>
            <img src = {PDFpg2}/>
        </Layout>
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
