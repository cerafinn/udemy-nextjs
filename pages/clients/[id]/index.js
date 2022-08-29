import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProject() {
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'projecta'}
    });
  }

  return (
    <div>
      <h1>Projects of Given Client</h1>
      <button onClick={loadProject}>Load Project A</button>
    </div>
  )
}

export default ClientProjectsPage;