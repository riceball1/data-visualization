'use strict';

const e = React.createElement;

const App = ({message}) => {
    console.log('props', message)
    return e('h1', null, message)
};

const domContainer = document.getElementById('root');

ReactDOM.render(
    e(App, {message: "Hello React"}),
    domContainer
);
