var logMixin = {

   log:function(methodName,args){
    console.log(methodName,args);
   },
   componentDidMount:function(){
    this.log("componentDidMount",arguments);
   },
   componentWillMount:function(){
   
   this.log("componentWillMount",arguments);
   },
   
   componentDidUpdate:function(oldProps,oldState){
        console.log("Did");
        
   },
   componentWillUpdate:function(props,state){
       console.log("Will")
   },
   
   
};

var Hello = React.createClass({
  
  componentWillReceiveProps:function(newProps){

     this.setState({
         text: newProps.text
     })
    
  },
  name : "Hello",
  mixins:[logMixin],
  
_textChange:function(){
 this.setState({
 text:this.refs.name.value
 })
},
getInitialState:function(){
return {
   text : this.props.text
 }
},
  render: function() {
    return (
    <div>
    <input type = "text" defaultValue = {this.state.text} ref = "name" onChange = {this._textChange}/>
    <h1>{this.state.text}</h1>
    </div>
    )
  }
});

ReactDOM.render(
  <Hello text="World" />,
  document.getElementById('app')
);
