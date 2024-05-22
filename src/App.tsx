import './App.css'
import CharacterGallery from "./components/CharacterGallery.tsx";
import {useState} from "react";
import {response} from "./Response.ts";
import {Route, Routes} from "react-router-dom";
import NewCharacter from "./components/NewCharacter.tsx";
import {RickAndMortyCharacter} from "./types/RickAndMortyCharacter.ts";

export default function App() {
    const [characters, setCharacters] = useState<RickAndMortyCharacter[]>(response);
    const [searchText, setSearchText] = useState("");

    const filteredCharacters = characters
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));

    function addCharacter(character: RickAndMortyCharacter) {
        setCharacters([...characters, character]);
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
