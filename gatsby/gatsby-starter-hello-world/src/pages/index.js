import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import * as style from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={style.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in India.</p>
          <Link className={style.btn} to="/projects">My Portfolio Projects</Link>
        </div>
      </section>
    </Layout>
  )
}