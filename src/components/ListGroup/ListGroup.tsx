import { useState } from "react";
import styles from './ListGroup.module.css'
import styled from 'styled-components'

const List = styled.ul`
    list-style: none;
    padding: 0;
`
interface ListItemProps {
  active: boolean;
}


const ListItem = styled.li<ListItemProps>`
    padding: 20px;
    color: blue;
    background-color: ${props => props.active ? 'gold' : 'none'};
    display: inline;
    position: relative;
    `

  interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void}
    
function ListGroup({items, heading, onSelectItem }: Props) {
    //hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    
    return (
        <>
          <h1>{heading}</h1>
          { items.length === 0 && <p>No item found</p>}
          <List>
            {items.map((item, index) =>(
                <ListItem 
                     active={index === selectedIndex}
                    key={item} 
                    onClick={() => {
                    setSelectedIndex(index)
                    onSelectItem(item)}}
            >{item}</ListItem>
            ))}
          </List>
        </>
    );
}

export default ListGroup;