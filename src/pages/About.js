import React, { Component, Fragment } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 2em;
  text-align: center;
  margin-top: 2em;
  margin-bottom: 1em;
`

class Wall extends Component {
  constructor(props) {
    super(props)
    this.root = document.getElementById('root')
    this.el = document.createElement('div')
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  componentDidMount() {
    this.root.appendChild(this.el)
  }

  componentWillUnmount() {
    this.root.removeChild(this.el)
  }

  render() {
    const Portal = styled.ul`
      top: 52px;
      z-index: 1;
      background: #363636;
      position: absolute;
      li {
        margin: 2px;
        float: left;
      }

      li > a > img {
        width: 75px;
        height: 75px;
        vertical-align: top;
        opacity: 0.3;
        transition: all 0.5s ease;
      }

      li > a > img:hover {
        opacity: 1;
      }

      // li > img:hover {
      //   -webkit-transform: scale(1.05);
      //   -ms-transform: scale(1.05);
      //   transform: scale(1.05);
      //   zoom: 1.05;
      // }
    `
    return createPortal(<Portal>{this.props.children}</Portal>, this.el)
  }
}

export default class extends Component {
  state = {
    list: [],
    marginTop: 0
  }
  async componentDidMount() {
    this.setState(
      Object.assign({}, this.state, {
        marginTop: this.refs.wall.el.firstChild.offsetHeight + 52
      })
    )

    const res = await fetch(
      // `https://api.github.com/repos/byte-fe/blog/issues`,
      `https://api.github.com/repos/lifesinger/lifesinger.github.com/issues`,
      {
        mode: 'cors',
        body: {
          filter: 'created',
          page: 1,
          per_page: 15,
          access_token: '2b1ba613952d4cca6c838863a25812622e8c06b4'
        }
      }
    )
    let list = []
    let message = ''
    if (res.ok) {
      list = await res.json()
      console.log(123, list)
      this.setState(
        Object.assign({}, this.state, {
          list
        })
      )
    } else {
      list = await res.json()
      console.log(list.message)
    }
  }
  render() {
    return (
      <Fragment>
        <Wall ref="wall">
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://avatars3.githubusercontent.com/u/533360?s=460&v=4"
                alt="#"
              />
            </a>
          </li>
        </Wall>
        <div style={{ marginTop: this.state.marginTop + 'px' }}>
          <H1>关于我们</H1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            error architecto, cupiditate rem officia possimus tenetur sed fuga
            quaerat nulla veritatis, vel esse alias cum assumenda ipsam
            doloribus nisi? Impedit. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Tempora nobis expedita repellendus voluptates,
            esse distinctio saepe quia sapiente maiores, assumenda architecto
            quidem totam deserunt suscipit nam, consequuntur pariatur ducimus
            labore?
          </p>
          <H1>热招职位</H1>
          <ul>
            <li>
              <a href="#">前端工程师</a>
            </li>
            <li>
              <a href="#">前端工程师</a>
            </li>
            <li>
              <a href="#">前端工程师</a>
            </li>
            <li>
              <a href="#">前端工程师</a>
            </li>
            <li>
              <a href="#">前端工程师</a>
            </li>
            <li>
              <a href="#">前端工程师</a>
            </li>
          </ul>
          <H1>加入我们</H1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit debitis nobis vel unde impedit temporibus qui voluptas
            optio soluta, adipisci deserunt dolorem minus dicta! Nam quia minus,
            laudantium adipisci necessitatibus.
          </p>
          <ul>
            <li>Github</li>
            <li>Email</li>
          </ul>
        </div>
      </Fragment>
    )
  }
}
