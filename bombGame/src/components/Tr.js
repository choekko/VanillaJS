import Td from './Td.js'

function Tr ($parent, initialState) {
    this.state = initialState;
    this.$target = document.createElement('tr');
    $parent.appendChild(this.$target);

    for (let i = 0; i < this.state.col; i++) {
        new Td(this.$target);
    }

}

export default Tr;