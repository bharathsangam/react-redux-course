import { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>React Redux Course</h1>
            <button type="button" name="" className="btn btn-primary" onClick={() => { setCount(count + 1) }}> + </button>
            <span className='value'> {count} </span>
            <button type="button" name="" className="btn btn-primary" onClick={() => { setCount(count - 1) }}> - </button>
        </div>
    );
}

export default Counter;
