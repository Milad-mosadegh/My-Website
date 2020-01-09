import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'

import Home from './component/Home'
import Navbar from './component/Navbar'
import Video from './component/Video'
import Music from './component/Music'
import Gallery from './component/Gallery'
import Contact from './component/Contact'




class App extends Component {

  componentDidMount() {
    $(document).ready(
      $('#video,#music,#gallery,#contact').hide(),

      $('#id-home').on('click', () => {
        $('#home').show()
        $('#video,#music,#gallery,#contact').hide()

      }),

      $('#id-video').on('click', () => {
        $('#video').show()
        $('#home,#music,#gallery,#contact').hide()
      }),

      $('#id-music').on('click', () => {
        $('#music').show()
        $('#video,#home,#gallery,#contact').hide()
      }),

      $('#id-contact').on('click', () => {
        $('#contact').show()
        $('#video,#music,#home,#gallery').hide()
      }),

      $('#id-gallery').on('click', () => {
        $('#gallery').show()
        $('#video,#music,#home,#contact').hide()
      })



    )
  }

  render() {
    return (
      <div id="main">
        <Navbar />
        <Home />
        <Video />
        <Music />
        <Gallery />
        <Contact />




      </div>
    );
  }
}

export default App;