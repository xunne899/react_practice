const TodoRowItem = (props) =>{

    // const rowNumber = 1;
    // const rowDescription ="Feed Dog";
    // const rowAssigned = "Eric"
    return(
        <>
        <tr onClick={()=> props.deleteTodo}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
         
        </tr>
           
        </>
    )
}

export default TodoRowItem