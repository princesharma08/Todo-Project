import React, { useState } from 'react'

function TodoList() {
    const [activity, setActivity] = useState("");
    const [listData, setlistData] = useState([]);

    function addActivity() {
        setlistData((listData) => {
            const updatedList = [...listData, activity]
            console.log(updatedList)
            setActivity('');
            return updatedList
        })
    }

    function removeActivity(i) {
            const updateListData = listData.filter((elem, id)=>{
                return i!==id;
            })
    }
    function removeAll() {
        setlistData([])
    }
    return (
        <>
        <div className="container">
            <div className="header">Todo List</div>
            <input type="text" placeholder="Add Activity" value={activity} onCharge={(e) =>setActivity(e.target.value)}/>
            <button onclick={addActivity}>Add</button>
            <p className='List-heading'>Here is your List:{")"}</p>
            {listData!==[] && listData.map((data, i) =>{
                return(
                    <>
                    <p key={i}>
                        <div className='listData'>{data}</div>
                        <div className='btn-position'><button onclick={()=>removeActivity(i)}>remove(-)</button></div>
                    </p>
                    </>
                )
            })}
            {listData.length>=1 && <button onclick={removeAll}>Remove All</button>}
        </div>
        </>
    )
}

export default TodoList;