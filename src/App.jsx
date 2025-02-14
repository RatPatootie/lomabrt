import { useState } from 'react'
import Header from './components/Header'
import Layout from './components/Layout'
import Footer from './components/Footer'
import Main from './components/Main'
import About from './components/About'
import Map from './components/Map'
import "./App.css"

function App() {


  return (
    <>
      <Header></Header>
      <Layout>
        <Main/>
        <About/>
        <Map/>
      </Layout>
      <Footer></Footer>
    </>
  )
}

export default App
