import { Component } from 'react';
import './list.css';
import AnimeItem from './AnimeItem';

function getPokemon() {
    return fetch(`https://api.jikan.moe/v4/anime`).then((resp) => resp.json());
}

class List extends Component {
    state = {
        anime: [],
    };

    componentDidMount() {
        getPokemon().then((result) => this.setState({ anime: result.data }));
    }

    render() {
        const { search, categories } = this.props;

        console.log(categories);

        if (categories.length > 0) {
            return (
                <ul className="container">
                    {this.state.anime
                        .filter((s) =>
                            s.title
                                .toLowerCase()
                                .includes(search.toLowerCase()),
                        )
                        .filter((s) => categories.includes(s.type))
                        .map((s) => (
                            <AnimeItem item={s} />
                        ))}
                </ul>
            );
        }

        return (
            <ul className="container">
                {this.state.anime
                    .filter((s) =>
                        s.title.toLowerCase().includes(search.toLowerCase()),
                    )
                    .map((s) => (
                        <AnimeItem item={s} />
                    ))}
            </ul>
        );
    }
}

export default List;
