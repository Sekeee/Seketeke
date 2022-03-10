import { useEffect, useState } from 'react'
import Giphy from './giphy'

const axios = require('axios')

const key = 'UJS6D7VYlDJH0FtP3Cp4vJY99cNdbyPn';

export default function GiphyList() {

    const [keyword , setKeyword] = useState('');
    const [loading , setLoading] = useState(false);
    const [list , setList] = useState([]);

    useEffect(() => {
        setLoading(true);

        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`)
        .then(function(data) {
            let listArr = [];
            data.data.data.forEach((el , i) => {
                listArr.push(el.images.original.url);
            })
            setList(listArr)
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        })
    } , [keyword])

    const handleInput = (e) => {
        setKeyword(e.target.value)
    }

    return (
    <>
        <input onChange={handleInput}/>
        { (!loading) ? list.map((gifUrl) => <Giphy url = {gifUrl}></Giphy> ) : <div> loading... </div>}
    </>
  )
}
