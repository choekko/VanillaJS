import Table from './Table.js';
import Input from './Input.js';
import getPosts from '../apis/getPosts.js';

function App($app) {
    this.title = document.createElement('h1');
    this.title.innerHTML = `이건 지뢰찾기`;
    $app.appendChild(this.title);

    getPosts();

    this.state = {
        row : 0,
        col : 0,
        bombWhere : []
    }
    
    this.setState = (newState) => {
        this.state = {...this.state, ...newState};
        table.setState(newState);
    }

    const input = new Input($app, this.setState);
    const table = new Table($app, this.state)
   
}

export default App;