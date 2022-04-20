import useSWR, { SWRConfiguration } from 'swr';
import { IPost } from '../interfaces/index';

export const usePosts = (url: string | null, config: SWRConfiguration = {}) => {

  const { data, error } = useSWR<IPost[]>(url ? `/api${url}` : null, config);

  return {
    posts: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
