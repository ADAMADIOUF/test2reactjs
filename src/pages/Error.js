import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section'>
      <h2>Error</h2>
      <p>page not found</p>
      <Link to={`/`} className="btn">
        Back home
      </Link>
    </section>
  );
};
export default Error;
