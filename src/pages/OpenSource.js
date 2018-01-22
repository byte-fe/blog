import React, { Component } from 'react'
import styled from 'styled-components'
import ProjectList from '../components/ProjectList'

const data = [
  {
    imgurl:
      'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/react-native/react-native.png',
    url: '#',
    title: 'React-Native',
    des:
      'A framework for building native apps with React. A framework for building native apps with React.A framework for building native apps with React.',
    stars: '1,313'
  },
  {
    imgurl:
      'https://camo.githubusercontent.com/8707110493dd81543c24a5a411819e2a0b959084/687474703a2f2f692e696d6775722e636f6d2f503463525567442e706e67',
    url: '#',
    title: 'react-native-swiper',
    des: 'The best Swiper component for React Native.',
    stars: '5,253'
  },
  {
    imgurl:
      'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/react-native/react-native.png',
    url: '#',
    title: 'React-Native',
    des:
      'A framework for building native apps with React. A framework for building native apps with React.A framework for building native apps with React.',
    stars: '1,313'
  },
  {
    imgurl:
      'https://camo.githubusercontent.com/8707110493dd81543c24a5a411819e2a0b959084/687474703a2f2f692e696d6775722e636f6d2f503463525567442e706e67',
    url: '#',
    title: 'react-native-swiper',
    des: 'The best Swiper component for React Native.',
    stars: '5,253'
  },
  {
    imgurl:
      'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/react-native/react-native.png',
    url: '#',
    title: 'React-Native',
    des:
      'A framework for building native apps with React. A framework for building native apps with React.A framework for building native apps with React.',
    stars: '1,313'
  }
]

export default class extends Component {
  state = {
    list: []
  }
  componentDidUpdate() {
    window.scrollTo(0, 0)
  }
  async componentDidMount() {}
  render() {
    return (
      <div className="section">
        <div className="columns is-multiline is-3">
          {data.map((item, i) => <ProjectList key={i} data={item} />)}
        </div>
      </div>
    )
  }
}
