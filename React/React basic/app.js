const fruits = ['apple', 'banana', 'pear', 'plum'];

const Separator = props => {
    return <hr></hr>
}
const Items = props => {
    return <li>{props.name}</li>
}


const Title = props => {
    return (
        <ul>

            < h1 > This is main title </h1 >
            {fruits.map(elem => <Items name={elem} />)}

        </ul>
    )
};

const App = props => {
    return (
        <div>
            <Title></Title>
        </div>
    )
}




const domContainer = document.querySelector('#root');
ReactDOM.render(<App />, domContainer);
