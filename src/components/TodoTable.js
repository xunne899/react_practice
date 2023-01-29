import TodoRowItem from './TodoRowItem'

const TodoTable = (props) => {
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope='col' >#</th>
                        <th scope='col' >Description</th>
                        <th scope='col' >Assigned</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.todos.map(todos=>(
                            <TodoRowItem
                               key={todos.rowNumber}
                               rowNumber={todos.rowNumber}
                               rowDescription={todos.rowDescription}
                               rowAssigned={todos.rowAssigned}
                               deleteTodo={props.deleteTodo}
                               />
                        ))
                    }
                    {/* <TodoRowItem
                        rowNumber={props.todos[0].rowNumber}
                        rowDescription={props.todos[0].rowDescription}
                        rowAssigned={props.todos[0].rowAssigned} />
                    <TodoRowItem
                        rowNumber={props.todos[1].rowNumber}
                        rowDescription={props.todos[1].rowDescription}
                        rowAssigned={props.todos[1].rowAssigned} />
                    <TodoRowItem
                        rowNumber={props.todos[2].rowNumber}
                        rowDescription={props.todos[2].rowDescription}
                        rowAssigned={props.todos[2].rowAssigned} />
                    <TodoRowItem
                        rowNumber={props.todos[3].rowNumber}
                        rowDescription={props.todos[3].rowDescription}
                        rowAssigned={props.todos[3].rowAssigned} /> */}
                </tbody>

            </table>
        </>
    )
}

export default TodoTable