/* create a component that fetches a random pokemon image from the pokeapi and displays it */

import React, { Component } from "react";

class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: null,
            loading: true,
        };
    }

    componentDidMount() {
        this.fetchRandomPokemon();
    }

    fetchRandomPokemon = () => {
        const maxPokemonId = 898; // Maximum number of Pokemon available in the API
        const randomPokemonId = Math.floor(Math.random() * maxPokemonId) + 1; // Generate a random Pokemon ID

        fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    pokemon: data,
                    loading: false,
                });
            });
    };

    render() {
        return (
            <div>
                <button onClick={this.fetchRandomPokemon}>New Pokemon</button>
                {this.state.loading ? (
                    <p>Loading...</p>
                ) : (
                    <img
                        src={this.state.pokemon.sprites.front_default}
                        alt={this.state.pokemon.name}
                        style={{ width: "300px" }}
                    />
                )}
            </div>
        );
    }
}

export default Pokemon;
