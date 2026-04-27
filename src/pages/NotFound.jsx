import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="placeholder-page bg-bgAlt px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-content rounded-card border border-border bg-white p-8 shadow-card">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
          Dr. Rahul Tengse Website
        </p>
        <h1 className="font-heading text-3xl font-bold text-navy md:text-4xl">Page Not Found</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted">The page you are looking for is not available.</p>
        <Link
          to="/"
          className="mt-6 inline-flex min-h-11 items-center rounded-btn bg-teal px-5 text-sm font-semibold text-white shadow-card hover:bg-navy"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
