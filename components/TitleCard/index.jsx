import Link from 'next/link';

export default function TitleCard({ title, btn, btntitle }) {
  return (
    <div className="card-title">
      <h3>{title}</h3>
      {btn ? (
        <button className="card-title-btn">{btntitle}</button>
      ) : (
        <Link href="/#">
          <span className="card-title-btn-text">{btntitle}</span>
        </Link>
      )}
    </div>
  );
}
