import React, { Component } from 'react';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import './App.css';
import CircleImage from './components/CircleImage';
import InstaPost from './components/InstaPost';
import Editable from './components/Editable';

const DraggableColumn = sortableElement(({ value }) => <div className="draggable-column">{value}</div>);

const SortableContainer = sortableContainer(({ children }) => {
  return <div className="draggable-container">{children}</div>;
});

class App extends Component {
  state = {
    items: [<CircleImage />, <InstaPost />]
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex)
    }));
  };

  render() {
    const { items } = this.state;

    if (localStorage.getItem('dragged') === null) {
      localStorage.setItem('dragged', JSON.stringify({ items }));
    }
    console.log(items);

    let savedColumns = JSON.parse(localStorage.getItem('dragged'));
    for (var columnIndex in savedColumns) {
      // items.push(savedColumns[columnIndex]);
    }

    function handleColumnDrag(sourceIndex, destinationIndex) {
      const sourceColumn = savedColumns[sourceIndex];
      const destinationColumn = savedColumns[destinationIndex];

      // Swapping the column order
      savedColumns[sourceIndex] = destinationColumn;
      savedColumns[destinationIndex] = sourceColumn;
      localStorage.setItem('dragged', JSON.stringify(savedColumns));
    }

    return (
      <div className="App">
        <div className="wrapper">
          <div className="column">
            <Editable />
          </div>
          <SortableContainer onSortEnd={this.onSortEnd} axis="x" lockAxis="x">
            {items.map((value, index) => (
              <DraggableColumn key={`item-${index}`} index={index} value={value} />
            ))}
          </SortableContainer>
        </div>
      </div>
    );
  }
}

export default App;
