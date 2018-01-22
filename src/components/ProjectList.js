import React from 'react'
import styled from 'styled-components'

const Column = styled.div.attrs({
  className: 'column is-one-quarter'
})`
  // background: #999;
  // text-align: center;
`

const Card = styled.div.attrs({
  className: 'box'
})`
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  a > img {
    width: 100%;
  }
`

export default ({ data }) => (
  <Column>
    <Card>
      <a href={data.url}>
        <img src={data.imgurl} alt="#" />
      </a>
      <div>
        <div className="level">
          <strong className="level-left" />
          <div className="level-right" className="control">
            <div className="tags has-addons">
              <span className="tag is-light">
                <svg
                  aria-hidden="true"
                  className="octicon octicon-star"
                  height="16"
                  version="1.1"
                  viewBox="0 0 14 16"
                  width="14"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"
                  />
                </svg>
              </span>
              <span className="tag is-info">{data.stars}</span>
            </div>
          </div>
        </div>
        <p>{data.des}</p>
      </div>
    </Card>
  </Column>
)
