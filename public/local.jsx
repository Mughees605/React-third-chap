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
];
var Table = React.createClass({
getInitialState:function(){
 return {
 data:this.props.data,
 }
},
sort:function(e){
    var column = e.target.cellIndex;
    var data = this.state.data.slice();
    data.sort(function(a,b){
        console.log(a[column]);
        //console.log(b[column]);
        return a[column] > b[column];
        
    });
    this.setState({
        data:data
    })

},
render:function(){
   return (
   <table>
     <thead onClick = {this.sort}>
       <tr>
         {this.props.headers.map(function(title,id){
         return <th key = {id}>{title}</th>
         })}
       </tr>
     </thead>
     <tbody>
       {this.state.data.map(function(title,id){
        return (
           <tr key = {id}>
           {title.map(function(val,idx){
           return <td key = {idx}>{val}</td>
           })}
            </tr>
        )
       })}
     </tbody>
   </table>
   )
 }
})
ReactDOM.render(<Table headers = {headers} data = {data}/>,document.getElementById("app"));