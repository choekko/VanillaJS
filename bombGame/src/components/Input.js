function Input ($parent, callback) {
    this.$target = document.createElement('div');
    $parent.appendChild(this.$target);
    this.$target.className = 'Input';
    this.$target.innerHTML = `
        <input id="col" type="number" placeholder="가로 크기">
        <input id="row" type="number" placeholder="세로 크기">
        <input id="bombCnt" type="number" placeholder="지뢰 개수">
        <button id="exec">만들기</button>
    `
    document.querySelector('#exec').addEventListener('click', (e) => {
        let rowSize = document.querySelector('#row').value;
        let colSize = document.querySelector('#col').value;
        let bombCnt = document.querySelector('#bombCnt').value;

        let candi = Array(rowSize * colSize)
            .fill()
            .map((_, i) => {
                return i; 
            });

        let bombWhere = [];
        while (candi.length > rowSize * colSize - bombCnt) {
            let bomb = candi.splice(Math.floor(Math.random() * candi.length), 1)[0];
            bombWhere.push(bomb);
        }
        callback({row: rowSize, col: colSize, bombWhere: bombWhere});
    })
}

export default Input;