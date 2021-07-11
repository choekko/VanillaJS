import Tr from './Tr.js'

function Table ($parent, initialState) {
    console.log(initialState);
    this.state = initialState;
    this.$target = document.createElement('table');
    $parent.appendChild(this.$target);

    this.setState = (newState) => {
        this.state = {...this.state, ...newState};
        this.$target.innerHTML = ``;
        this.render();
    }

    this.render = () => {
        for (let i = 0; i < this.state.row; i++) {
            new Tr(this.$target, this.state);
        }
        this.state.bombWhere.forEach((e) => {
            let whereRow = Math.floor(e / this.state.col);
            let whereCol = e % this.state.col;
            this.$target.children[whereRow].children[whereCol].innerHTML = `<span>X</span>`;
        })
    }
}

export default Table;