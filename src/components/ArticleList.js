import React from 'react';
import Article from './Article';

export default class ArticleList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            openArticleTitle: null
        }
    }

    handleClick = (openArticleTitle) => {
        this.setState({
            openArticleTitle: this.state.openArticleTitle === openArticleTitle ? null : openArticleTitle
        })
    };

    render() {
        let articList = this.props.articles.map((article, index) =>
            <ol key = {article.title}><Article article={article}
                                               isOpen={this.state.openArticleTitle === article.title}
                                               onButtonClick={this.handleClick.bind(this, article.title)}
            />
            </ol>
        );

        return (
            <ul>
                {articList}
            </ul>
        )
    }
}