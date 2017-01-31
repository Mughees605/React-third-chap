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
var value = false;
var Excel = React.createClass({

    propTypes: {
        headers: React.PropTypes.arrayOf(
            React.PropTypes.string
        ),
        initialData: React.PropTypes.arrayOf(
            React.PropTypes.arrayOf(
                React.PropTypes.string
            )
        )
    },

    getInitialState: function () {
        return {
            data: this.props.initialData,
            sortby:null,
            descending:false,
        }
    },
    // sort function
    sort: function (e) {
        var column = e.target.cellIndex;
        var data = this.state.data.slice();
        var descending = this.state.sortby === column;
        console.log(descending);
        //
        console.log(this.state.sortby);
        data.sort(function(a,b){
            return a[column] > b[column] ? 1 : -1;
        })
        this.setState({
            data:data,
            sortby:column,
            descending:descending

        })
    },

    //sort function end

  // edit function start
  edit:function(e){
     this.setState({
         edit:{
             row:parseInt(e.target.dataset.row,10),
             cell:e.target.cellIndex,
         }
     })
  },
  // edit function end
    render: function () {
        return (
            React.DOM.table(null,
                React.DOM.thead({ onClick: this.sort },
                    React.DOM.tr(null,
                        this.props.headers.map(function (title,idx) {
                            return React.DOM.th({key:idx}, title)
                        })
                    )//tr end           
                ),  // thead end 
                React.DOM.tbody({onDoubleClick:this.edit},
                    this.state.data.map(function (row, idx) {
                        return (
                            React.DOM.tr({ key: idx },

                                row.map(function (cell, idx) {
                                    return React.DOM.td({ key: idx }, cell);
                                })

                            )
                        )
                    })
                ) //tbody end
            ) // table end
        );
    }
});
var me = ReactDOM.render(
    React.createElement(Excel, {
        headers: headers,
        initialData: data,
    }),
    document.getElementById("app")
)
