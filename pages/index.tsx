import React, {Fragment} from 'react'
import Head from 'next/head'
import Status from '../components/Status'
import {Mercado} from '../components/Atletas'

const IndexPage = () => (
  <Fragment>
    <html lang="en">
    <Head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Cartola by edinho</title>
    </Head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div>
        <h1>Cartola by Edinho</h1>
        <Status>mercado </Status>        
        <Mercado></Mercado>
      </div>
    </body>
    </html>
 </Fragment>
)

export default IndexPage
