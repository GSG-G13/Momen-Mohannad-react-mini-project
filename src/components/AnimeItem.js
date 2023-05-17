import { Component } from 'react';

class AnimeItem extends Component {
    render() {
        const {
            mal_id,
            title,
            episodes,
            score,
            type,
            rank,
            images,
            background,
            year,
        } = this.props.item;
        return (
            <li key={mal_id} className="tv-item">
                <div className="item-head">
                    <img className="item__image" src={images.jpg.image_url} />
                </div>
                <div className="item-body">
                    <h2 className="item__title">{title}</h2>
                    <p className="item__background">
                        {background ||
                            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                    </p>
                    <h3>ٌRelease: {year}</h3>
                    <h3>Type: {type}</h3>
                    <div className="item__details">
                        <span>Episodes: {episodes}</span>
                        <span>Rank: {rank}</span>
                        <span>Score: {score}</span>
                        <span>{rank}</span>
                    </div>
                </div>
            </li>
        );
    }
}

export default AnimeItem;
