import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
// import Meta from '../components/SiteMeta/Meta'
import SiteMeta from '../components/SiteMeta/SiteMeta'
import Layout from '../layouts/DefaultLayout'
import PostListWithExcerpt from '../components/PostList/PostListWithExcerpt'
import Pagination from '../components/Pagination/Pagination'


// grab the pageContext prop given by createPage in gatsby-node.js
const PostsPage = ({ data, pageContext }) => {
    // console.log('Posts', data)
    const posts = data.allWordpressPost.edges

    return (
        <Layout>
            <SiteMeta />
            <Helmet
                title="Plate for Gatsby"
                meta={[
                    { name: 'description', content: 'Plate for Gatsby posts page.' },
                    { name: 'keywords', content: 'wordpress, plate, gatsbyjs, starter-theme, gatsby-starter' }
                ]}
                bodyAttributes={{
                    class: 'blogroll page-blog'
                }}
            />
            <PostListWithExcerpt posts={posts} />
            <Pagination pageContext={pageContext} />
        </Layout>
    )
}
export default PostsPage

export const postsQuery = graphql`
    query {
        allWordpressPost {
            edges {
                node {
                    id
                    wordpress_id
                    slug
                    status
                    template
                    format
                    title
                    date(formatString: "MMMM DD, YYYY")
                    excerpt
                    content
                    categories {
                        id
                        wordpress_id
                        count
                        description
                        link
                        name
                        slug
                        parent {
                            __typename
                            id
                        }
                        children {
                            id
                            __typename
                        }
                        wordpress_parent
                        _links {
                            self {
                                href
                            }
                        }
                    }
                }
            }
        }

        site {
            siteMetadata {
                title
                subtitle
                description
                author
                url
                image
                facebookImage
                twitterImage
                twitterUser
            }
        }
    }
`
