import React from 'react';

class Article extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    // componentWillMount() {
    //     console.log('----', 'mointing')
    // }
    //
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.defaultOpen !== this.props.defaultOpen) {
    //         this.setState({
    //             isOpen: nextProps.defaultOpen
    //         })
    //     }
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.isOpen !== nextState.isOpen;
    // }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    };

    render() {
        const article = this.props.article;
        const isOpen = this.props.isOpen;
        const onButtonClick = this.props.onButtonClick;
        console.log(article);

        return (
            <div className='card mx-auto' style={{width: '50%'}}>
                <div className='card-header'>
                    <h1 onClick = {this.incrementCounter}>
                        { article.title }
                        clicked {this.state.count}
                        <button className='btn btn-primary btn-lg float-right' onClick={onButtonClick}>{(isOpen ? 'close' : 'open')}</button>
                    </h1>
                </div>
                <div className='card-body'>
                    <div className='card-subtitle text-muted'>{(new Date(article.date)).toDateString()}</div>
                    <p className='card-text'>{(isOpen ? article.text : null)} </p>
                </div>
            </div>
        )

    }
}

export default Article