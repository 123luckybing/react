import React, { Component } from 'react';
import Tab from './Table';

class App extends Component {
  render() {
    let JsonPic =["./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg","./img/5.jpg"];
    // 在这里拼接字符串,不要去后面拼接
    return (
      <div className="App">
        <Tab PicSrc={JsonPic} timer='2000'/>
      </div>
    );
  }
}

export default App;
