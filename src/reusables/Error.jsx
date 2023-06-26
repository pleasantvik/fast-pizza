import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();

  console.log(error);

  return (
    <div>
      <h1>{error?.data || error?.message}😢</h1>
      <p>%MESSAGE%</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
