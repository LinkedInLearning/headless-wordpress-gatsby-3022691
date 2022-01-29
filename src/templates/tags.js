import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "./single.module.css"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Catlist from "../components/Catlist"
import Pagination from "../components/Pagination"

const TagIndex = ({ data, pageContext }) => {
  const { tagName } = pageContext
  const posts = data.allWpPost.nodes
  return (
    <Layout>
      <Seo title={`Tag: ${tagName}`} />
      <section className={styles.articlelist}>
        <h1>Tag: {tagName}</h1>
        {posts.map((post, index) => (
          <article key={index} className={styles.listitem}>
            {post.featuredImage && (
              <figure className={styles.featimg}>
                <Link to={post.uri}>
                  <GatsbyImage
                    image={getImage(post.featuredImage.node.localFile)}
                    alt={post.featuredImage.node.altText}
                  />
                </Link>
              </figure>
            )}
            <Catlist postObject={post} />
            <h2 className={styles.article__title}>
              <Link to={`/posts${post.uri}`}>{post.title}</Link>
            </h2>
            <div className={styles.article__meta}>
              by {post.author.node.name}. Published{" "}
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
            </div>
            <div
              className={styles.article__content}
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
            <div className={styles.article__tax}>
              Tagged:{" "}
              {post.tags.nodes.map((tag, index) => [
                index > 0 && ", ",
                <Link key={index} to={tag.link}>
                  {tag.name}
                </Link>,
              ])}
            </div>
          </article>
        ))}
      </section>
      <Pagination pageContext={pageContext} />
    </Layout>
  )
}

export default TagIndex

export const pageQuery = graphql`
  query ($tagId: Int!, $skip: Int!, $limit: Int!) {
    allWpPost(
      sort: { fields: date }
      skip: $skip
      limit: $limit
      filter: { tags: { nodes: { elemMatch: { databaseId: { eq: $tagId } } } } }
    ) {
      nodes {
        date
        databaseId
        excerpt
        uri
        slug
        title
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
            link
          }
        }
        tags {
          nodes {
            name
            link
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
  }
`
