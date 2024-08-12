import './App.css'
import CharacterGallery from "./components/CharacterGallery.tsx";
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import NewCharacter from "./components/NewCharacter.tsx";
import {RickAndMortyCharacter} from "./types/RickAndMortyCharacter.ts";
import axios from "axios";

export default function App() {
    //loadCharacters()
    const [characters, setCharacters] = useState<RickAndMortyCharacter[]>([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        loadCharacters()
    }, []);

    const filteredCharacters = characters
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));

    function addCharacter(character: RickAndMortyCharacter) {
        setCharacters([...characters, character]);
    }

    function loadCharacters()  {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                setCharacters(response.data.results)
                return response.data
            })
            .catch((error) => {
                console.error(error.message)
            })
            .finally(() => {
                console.log("Finally")
            })
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<CharacterGallery handleSearchTextChange={setSearchText}
                                                           characters={filteredCharacters}/>}/>
                <Route path="/characters/new" element={<NewCharacter onAddCharacter={addCharacter}/>}/>
            </Routes>
        </>
    );
}
