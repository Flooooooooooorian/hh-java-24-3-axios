import {ChangeEvent, FormEvent, useState} from "react";
import {RickAndMortyCharacter} from "../types/RickAndMortyCharacter.ts";
import {useNavigate} from "react-router-dom";

type NewCharacterProps = {
    onAddCharacter: (character: RickAndMortyCharacter) => void;
};

export default function NewCharacter(props: Readonly<NewCharacterProps>) {
    const [character, setCharacter] = useState<RickAndMortyCharacter>({
        name: "",
        status: "",
        species: "",
        image: "",
    });
    const navigate = useNavigate();

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setCharacter({...character, [name]: value});
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        props.onAddCharacter(character);
        setCharacter({
            name: "",
            status: "",
            species: "",
            image: "",
        });
        navigate("/");
    }

    return (
        <>
            <button style={{width: "100%", marginBottom: "10px"}} onClick={() => navigate("/")}>Go back</button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} type="text" id="name" name="name"/>
                <label htmlFor="status">Status</label>
                <input onChange={handleChange} type="text" id="status" name="status"/>
                <label htmlFor="species">Species</label>
                <input onChange={handleChange} type="text" id="species" name="species"/>
                <label htmlFor="image">Image</label>
                <input onChange={handleChange} type="text" id="image" name="image"/>
                <button type="submit">Add Character</button>
            </form>
        </>
    );
}
