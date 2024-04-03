import "./Panel.css";
type Word = {
    wordToGuess: string;
    guessedLetters: string[];

}
function Panel({wordToGuess, guessedLetters}: Word): JSX.Element {
    const wordArray = wordToGuess.split('')
    return (
        <div className="Panel">
            {wordArray.map((letter: string)=>(<div className="underSpace">
                <span className="theLetter" style={{visibility: 
                    guessedLetters.includes(letter)? "visible" : "hidden"}}>
                        {letter}</span></div>))}
        </div>
    );
}

export default Panel;
