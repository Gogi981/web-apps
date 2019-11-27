import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = { posts: [], number: 1 };

        setInterval(() => {
            let a = this.state.number
            this.state.number++
            this.setState({ posts: props.data.slice(0, a) })
        }, 1000)
    }

    render() {
        if (!this.state.posts.length) {
            return <h2>Loading...</h2>
        }

        return (
            <div >
                <ul>
                    {this.state.posts.map(e => {
                        return <li>
                            <p> {e.title} </p>
                            <p> {e.body}   </p>
                        </li>
                    })}
                </ul>

            </div >

        )
    }
}


export default Main;