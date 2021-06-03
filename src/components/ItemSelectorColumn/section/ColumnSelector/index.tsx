import { Item } from '../../types';
import { Container, ImageContainer } from './styles';

export interface ColumnSelectorProps {
  onChange: (item: Item) => void;
  data: Item[];
}

function ColumnSelector({ onChange, data }: ColumnSelectorProps) {
  return (
    <Container>
      {data.map((item) => (
        <ImageContainer
          urlImage={item.url}
          key={item.id}
          onClick={(id) => onChange(item)}
        />
      ))}
    </Container>
  );
}

export default ColumnSelector;
