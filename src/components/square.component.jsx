

const Square = ({value, onClickHandler}) => {
    return (
        <button className="square cell" onClick={onClickHandler}>{value}</button>
    )
}


export default Square;