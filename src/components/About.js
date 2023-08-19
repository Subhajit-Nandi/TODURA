import React from 'react';
import noteContext from '../context/notes/noteContext';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary container">
            <div class="col-lg-6 px-0">
                <h1 class="display-4 fst-italic">About TODURA</h1>
                <p class="lead my-3">TODURA is a good helper to manage your schedules and notes.
                    It gives you a quick and simple notepad editing experience when you write notes,
                    memo, email, message, shopping list and to do list. It makes to take a note easier
                    than any other notepad and memo apps.</p>
                <p class="lead my-3">You also can cloud sync the notes. Let your notes more simpler and securer..</p>
                <p class="lead mb-0"><Link to="/signup" class="text-body-emphasis fw-bold">Click to Sign Up</Link></p>
            </div>
        </div>
    )
}

export default About
