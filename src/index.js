import React, { Fragment } from 'react'
import { render } from 'react-dom'
import 'bulma.styl'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Index from './pages/'
import About from './pages/About'
import Topics from './pages/Topics'
import OpenSource from './pages/OpenSource'
import Article from './pages/Article'
import Articles from './pages/Articles'
import Container from './components/Container'
import NotFound from './pages/NotFound'

render(
  <Router>
    <Fragment>
      <Header />
      <section className="section">
        <Container style={{ minHeight: '30em' }}>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/articles" component={Articles} />
            <Route path="/articles/:id" component={Article} />
            <Route path="/about" component={About} />
            <Route path="/opensource" component={OpenSource} />
            <Route path="/topics" component={Topics} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </section>
      <Footer />
    </Fragment>
  </Router>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
