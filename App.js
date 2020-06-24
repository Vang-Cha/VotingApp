import React from 'react';
import './style.css';
import Voting from './Voting';
import skillLanguages from './Components';

class App extends React.Component {
    state={
        languages: []
    }

    componentDidMount() {
        this.setState({
            languages: skillLanguages
        })
    }

    addVoteHandler = langId => {
        const addVote = this.state.languages.map(lang => {
            if (langId === lang.id) {
                return Object.assign({}, lang, {
                    votes: lang.votes + 1
                });
            } else {
                return lang;
            }
            });
            this.setState({
                languages: addVote
            });
    };

    minusVoteHandler = langId => {
        const minusLang = this.state.languages.map(lang => {
            if (langId === lang.id) {
                return Object.assign({}, lang, {
                    votes: lang.votes - 1
                });
            } else {
                return lang;
            }
            });
            this.setState({
                languages: minusLang
            });
    };


    render() {
        
        const sortVotes = this.state.languages.sort((a, b) => {
            return b.votes - a.votes;
        });
        const languages = sortVotes.map(languages => (
            <Voting
                id={languages.id}
                votes={languages.votes}
                addVote={this.addVoteHandler}
                minusVote={this.minusVoteHandler}
                lang={languages.lang}
            />
        ))
        return (
            <div>
                <h1 className="title">Javascript Voting App</h1>
                {languages}
            </div>
        )
    }
}

export default App;