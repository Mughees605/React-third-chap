var logMixin = {
    log:function(methodName,args){
       console.log(this.name + " :: " + methodName,args);
    },
    componentDidUpdate:function(){this.log("componentDidUpdate",arguments);},
}

var component = React.createClass({
      name:'TextAreaCounter',
      mixins:[logMixin],
         
    // componentDidUpdate:function(oldProps,oldState){
     
    //     if(this.state.text.length > 5){
    //         alert("this is too long ");
    //         this.replaceState(oldState);
    //     }
        
    // },

    propTypes:{
         defaultValue:React.PropTypes.string
    },
    textChange:function(e){
     this.setState({
       text:e.target.value,
     })
    },
    componentWillReceiveProps:function(newProps){
     this.setState({
            text:newProps.defaultValue
     })
    },
    getInitialState:function(){
    return {
        text:this.props.defaultValue
      }
    },

    render:function(){

        return React.DOM.div(null,

        React.DOM.textarea({
            onChange:this.textChange,
            value:this.state.text
        
    }),

        React.DOM.h1(null,this.state.text.length)

        )
    }
})
ReactDOM.render(React.createElement(component,{defaultValue:"pakistan"}),document.getElementById("app"));