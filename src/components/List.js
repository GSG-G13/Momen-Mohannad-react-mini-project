import { Component } from "react";
import "./list.css";
import AnimeItem from "./AnimeItem";

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
    console.log(this.state.anime);
    const { search } = this.props;
    return (
        <ul className="container">
          {this.state.anime
            .filter((s) => s.title.toLowerCase().includes(search.toLowerCase()))
            .map((s) => (
              <AnimeItem item={s} />
            ))}
        </ul>
    );
  }
}

export default List;
