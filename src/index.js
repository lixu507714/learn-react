// import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './assets/style.scss';
import Route from './router/route';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  };
    // }
    render() {
        return (
            <Route />
        );
    }
    // render() {
    //     return (
    //         <div>
    //             <p class="red">Hello World</p>
    //         </div>
    //     );
    // }
}

// export default App;

ReactDom.render(<App />,document.getElementById('root'));