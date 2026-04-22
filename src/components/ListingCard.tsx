import clsx from 'clsx';
import type { CSSProperties } from 'react';
import styles from '@/components/layout.module.scss';

const { listingCard, listingCardLink, cardTitle, cardDesc, cardMeta } = styles;

export type ListingCardProps = {
  title: string;
  meta?: string;
  description?: string;
  href?: string;
  animationDelayMs?: number;
};

export function ListingCard({
  title,
  meta,
  description,
  href,
  animationDelayMs,
}: ListingCardProps) {
  const animatedStyle =
    animationDelayMs != null
      ? ({ '--card-enter-delay': `${animationDelayMs}ms` } as CSSProperties)
      : undefined;

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
        style={animatedStyle}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <article className={clsx(listingCard)} style={animatedStyle}>
      {content}
    </article>
  );
}
