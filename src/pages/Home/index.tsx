import { useEffect, useState } from 'react';
import ItemSelectorColumn from '../../components/ItemSelectorColumn';
import { Item } from '../../components/ItemSelectorColumn/types';
import { api } from '../../services/api';
import { Meme } from '../../services/types';
import {
  BottomContainer,
  Container,
  WrapCollectionController,
  Button,
} from './styles';

function Home() {
  const [memes, setMemes] = useState<Item[]>([]);

  const [selected] = useState([
    {
      id: 5,
      url: 'https://www.ahnegao.com.br/wp-content/uploads/2021/05/sabadaco-meme-5.jpg',
    },
  ]);

  async function loadMemes(): Promise<void> {
    const response = await api.get<Meme[]>('memes');
    setMemes(
      response.data.map<Item>((item) => ({
        id: item.id,
        url: item.link,
      }))
    );
  }

  useEffect(() => {
    loadMemes();
  }, []);

  return (
    <Container>
      <ItemSelectorColumn
        sourceData={memes}
        selectedData={selected}
        onChange={(items) => console.log(items)}
      />
      <BottomContainer>
        <WrapCollectionController>
          <Button>Previous</Button>
          <Button>Next</Button>
        </WrapCollectionController>
        <Button style={{ flex: 1 }}>Save</Button>
      </BottomContainer>
    </Container>
  );
}

export default Home;
