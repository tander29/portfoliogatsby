import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <About />
    <Skills />
    <Projects />
    <About />
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/projects/">projects</Link>
    <br />
  </Layout>
)

export default IndexPage
