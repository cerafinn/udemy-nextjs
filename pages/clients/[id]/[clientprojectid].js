import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Selected Project of Given Client Page</h1>
    </div>
  )
}

export default SelectedClientProject;