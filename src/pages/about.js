import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Why I created this library.</h1>
    <p>I am mostly creating this library of reusable styled components to learn how to build Gatsby websites and to improve my React
         skills.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
