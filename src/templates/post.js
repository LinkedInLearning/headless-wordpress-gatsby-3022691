import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "./single.module.css"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Post = ({ data }) => {
  const post = data.currentPost
  return (
    <Layout>
      <Seo
        title={post.title}
        image="/logo.png"
        pathname={post.uri}
        // Boolean indicating whether this is an article:
        article
      />
      <article className={styles.article}>
        {post.featuredImage && (
          <figure className={styles.featimg}>
            <GatsbyImage
              image={getImage(post.featuredImage.node.localFile)}
              alt={post.featuredImage.node.altText}
            />
          </figure>
        )}
        <h1 className={styles.article__title}>{post.title}</h1>
        <div className={styles.article__meta}>
          by {post.author.node.name}. Published on{" "}
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div
          className={styles.article__content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query ($databaseId: Int!) {
    currentPost: wpPost(databaseId: { eq: $databaseId }) {
      date
      databaseId
      title
      content
      uri
      author {
        node {
          name
        }
      }
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
