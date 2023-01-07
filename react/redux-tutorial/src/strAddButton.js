import React, { Component } from 'react';
import StrAddButton from './StrAddButton';
import './App.css'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return(
      <div className="App-header">
        <h1>코딩병원에 오신 것을 환영합니다.</h1>
        <span>{this.props.str}</span>
        <br/>
        <StrAddButton AddProp="100"/>
      </div>
    )
  }
}

/**
 * 데이터 세팅.
 * @param {object} state 스토어의 state 변수 
 * @param {object} props 부모 컴포넌트에서 전달한 props
 * @returns {any} str store의 state 값
 */
let mapStateToProps = (state, props) => {
  console.log(props.indexProp)
  return {
    str: state.data.str
  };
};

// connect의 첫번째 파라미터를 통해 store의 state에 접근 가능
App = connect(mapStateToProps, null)(App);

export default App;