import { api } from './api';
import { Category } from './types';

export const loadCategoryList = async (): Promise<Category[] | undefined> => {
  try {
    const response = await api.get<Category[]>('category');
    return response.data;
  } catch (error) {
    console.log('error', error);
  }
};

export const createCategory = async ({
  description,
  file,
}: {
  description: string;
  file: File;
}) => {
  try {
    const form = new FormData();
    form.append('avatar', file);

    const newCategory = await api.post<Category>('category', { description });

    const updatedCategory = await api.patch<Category>(
      `category/${newCategory.data.id}`,
      form,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return updatedCategory;
  } catch (error) {
    console.log('error', error);
  }
};
