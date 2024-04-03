import { useEffect, useState } from "react";
import Display from "../Display/Display";
import Letters from "../board/Board"
import Panel from "../Panel/Panel";
import "./MainLayout.css";
import { generate } from "random-words";

function MainLayout(): JSX.Element {
    //The app i making is hangman.
    // Elements of the site the user interacts with is 
    // letter buttons each times one is pressed it is checked against word that is picked.
    // there is space for blank spaces of the word letters.
    // display that is getting updates of of user's interaction with the letters board.
//    const [word, setWord] = useState<String>(generate());
    const [someWord, setSomeWord] = useState(generate().toString());
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const incorrectLetters = guessedLetters.filter(letter=>( !someWord.includes(letter)));
    console.log(someWord);
    const handleClick = (letter: string)=> {setGuessedLetters([...guessedLetters, letter])}
    
    const addGuessedLetter=(letter: string)=>{
        if(guessedLetters.includes(letter)) return
        
        setGuessedLetters(currentLetters => [...currentLetters, letter]);
    }

    useEffect(()=>{
        const handler=(e: KeyboardEvent)=>{
            const key = e.key;
            if(!key.match(/^[a-z]$/)) return;

            e.preventDefault();
            addGuessedLetter(key);
        }

        document.addEventListener('keypress', handler);
        return ()=>{
            document.removeEventListener("keypress", handler);
        }
    }, [])
    return (
        <div className="MainLayout">
            <h1>Hangman</h1>
			<Display numberOfGuesses={incorrectLetters.length}/>
            <Panel wordToGuess={someWord} guessedLetters={guessedLetters}/>
            <Letters handleClick={handleClick}/>
        </div>
    );
}

export default MainLayout;
