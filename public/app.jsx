var headers = [
"Book", "Author", "Language", "Published", "Sales"
];
var data = [
["The Lord of the Rings", "J. R. R. Tolkien",
"English", "1954–1955", "150 million"],
["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry",
"French", "1943", "140 million"],
["Harry Potter and the Philosopher's Stone", "J. K. Rowling",
"English", "1997", "107 million"],
["And Then There Were None", "Agatha Christie",
"English", "1939", "100 million"],
["Dream of the Red Chamber", "Cao Xueqin",
"Chinese", "1754–1791", "100 million"],
]
var Excel = React.createClass({
    
    getInitialState:function(){
        return {
            data:this.props.initialData,
        }
    },

    render:function(){
        return (
            React.DOM.table(null,
             React.DOM.thead(null,
              React.DOM.tr(null,
              this.props.headers.map(function(title){
                  return React.DOM.th(null,title)
              })
             )//tr end           
           ),  // thead end 
           React.DOM.tbody(null,
           this.state.data.map(function(row,idx){
           return(
               React.DOM.tr({key:idx},

               row.map(function(cell,idx){
                   return React.DOM.td({key:idx},cell);
               })
               
               )
           )    
           })
           ) //tbody end
         ) // table end
       );
    }
});
ReactDOM.render(
    React.createElement(Excel,{
        headers:headers,
        initialData:data,
    }),
    document.getElementById("app")
)
