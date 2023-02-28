import React ,{useState} from 'react';

const App = () =>{
    const name  = 'adrian';

    const [count,returnCount] = useState(0);    
    const add = () => {
        returnCount (count + 1);
    }
    const minus = () =>{
        returnCount (count - 1);
    }
    return(
        <>
        <div>Hello world {name}</div>

        <div>Count: {count}</div>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
        
        </>
    )
}

export default App;