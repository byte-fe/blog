import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Li = styled.li`
  // border-bottom: 1px solid #999;
  position: relative;
  h4 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.5;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  img {
    margin: 0 auto;
  }
  hr {
    background-color: #dbdbdb;
    border: none;
    display: block;
    height: 1px;
    margin: 1.5rem 0;
  }
`

const Title = styled(Link).attrs({
  className: 'level-left title is-2 is-spaced'
})`
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
`

const Tags = styled.div.attrs({
  className: 'tags'
})`
  position: absolute;
  right: 0;
  top: -0.5em;
`

const tagColors = ['link', 'info', 'success', 'warning', 'danger', 'primary']

export default ({ data }) => (
  <ul>
    {data
      .filter(item => item.labels.find(label => label.name === 'blog'))
      .map(({ title, body, updated_at, user, labels, number }, i) => {
        let banner = body.match(/\]\(([^)]*)/)
        return (
          <Li key={i}>
            <div className="level">
              <Title to={`/articles/${number}`}>{title}</Title>
              <div className="level-right">
                <div className="tags has-addons">
                  <span className="tag">{updated_at.replace(/T.*/, '')}</span>
                  <a
                    target="_blank"
                    href={user.html_url}
                    className="tag is-dark"
                  >
                    {user.login}
                  </a>
                </div>
              </div>
              <Tags>
                {labels
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
              </Tags>
            </div>
            {banner && banner[1] && <img src={banner[1]} alt="" />}
            <p className="subtitle is-6">{body.replace(/\!\[.*\)/, '')}</p>

            <Link to={`/articles/${number}`}>继续阅读 »</Link>
            <hr />
          </Li>
        )
      })}
  </ul>
)
