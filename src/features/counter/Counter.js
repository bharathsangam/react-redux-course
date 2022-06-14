import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount} from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const themeTextColor = useSelector(state => state.theme.color)
    const dispatch = useDispatch();
    
    return (
        <div>
            <h1>React Redux Course</h1>
            <button type="button" name="" className="btn btn-primary" onClick={() => { dispatch(increment()) }}> + </button>
            <span className='value' style={{color:themeTextColor}}>  Count: {count} </span>
            <button type="button" name="" className="btn btn-primary" onClick={() => { dispatch(decrement()) }}> - </button>
            <button type="button" name="" className="btn btn-primary" onClick={() => { dispatch(incrementByAmount(10)) }}> Increment value By 10 </button>
        </div>
    );
}

export default Counter;
