import React from "react"
import { Helmet } from "react-helmet"

const CustomFonts = () => (
  <Helmet>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap"
    />

    <link rel="icon" type="image/png" href='/static/favicon.png' />

    <title>Shoaib - React Native Developer</title>
  </Helmet>
)

export default CustomFonts
