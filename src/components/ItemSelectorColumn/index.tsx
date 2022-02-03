import { useEffect, useState } from 'react';
import ColumnSelector from './section/ColumnSelector';
import { Item } from './types';
import { Container, ButtonsArea } from './styles';

export interface ItemSelectorColumnProps {
  sourceData: Item[];
  selectedData: Item[];
  onChange: (items: Item[]) => void;
}

function ItemSelectorColumn({
  sourceData,
  selectedData,
  onChange,
}: ItemSelectorColumnProps) {
  const [originData, setOriginData] = useState<Item[]>([]);
  const [destinyData, setDestinyData] = useState<Item[]>([...selectedData]);

  useEffect(() => {
    setOriginData(
      sourceData.filter(
        (item) =>
          !destinyData.find((selectedItem) => item.id === selectedItem.id)
      )
    );
  }, [sourceData, destinyData]);

  const addAll = () => {
    onChange([...destinyData, ...originData]);
    setDestinyData([...destinyData, ...originData]);
    setOriginData([]);
  };

  const removeAll = () => {
    onChange([]);
    setOriginData([...originData, ...destinyData]);
    setDestinyData([]);
  };

  const moveToDestiny = (item: Item) => {
    onChange([...destinyData, item]);

    setDestinyData([...destinyData, item]);
    setOriginData(originData.filter((data) => data.id !== item.id));
  };
  const moveToOrigin = (item: Item) => {
    onChange(destinyData.filter((data) => data.id !== item.id));

    setOriginData([...originData, item]);
    setDestinyData(destinyData.filter((data) => data.id !== item.id));
  };

  return (
    <Container>
      <ColumnSelector
        onChange={(item) => moveToDestiny(item)}
        data={originData}
      />
      <ButtonsArea>
        <button onClick={addAll}>Add all</button>
        <button onClick={removeAll}>Remove all</button>
      </ButtonsArea>
      <ColumnSelector
        onChange={(item) => moveToOrigin(item)}
        data={destinyData}
      />
    </Container>
  );
}

export default ItemSelectorColumn;
