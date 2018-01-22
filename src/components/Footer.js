import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
export default () => (
  <footer className="footer is-dark">
    <Container>
      <nav className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Articles</p>
            <p className="title">3,456</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">OpenSource</p>
            <p className="title">123</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Topics</p>
            <p className="title">456K</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Stars</p>
            <p className="title">789</p>
          </div>
        </div>
      </nav>
      <div className="content has-text-centered">
        <p>
          © 2018, Made with ♥ by{' '}
          <a href="https://github.com/byte-fe">byte-fe</a>,{' '}
          <a href="https://www.toutiao.com/about/">ByteDance Inc.</a>
        </p>
      </div>
    </Container>
  </footer>
)
