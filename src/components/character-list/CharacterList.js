import React, { useEffect, useState } from "react"

const CharacterList = (characterListProps) => {
    
    const [listOfCharacters, setListOfCharacters] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    
    // State listOfCharacters seems to get lost once fully populated, needs to be saved elsewhere. Don't know why, or how. @shoryudz to fix!
    const [finalCharactersList, setFinalCharactersList] = useState([]);

    const loadCharacter = async character => {
        const response = await fetch(character);
        const data = await response.json();
        setListOfCharacters(listOfCharacters.push({name: data.name}));
        return Promise.resolve();
    }

    useEffect(() => {
        const urlList = characterListProps.characters;
        (async () => {
            const loadCharacters = await Promise.all(urlList.map(character => {
                return loadCharacter(character)
            })).then(() => {
                setFinalCharactersList(listOfCharacters);
                setIsLoaded(true);
            });
        })();
    }, [])
    
    return (
        <div className="container">
            {isLoaded && 
            <React.Fragment>
                <h3>List of Characters in {characterListProps.filmTitle}</h3>
                {finalCharactersList.map(character => {
                    return <div className="listItem" style={{order: character.count}}>- {character.name}</div>
                })}
                </React.Fragment>
            }
        </div>
    )
}

export default CharacterList