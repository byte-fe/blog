import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import ArticleList from '../components/ArticleList'
import Loading from '../components/Loading'
import Config from '../config/blog'

const H1 = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #f00;
`

const Tabs = styled.div`
  .title {
    margin: 0;
  }
  li:first-child {
    margin-left: 0;
    margin-right: auto;
  }
`

export default class extends Component {
  state = {
    list: [],
    isLoading: true
  }
  async componentDidMount() {
    const res = await fetch(
      // `https://api.github.com/repos/byte-fe/blog/issues`,
      `https://api.github.com/repos/${Config.owner}/${Config.repo}/issues`,
      {
        mode: 'cors',
        body: {
          filter: 'created',
          page: 1,
          per_page: 15,
          access_token: Config.access_token
        }
      }
    )
    let list = []
    let message = ''
    if (res.ok) {
      list = await res.json()
      console.log(111, list)
      this.setState(
        Object.assign({}, this.state, {
          list,
          isLoading: false
        })
      )
    } else {
      list = await res.json()
    }
  }
  render() {
    return (
      <Fragment>
        <Hero />
        <section>
          <Tabs className="tabs is-right main-tabs is-hidden-mobile">
            <ul>
              <li className="is-active">
                <a href="/">Latest</a>
              </li>
              <li>
                <a href="#">Plugins</a>
              </li>
              <li>
                <a href="#">tag1</a>
              </li>
              <li>
                <a href="#">tag2</a>
              </li>
              <li>
                <a href="#">tag3</a>
              </li>
              <li>
                <a href="#">tag4</a>
              </li>
            </ul>
          </Tabs>
          {this.state.isLoading && <Loading />}
          <ArticleList data={this.state.list} />
        </section>
      </Fragment>
    )
  }
}
