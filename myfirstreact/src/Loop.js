import Board from './Board.js'

const Loop = () => {
    let newArr = [];
    console.log(`Loop started frim gere`);
    for(let i = 1 ; i < 9 ; i++ ){
        console.log(i);
        newArr.push(<Board />)
    }
    console.log(newArr);
    return newArr
}

export default Loop