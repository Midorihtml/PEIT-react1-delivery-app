import React from 'react';
import { useState, useEffect } from 'react';
import magnifyingGlassIcon from '../../assets/searchbarIcons/magnifying-glass-solid.svg';
import clearIcon from '../../assets/searchbarIcons/xmark-solid.svg';
import styles from './searchbar.module.css';

function Searchbar(props) {
    const [input, setInput] = useState('');
    const [debouncedInput, setDebouncedInput] = useState(input);

    /* Adds a delay of 1s before starting the search */
    useEffect(() => {
        const timer = setTimeout(() => setInput(debouncedInput), 1000);
        return () => clearTimeout(timer);
    }, [debouncedInput]);

    const onSearchSubmit = props.onSearchSubmit;
    const clearResults = props.clearResults;

    useEffect(() => {
        if (input !== '') {
            onSearchSubmit(input);
        }
        else {
            clearResults();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input]);

    const clearInput = () => {
        setDebouncedInput('');
    };

    return (
        <div className={styles.searchbarContainer}>
            <div className={ styles.searchbar }>
                <input id="searchbarInput" 
                    className={ styles.input }
                    type="text" 
                    placeholder="Search for a restaurant" 
                    autoComplete="off"
                    spellCheck="false"
                    value={ debouncedInput } 
                    onChange={ e => setDebouncedInput(e.target.value) } />

                <label htmlFor="searchbarInput"> {
                    debouncedInput === '' ?

                        (<img className={styles.magnifyingGlassIcon}
                            src={magnifyingGlassIcon}
                            alt="Search icon" />)
                        :
                        (<button className={styles.clearButton}
                            onClick={clearInput}>
                            <img className={styles.clearIcon}
                                src={clearIcon}
                                alt="Clear icon" />
                        </button>)
                }
                </label>
            </div>
        </div>
    );
}

export { Searchbar };
