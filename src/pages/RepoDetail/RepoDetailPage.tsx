import { useParams } from 'react-router-dom';

function RepoDetailPage() {
  const { name } = useParams<{ name: string }>();
  return <h2>Details for repository: {name}</h2>;
}

export default RepoDetailPage;
