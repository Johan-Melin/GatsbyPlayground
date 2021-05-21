import React from "react"
import { css } from "@emotion/react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allPrismicTextContent.totalCount} Posts</h4>
        {data.allPrismicTextContent.nodes.map(({data, uid, id}) => (
           <div key={id}>
           <Link
             to={uid}
             css={css`
               text-decoration: none;
               color: inherit;
             `}
           >
              <p>{data.text_field.text}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}
export const query = graphql`
query MyQuery {
  allPrismicTextContent {
    nodes {
      data {
        text_field {
          text
        }
      }
      id
      uid
    }
    totalCount
  }
}
`
