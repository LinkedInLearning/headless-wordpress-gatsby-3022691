import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"

import * as styles from "./single.module.css"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Catlist from "../components/Catlist"
import PostNav from "../components/PostNav"

const Post = ({ data }) => {
  const post = data.currentPost
  const seoImageSrc = post.featuredImage
    ? getSrc(post.featuredImage.node.localFile)
    : `/logo.png`
  return (
    <Layout>
      <Seo
        title={post.title}
        image={seoImageSrc}
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
        <Catlist postObject={post} />
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
        <div>
          Tagged:{" "}
          {post.tags.nodes.map((tag, index) => [
            index > 0 && ", ",
            <Link key={index} to={tag.link}>
              {tag.name}
            </Link>,
          ])}
        </div>
      </article>
      <PostNav prevPost={data.prevPost} nextPost={data.nextPost} />
    </Layout>
  )
}

export default Post

export const query = graphql`
  query ($databaseId: Int!, $nextId: Int, $prevId: Int) {
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
      categories {
        nodes {
          link
          name
        }
      }
      tags {
        nodes {
          link
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
    nextPost: wpPost(databaseId: { eq: $nextId }) {
      title
      uri
    }
    prevPost: wpPost(databaseId: { eq: $prevId }) {
      title
      uri
    }
  }
`
