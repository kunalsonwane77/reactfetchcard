import React, { useEffect, useState } from 'react'
import Datamap from './Datamap'
import load from "./load.webp"
import "./carddata.css"
function Dataholder() {
    let [post, setpost] = useState([])
    let [page, setpage] = useState(0)
    let [loading, setloading] = useState(false)

    useEffect(() => {
        handlepost()
    }, [page])


    let getdata = (url) => {
        return fetch(url).then((res) => res.json())
    }




    async function handlepost() {
        try {

            setloading(true)
            let data = await getdata(`https://jsonplaceholder.typicode.com/comments?_limit=10&_page=${page}`)

            setpost(data)

        } catch (error) {
            console.log("error while fetching data")
        }

        setloading(false)


    }

    function handlepriv() {
        setpage(page - 1)
    }

    function handlenext() {
        setpage(page + 1)
    }

    if (loading) {
        return (
            <div>
                <img src={load} alt="" />
                <h1>...Loading</h1>
            </div>
        )

    }



    return (
        <div >
            <div className='btncontainer'>
                <button disabled={page <= 1 ? true : false} onClick={handlepriv}>prev</button> <h1>{page}</h1>  <button disabled={page == 10 ? true : false} onClick={handlenext}>next</button>

            </div>

            <div className='cardcontainer'>
                {post.map((el) => {
                    return <Datamap name={el.name} email={el.email} body={el.body} key={el.id} post={el.postId} />
                })}
            </div>

        </div>
    )
}

export default Dataholder