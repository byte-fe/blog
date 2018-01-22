import React, { Component } from 'react'
import styled from 'styled-components'

const Content = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export default class extends Component {
  state = {}
  componentDidUpdate() {
    window.scrollTo(0, 0)
  }
  async componentDidMount() {}
  render() {
    return (
      <div className="section">
        <h1 className="title">React Native practice</h1>
        <h2 className="subtitle">React Native 实施总结</h2>
        <Content className="content">
          <ul>
            <li>集成</li>
            <li>通讯</li>
            <li>性能优化</li>
            <li>性能优化</li>
            <li>性能优化</li>
          </ul>
        </Content>
        <a href="#">继续阅读 »</a>
        <hr />
        <h1 className="title">React Native practice</h1>
        <h2 className="subtitle">React Native 实施总结</h2>
        <Content className="content">
          <ul>
            <li>集成</li>
            <li>通讯</li>
            <li>性能优化</li>
            <li>性能优化</li>
            <li>性能优化</li>
          </ul>
        </Content>
        <a href="#">继续阅读 »</a>
        <hr />
        <h1 className="title">React Native practice</h1>
        <h2 className="subtitle">React Native 实施总结</h2>
        <Content className="content">
          <ul>
            <li>集成</li>
            <li>通讯</li>
            <li>性能优化</li>
            <li>性能优化</li>
            <li>性能优化</li>
          </ul>
        </Content>
        <a href="#">继续阅读 »</a>
        <hr />
        <h1 className="title">React Native practice</h1>
        <h2 className="subtitle">React Native 实施总结</h2>
        <Content className="content">
          <ul>
            <li>集成</li>
            <li>通讯</li>
            <li>性能优化</li>
            <li>性能优化</li>
            <li>性能优化</li>
          </ul>
        </Content>
        <a href="#">继续阅读 »</a>
        <hr />
      </div>
    )
  }
}
