function Td ($parent) {
    this.state = {clickCnt: 0};
    this.$target = document.createElement('td');
    $parent.appendChild(this.$target);

    this.setState = (newState) => {
        this.state = {...this.state, ...newState};
        this.render()
    }

    this.handleClick = (e) => {
        e.preventDefault();
        if (this.state.clickCnt == 2)
            this.setState({clickCnt : 0});
        else
            this.setState({clickCnt : this.state.clickCnt + 1})
    }

    this.$target.addEventListener('contextmenu', this.handleClick);

    this.render = () => {
        if (this.state.clickCnt == 0)
            this.$target.innerHTML = ``;
        else if (this.state.clickCnt == 1)
            this.$target.innerHTML = `?`;
        else 
            this.$target.innerHTML = `!`;
    }
}

export default Td;