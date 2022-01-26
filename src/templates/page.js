import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "./page.module.css"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Page = ({ data }) => {
  const page = data.wpPage
  return (
    <Layout>
      <Seo
        title={page.title}
        image="/logo.png"
        pathname={page.uri}
        // Boolean indicating whether this is an article:
        article
      />
      <article className={styles.article}>
        {page.featuredImage && (
          <figure className={styles.featimg}>
            <GatsbyImage
              image={getImage(page.featuredImage.node.localFile)}
              alt={page.featuredImage.node.altText}
            />
          </figure>
        )}
        <h1>{page.title}</h1>
        by {page.author.node.name}. Published on{" "}
        {new Date(page.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </article>
    </Layout>
  )
}

export default Page

export const query = graphql`
  query ($databaseId: Int!) {
    wpPage(databaseId: { eq: $databaseId }) {
      title
      content
      uri
      author {
        node {
          name
        }
      }
      date
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1360
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`
