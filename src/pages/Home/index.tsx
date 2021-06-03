import { useEffect, useState } from 'react';
import ItemSelectorColumn from '../../components/ItemSelectorColumn';
import { Item } from '../../components/ItemSelectorColumn/types';
import { api } from '../../services/api';
import { Meme } from '../../services/types';

function Home() {
  const [memes, setMemes] = useState<Item[]>([]);

  const [selected, setSelected] = useState([
    {
      id: 5,
      url: 'https://www.ahnegao.com.br/wp-content/uploads/2021/05/sabadaco-meme-5.jpg',
      selected: false,
    },
  ]);

  async function loadMemes(): Promise<void> {
    const response = await api.get<Meme[]>('memes');
    setMemes(
      response.data.map((item) => ({
        id: item.id,
        url: item.link,
        selected: false,
      }))
    );
  }

  useEffect(() => {
    loadMemes();
  }, []);

  return (
    <ItemSelectorColumn
      sourceData={memes}
      selectedData={selected}
      onSave={(items) => console.log(items)}
    />
  );
}

export default Home;
