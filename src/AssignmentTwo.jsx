import React, { useState } from 'react'

const AssignmentTwo = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [data, setData] = useState([]);
    console.log(data)

    const handleChange = (e) => {

        const { name, value } = e.target;
        if (name === "name") {
            setName(value)
        }
        else if (name === "age") {
            setAge(value)
        }
        console.log(name, "name")
    };

    const handelClick = () => {
        const obj = {
            name: name,
            age: age,
        }
        setData([...data, obj])
        setName[""];
        setAge[""];
        console.log(setAge,setName)
    }
        return (
            <div>


                <input type='text' name="name" value={name} onChange={handleChange} />
                <input type='text' name="age" value={age} onChange={handleChange} />

                <button onClick={handelClick}>Submit</button>

                {data.map((element, index) => (
                    <p key={index}>Name: {element.name},Age: {element.age} ,</p>
                )

                )}
            </div>
        )
    }
    

    export default AssignmentTwo