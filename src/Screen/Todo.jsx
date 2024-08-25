import React, { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import {collection,addDoc,doc,getDocs, updateDoc,deleteDoc } from "firebase/firestore";
import database from '../Config/Firebase';

const Todo = () => {
    const [input, setInput] = useState('');
    const [items, setItems] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [currentId, setCurrentId] = useState('');

    const todosCollectionRef = collection(database, 'todos');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const data = await getDocs(todosCollectionRef);
        setItems(data.docs.map((doc) => (
            { ...doc.data(), id: doc.id }
        )));
    };


    const addItem = async () => {
        if (input) {
            await addDoc(todosCollectionRef, { text: input });
            setInput('');
            const data = await getDocs(todosCollectionRef);
            setItems(data.docs.map((doc) => (
                { ...doc.data(), id: doc.id }
            )));
        }
    };

   

    const singleDelete = async (id) => {
        await deleteDoc(doc(database, 'todos', id));
        setItems(items.filter(item => item.id !== id));
    };

    const editItem = (id, text) => {
        setEditIndex(id);
        setInput(text);
        setCurrentId(id);
    };

    const updateItem = async () => {
        await updateDoc(doc(database, 'todos', currentId), { text: input });
        setInput('');
        setEditIndex(-1);
        setCurrentId('');
        const data = await getDocs(todosCollectionRef);
        setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    return (
        <div className='main'>
            <h1>Get Things Done!</h1>
            <br />
            <input value={input} type="text" placeholder='What is the task today?' className='inp1' onChange={(e) => setInput(e.target.value)}/>
           
            {
            editIndex === -1 ? (
                <button className='todo-btn1' onClick={addItem}>Add</button>
            ) : (
                <button className='todo-btn1' onClick={updateItem}>Edit</button>
            )}

    

            {
            items.map((i) => (
                <div key={i.id} className='todos'>
                    <p>{i.text}</p>
                    <div>
                        <FaEdit className='edit-icon' onClick={() => editItem(i.id, i.text)} />
                        <MdDelete className='delete-icon' onClick={() => singleDelete(i.id)} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Todo;
