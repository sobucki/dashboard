import { useEffect, useState } from 'react';
import ColumnSelector from './section/ColumnSelector';
import { Container, ButtonsArea } from './styles';
import { Item } from './types';

export interface ItemSelectorColumnProps {
  sourceData: Item[];
  selectedData: Item[];
}

function ItemSelectorColumn({
  sourceData,
  selectedData,
}: ItemSelectorColumnProps) {
  const [originData, setOriginData] = useState<Item[]>([]);
  const [destinyData, setDestinyData] = useState<Item[]>([]);

  useEffect(() => {
    setOriginData(
      sourceData.map((item) =>
        selectedData.find((selectedItem) => selectedItem.id === item.id)
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
    setDestinyData(selectedData.map((item) => ({ ...item, selected: true })));
  }, [sourceData, selectedData]);

  useEffect(() => {
    setOriginData(
      sourceData.map((item) =>
        destinyData.find((selectedItem) => selectedItem.id === item.id)
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
  }, [destinyData, sourceData]);

  const addAll = () => {
    setDestinyData(originData.map((item) => ({ ...item, selected: true })));
  };

  const removeAll = () => {
    setDestinyData([]);
  };

  return (
    <Container>
      <ColumnSelector
        onChange={(items) => {
          setDestinyData(items.filter((item) => item.selected));
          setOriginData(items);
        }}
        data={originData}
      />
      <ButtonsArea>
        <button onClick={addAll}>Add all</button>
        <button onClick={removeAll}>Remove all</button>
        <button>Add</button>
      </ButtonsArea>
      <ColumnSelector
        onChange={(items) =>
          setDestinyData(items.filter((item) => item.selected))
        }
        isDestinyColumn
        data={destinyData}
      />
    </Container>
  );
}

export default ItemSelectorColumn;
