import React, { useEffect, useState } from "react";
import './CharacterList.css';

const CharacterList = (characterListProps) => {
    
    const urlList = characterListProps.characters;
    const [listOfCharacters, setListOfCharacters] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    
    // State listOfCharacters seems to get lost once fully populated, needs to be saved elsewhere. Don't know why, or how. @shoryudz to fix!
    const [finalCharactersList, setFinalCharactersList] = useState([]);

    // Given a character SW-API endpoint, will load characters name into a list
    const loadCharacter = async character => {
        const response = await fetch(character);
        const data = await response.json();
        setListOfCharacters(listOfCharacters.push({name: data.name}));
        return Promise.resolve();
    }

    // Runs on load by extracting list of endpoints, passes them one by one into loadCharacter, and only on completion will it set the resulting list to a final list
    useEffect(() => {
        (async () => {
            await Promise.all(urlList.map(character => {
                return loadCharacter(character)
            })).then(() => {
                setFinalCharactersList(listOfCharacters);
                setIsLoaded(true);
            });
        })();
    }, [])
    
    return (
        <div className="listItems">
            { // If content has loaded, pass through all the character names in their original order
              // If content has not loaded, loading text
            isLoaded ? 
            <>
                <h3 className="title">List of Characters in {characterListProps.filmTitle}</h3>
                {finalCharactersList.map(character => {
                    return <div className="listItem" style={{order: character.count}}>- {character.name}</div>
                })}
            </>
            : <h3 className="title">Loading...</h3>}
            <button className="closeButton" onClick={() => characterListProps.close()}>Back to main</button>
        </div>
    )
}

export default CharacterList