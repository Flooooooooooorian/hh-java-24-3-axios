import {RickAndMortyCharacter} from "../types/RickAndMortyCharacter.ts";
import CharacterCard from "./CharacterCard.tsx";
import "./CharacterGallery.css";
import {useNavigate} from "react-router-dom";

type CharacterGalleryProps = {
    characters: RickAndMortyCharacter[];
    handleSearchTextChange: (text: string) => void;
}
export default function CharacterGallery(props: Readonly<CharacterGalleryProps>) {
    const cards = props.characters.map((character) => <CharacterCard key={character.name} character={character}/>);
    const navigate = useNavigate();

    return (
        <>
            <button style={{width: "100%"}} onClick={() => navigate("/characters/new")}>Add Character</button>
            <input type="text" onChange={(e) => props.handleSearchTextChange(e.target.value)}
                   placeholder="Search for a character"/>
            <div className="character-gallery">
                {cards.length > 0 ? cards : <p>No characters found</p>}
            </div>
        </>
    );
}