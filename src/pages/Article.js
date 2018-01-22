import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components'
import Config from '../config/blog'
import Mark from 'react-markdown'
import Loading from '../components/Loading'

const H1 = styled.h1.attrs({
  className: 'title is-2 is-spaced'
})`
  // font-size: 2em;
  text-align: center;
  // color: #f00;
`

const Avatar = styled.img.attrs({
  className: 'image is-32x32'
})`
  display: inline-block;
  vertical-align: bottom;
  // background: #f00;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 5px;
`

const Level = styled.div`
  margin-bottom: -1em !important;
`

export default class extends Component {
  state = {
    data: {
      updated_at: '',
      labels: [],
      user: {
        login: ''
      }
    },
    id: '0',
    isLoading: true
  }
  componentDidUpdate() {
    window.scrollTo(0, 0)
  }
  async componentDidMount() {
    const id = this.props.match.params.id
    if (id) {
      const res = await fetch(
        `https://api.github.com/repos/${Config.owner}/${
          Config.repo
        }/issues/${id}`,
        {
          mode: 'cors',
          body: {
            access_token: Config.access_token
          }
        }
      )
      let data = []
      let message = ''
      if (res.ok) {
        data = await res.json()
        console.log(333, data)
        this.setState(
          Object.assign({}, this.state, {
            data,
            id,
            isLoading: false
          })
        )
      }
    }
  }
  render() {
    const { data } = this.state
    return (
      <div>
        {!this.state.id && <Redirect to="/" />}
        <div className="section">
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/articles">Articles</Link>
              </li>
              <li className="is-active">
                <a href="#" aria-current="page">
                  Reading
                </a>
              </li>
            </ul>
          </nav>
          {this.state.isLoading ? (
            <Loading />
          ) : (
            <div>
              <H1>{data.title}</H1>
              <Level className="level">
                <div className="level-left">
                  <a className="subtitle is-5" href={data.user.html_url}>
                    <Avatar src={data.user.avatar_url} />
                    {data.user.login}
                  </a>
                </div>
                <div className="level-left">
                  <div className="tags">
                    {data.labels
                      .filter(label => label.name !== 'blog')
                      .map((label, i) => (
                        <Link
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
                  <h6 className="subtitle is-6">
                    {data.updated_at.replace(/T.*/, '')}
                  </h6>
                </div>
              </Level>
              <hr />
              <div className="content">
                <Mark>{data.body}</Mark>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
