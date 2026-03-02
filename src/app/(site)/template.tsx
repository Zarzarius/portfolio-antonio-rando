import styles from '@/components/layout.module.scss';

export default function SiteTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.pageTransition}>{children}</div>;
}
