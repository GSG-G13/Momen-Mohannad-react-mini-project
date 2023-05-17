import React, { Component } from 'react';

class Filters extends Component {
    // state = {};
    render() {
        const { categories, setCategories } = this.props;

        // this.componentDidUpdate = () => {};

        return (
            <div className="filters">
                <fieldset>
                    <legend>Genre</legend>
                    <div>
                        <label htmlFor="TV">
                            <input
                                id="TV"
                                type="checkbox"
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setCategories([...categories, 'TV']);
                                    } else {
                                        setCategories(
                                            categories.filter(
                                                (c) => c !== 'TV',
                                            ),
                                        );
                                    }
                                }}
                            />
                            TV
                        </label>
                    </div>
                    <div>
                        <label htmlFor="Movie">
                            <input
                                id="Movie"
                                type="checkbox"
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setCategories([...categories, 'Movie']);
                                    } else {
                                        setCategories(
                                            categories.filter(
                                                (c) => c !== 'Movie',
                                            ),
                                        );
                                    }
                                }}
                            />
                            Movie
                        </label>
                    </div>
                </fieldset>
            </div>
        );
    }
}

export default Filters;
