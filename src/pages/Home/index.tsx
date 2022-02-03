import { Box, Button, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import CategoryCard from '../../components/CategoryCard';
import ItemSelectorColumn from '../../components/ItemSelectorColumn';
import { Item } from '../../components/ItemSelectorColumn/types';
import LoadingContainer from '../../components/LoadingContainer';
import { api } from '../../services/api';
import { Post } from '../../services/types';
import { BottomContainer, Container, WrapCollectionController } from './styles';

function Home() {
  const [memes, setMemes] = useState<Item[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post>();
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);

  const [selected, setSelected] = useState<Item[]>([]);

  async function loadMemes(id: string): Promise<void> {
    try {
      setLoading(true);
      const response = await api.get<Post>(`post/${id}`);
      if (response.data.Meme) {
        setMemes(
          response.data.Meme?.map<Item>((item) => ({
            id: item.id,
            url: item.link,
          }))
        );
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  }

  async function loadPosts(): Promise<void> {
    try {
      setLoading(true);
      const response = await api.get<Post[]>('post');
      setPosts(response.data);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    if (selectedPost) {
      loadMemes(selectedPost.id);
    }
  }, [selectedPost]);

  useEffect(() => {
    if (posts && posts.length > index) setSelectedPost(posts[index]);
  }, [index, posts]);

  if (loading) return <LoadingContainer />;

  return (
    <Container>
      <ItemSelectorColumn
        sourceData={memes}
        selectedData={selected}
        onChange={(items) => setSelected(items)}
      />
      <BottomContainer>
        <Box flexDirection="column" display="flex" flex="1" alignItems="center">
          <Typography variant="h6">
            Coleção{' '}
            {selectedPost && new Date(selectedPost?.date).toDateString()}
          </Typography>
          <WrapCollectionController>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIndex(index - 1)}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIndex(index + 1)}
            >
              Next
            </Button>
          </WrapCollectionController>
        </Box>
        <Box flexDirection="column" display="flex" flex="1">
          <CategoryCard />
          <WrapCollectionController>
            <Button variant="contained">Cancel</Button>
            <Button variant="contained" color="primary">
              Save
            </Button>
          </WrapCollectionController>
        </Box>
      </BottomContainer>
    </Container>
  );
}

export default Home;
