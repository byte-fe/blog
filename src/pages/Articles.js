import React, { Component } from 'react'
import styled from 'styled-components'
import Config from '../config/blog'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'

const Content = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export default class extends Component {
  state = {
    list: [],
    isLoading: true
  }
  componentDidUpdate() {
    window.scrollTo(0, 0)
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
      <div className="section">
        {this.state.isLoading && <Loading />}
        <ul>
          {this.state.list
            .filter(item => item.labels.find(label => label.name === 'blog'))
            .map((li, i) => (
              <li key={i}>
                <div className="level">
                  <div className="level-left">
                    <Link to={`/articles/${li.number}`}>{li.title}</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="tags">
                      {li.labels
                        .filter(label => label.name !== 'blog')
                        .map((label, i) => (
                          <Link
                            key={i}
                            style={{ backgroundColor: `#${label.color}` }}
                            className="tag"
                            to="#"
                          >
                            {label.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                  <div className="level-right">
                    <a
                      target="_blank"
                      href={li.user.html_url}
                      className="tag is-dark"
                    >
                      @{li.user.login}
                    </a>&nbsp;&nbsp;&nbsp;
                    {li.updated_at.replace(/T.*/, '')}
                  </div>
                </div>
                <hr />
              </li>
            ))}
        </ul>
      </div>
    )
  }
}
