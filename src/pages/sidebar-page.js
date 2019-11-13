import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import "../components/layout.css"


const SideBarPage = () => (
  <Layout>
    <SEO title="Home" />
   
    <div className="grid" style={{ display: `grid`, gridTemplateColumns: `22% auto`, }}>

    
    <section className="sideBar" style={{ float: `left`, marginRight: `1rem`, }}>
    <h1>Sidebar page</h1>
    </section>

    <div style={{ marginLeft: `1rem`, }}>

    <h2>This page has a sidebar component</h2>
    <p>This is a left sidebar. It is created using CSS grid and grid-template columns, and the float attribute. I can contain widgets, navigation, social icons, and an endless variety of content types.</p>
    
    <Link to="/about/">About this site</Link>

    </div>
    </div>

  </Layout>
)

export default SideBarPage
