import React, {Component} from 'react'
class StopWatch extends Component{
constructor(props){
super(props)
this.state={
isLive:false,
curTime:0,
startTime:0
}
this.timerId = 0
}
//마운트 했을 때
componentWillMount(){
this.timerId = setInterval(e=>{
this.tick()
}, 1000)
}
//언마운트 했을 때
componentWillUnmount(){
clearInterval(this.timerId)
}
//매초 실행됩니다.
tick(){
if(this.state.isLive){
const v = new Date().getTime()
this.setState({curTime:v})
}
}
//시작/중지 버튼을 클릭했을 때
clickHandler(e){
//중지할 때
if(this.state.isLive){
this.setState({isLive:false})
return
}
//시작할 때
const v = new Date().getTime()
this.setState({
curTime:v,
startTime:v,
isLive:true
})
};
//출력할 시계를 생성합니다.
getDisp(){
const s = this.state
const delta = s.curTime - s.startTime
const t = Math.floor(delta / 1000)
const ss = t % 60
const m = Math.floor(t/60)
const mm = m % 60
const hh = Math.floor(mm / 60)
const z = (num) => {
const s = '00' + String(num)
return s.substr(s.length -2, 2)
}
return
{z(hh)}:{z(mm)}:{z(ss)}

}
//화면에 보여주기(rendering)
render(){
let label = 'START'
if(this.state.isLive){
label = 'STOP'
}
const disp = this.getDisp()
const fclick = (e) => this.clickHandler(e)
return (


{disp}

{label}
)
}
}
export default StopWatch