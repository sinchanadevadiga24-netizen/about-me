import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="container section center">
      <h1 className="page-title">404</h1>
      <p className="lead-sm">That page does not exist.</p>
      <Link to="/" className="btn btn--primary">
        Back home
      </Link>
    </section>
  );
}