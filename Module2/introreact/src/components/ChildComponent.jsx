const ChildComponent = (props) => {
    const handleClick =() => {
        props.onUpdateStatus("Hello, I'm online!")
    }

    return (
        <button onClick={handleClick}>update my status!!</button>
    )
}


export default ChildComponent;