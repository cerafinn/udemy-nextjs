import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>Projects of Given Client</h1>
    </div>
  )
}

export default ClientProjectsPage;