import React from 'react';
import { render } from 'react-dom';
import Downshift from 'downshift';
import { Wrapper, Label, Input, Menu, Items } from './styles';

const items = ['React', 'Angular', 'Vue', 'Ember', 'Elm', 'Backbone'];

function App() {
  return (
    <Wrapper>
      <Downshift>
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          highlightedIndex,
          selectedItem,
          openMenu
        }) => (
          <div>
            <Label {...getLabelProps()}>TextBox</Label>
            <Input>
              <input
                readOnly={true}
                placeholder="From"
                {...getInputProps({                  
                  onFocus: openMenu
                })}
              />
            </Input>
            {isOpen ? (
              <Menu {...getMenuProps()}>
                {items.map((item, index) => (
                  <Items
                    highlighted={highlightedIndex === index}
                    selected={selectedItem === item}
                    {...getItemProps({
                      key: item,
                      index,
                      item
                    })}
                  >
                    {item}
                  </Items>
                ))}
              </Menu>
            ) : null}
          </div>
        )}
      </Downshift>
    </Wrapper>
  );
}

render(<App />, document.getElementById('root'));
