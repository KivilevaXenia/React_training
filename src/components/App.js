import React from 'react'
import ArticleList from './ArticleList.js'
import articles from '../info'
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            reverted: false
        }
    }

    render() {
        return(
            <div className='container'>
                <button className='btn' onClick={this.revert}>Revert</button>
                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/>
            </div>
        )
    }

    revert = () => {
        this.setState({
            reverted: !this.state.reverted
        })
    }
}

export default App