function App() {
    return (
        <>
            <aside>
                <h2>Your projects</h2>
                <button type="button">+ Add project</button>
                <ul>
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                </ul>
            </aside>

            <section id="no-project-selected-panel">
                <img src="" alt="" />
                <h3>No Project Selected</h3>
                <p>Select a project or get started with a new one</p>
                <button type="button">Create new project</button>
            </section>

            <section id="create-project-panel">
                <ul>
                    <li>
                        <button type="button">Cancel</button>
                    </li>
                    <li>
                        <button type="button">Save</button>
                    </li>
                </ul>
                <form>
                    <div>
                        <label>Title</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label>Description</label>
                        <textarea></textarea>
                    </div>

                    <div>
                        <label>Due date</label>
                        <input type="date" />
                    </div>
                </form>
            </section>

            <section id="project-panel">
                <ul>
                    <li>
                        <h1>Learning react</h1>
                    </li>
                    <li>
                        <button type="button">Delete</button>
                    </li>
                </ul>
                <p>Dec 29, 2024</p>
                <p>Learn React from group up. Start with the basics, finish with advanced knowledge</p>
                <hr />

                <section id="project-panel">
                    <h2>Tasks</h2>
                    <div>
                        <div>
                            <input type="text" />
                            <button type="button">Add task</button>
                        </div>
                        <ul>
                            <li>
                                <span>Learn the basics</span>
                                <button type="button">Clear</button>
                            </li>
                            <li>
                                <span>Learn advanced concepts</span>
                                <button type="button">Clear</button>
                            </li>
                            <li>
                                <span>Practice, practice, practice</span>
                                <button type="button">Clear</button>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </>
    );
}

export default App;
