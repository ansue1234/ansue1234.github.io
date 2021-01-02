import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <h1>Hello</h1>
      <p>This site is under construction, please check back later!</p>
    </Layout>
  )
  
}

