import React from 'react'
import styled from 'styled-components'

export default styled.div.attrs({
  className: 'container'
})`
  @media screen and (max-width: 1407px) {
    max-width: 1150;
    width: auto;
  }
  @media screen and (min-width: 1024px) {
    max-width: 960px;
    width: 960px;
  }
`
