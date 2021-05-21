import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.prismicTextContent.data.text_field
  return (
    <Layout>
      <div>
        <h1>{post.text}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($uid: String!) {
    prismicTextContent(uid: { eq: $uid }) {
      data {
        text_field {
          text
        }
      }
    }
  }
`