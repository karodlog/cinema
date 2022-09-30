import { useState } from 'react';
import style from './searchbar.module.css'

const Searchbar = (props) => {

    const {placeholder} = props
    const {onSearch} = props

    const [input, setinput] = useState('');

    const handleClick = ()=>{
       onSearch(input)
    }

    return (
        <div className={style.container}>
           <input type="text" value={input} onInput={e => setinput(e.target.value)} placeholder={placeholder} />
           <button onClick={handleClick} >Search</button>
            
        </div>
    );
};

export default Searchbar;