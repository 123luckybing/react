import React, { Component } from 'react';
import style from './index.css';

class Tab extends Component {
    constructor(){
      super();
      this.state={
        index: 0,
        timer: null
      }
    }
    click(i){
      this.setState({
        index:i
      })
    }
    left(){
      if(this.state.index ==0 ){
				this.setState({
					index: this.props.PicSrc.length -1
				})
      }else{
				this.setState({
					index: this.state.index-1
				})
      }
    }
    AutoPlay(){
      this.state.timer= setInterval(()=>{
        this.right();
      },this.props.timer);
    }
    componentDidMount(){
      this.AutoPlay();
    }
    right(){
			if(this.state.index == this.props.PicSrc.length -1){
				this.setState({
					index: 0
				})
			}else{
				this.setState({
					index: this.state.index+1
				})
			}
    }
	  mouseover(){
      clearInterval(this.state.timer)
    }
	  mouseout(){
      this.AutoPlay();
    }
    render(){
        let PicList =[];
        let PicArr=this.props.PicSrc;
        PicArr.forEach((elem,index)=>{
          PicList.push(<img src={elem} alt='' key={index} className="topImg" />)
        });

        let LiArr =[];
			  PicArr.forEach((elem,index)=>{
				    LiArr.push(<li key={index} className={ index==this.state.index? "active":""} onClick={this.click.bind(this,index)}/>)
			  });
        return(
           <div className='wrapper' onMouseOver={this.mouseover.bind(this)} onMouseOut={this.mouseout.bind(this)}>
             <div className='leftRight'>
               <span className='LeftButton' onClick={this.left.bind(this)}>&lt;</span>
               <span className='RightButton' onClick={this.right.bind(this)}>&gt;</span>
             </div>
             <div style={{width:PicArr.length*360+'px',left:(-360)*this.state.index+'px'}} className='ImgWrapper'>
							 <div className="tab">
								 {PicList}
							 </div>
             </div>

						 <ul className='menu'>
							 {LiArr}
						 </ul>

           </div>
        )
    }
}
export default Tab;