function List({items}){
    const ListItem = items.map((i)=><li key={i}>{i}</li>)
    return(
            <ul>{ListItem}</ul>
    )
}
export default List