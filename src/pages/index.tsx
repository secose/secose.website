import * as React from "react"
import type { HeadFC } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 550,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 1,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const doclistStyles = {
  paddingLeft: 0,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const docLinks = [
  {
    text: "twitter",
    url: "https://twitter.com/SecoseCfd",
    color: "#8954A8",
  },
  {
    text: "linkedin",
    url: "https://www.linkedin.com/in/secose-12b7a8251",
    color: "#8954A8",
  },

]



const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        secose.
        <br />
        <span style={headingAccentStyles}>— crowdfunding that you need</span>
      </h1>
      <p style={paragraphStyles}>
        For business inquiries, please contact us at <code style={codeStyles}><a style={{ textDecoration: "none", color: "#8A6534" }} href="mailto:secose.cfd@gmail.com">secose.cfd@gmail.com</a></code>
      </p>
      <ul style={doclistStyles}>
        {docLinks.map(doc => (
          <li key={doc.url} style={docLinkStyle}>
            <a
              style={linkStyle}
              href={`${doc.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
            >
              {doc.text}
            </a>
          </li>
        ))}
      </ul>
    </main >
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>secose. - Home Page</title>
