import { useState } from "react";

export default function UserInput() {
    
    const [userInput, setUserInput] = useState({
        initialInvestiment: 10000,
        annualInvestiment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue

            };
        });
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label >Initial Investiment</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.initialInvestiment}
                        onChange={(event) => handleChange('initialInvestiment', event.target.value)} 
                    />
                </p>
                <p>
                    <label >Annual Investiment</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.annualInvestiment}
                        onChange={(event) => handleChange('annualInvestiment', event.target.value)} 
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label >Expected Return</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.expectedReturn}
                        onChange={(event) => handleChange('expectedReturn', event.target.value)} 
                    />
                </p>
                <p>
                    <label >Duration</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.duration}
                        onChange={(event) => handleChange('duration', event.target.value)} 
                    />
                </p>
            </div>
        </section>
    );
}