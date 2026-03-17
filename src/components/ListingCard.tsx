import clsx from 'clsx';
import styles from '@/components/layout.module.scss';

const { listingCard, listingCardLink, cardTitle, cardDesc, cardMeta } = styles;

export type ListingCardProps = {
  title: string;
  meta?: string;
  description?: string;
  href?: string;
};

export function ListingCard({ title, meta, description, href }: ListingCardProps) {
  const content = (
    <>
      <h2 className={clsx(cardTitle)}>{title}</h2>
      {meta != null && meta !== '' && (
        <span className={clsx(cardMeta)}>{meta}</span>
      )}
      {description != null && description !== '' && (
        <p className={clsx(cardDesc)}>{description}</p>
      )}
    </>
  );

  if (href) {
    return (
      <a
        className={clsx(listingCard, listingCardLink)}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return <article className={clsx(listingCard)}>{content}</article>;
}
