import { FC, ReactNode } from 'react';

interface HeadingProps {
  size: 'sm' | 'md' | 'lg' | 'xl',
  type: 'h1' | 'h2' | 'h3' | 'h4',
  color?: 'primary' | 'secondary',
  children: ReactNode;
}

const Heading: FC<HeadingProps> = ({ size = "md", color = "secondary", type, children }) => {
  const HeadingComponent = type;
  const styles = `text-heading-${size} text-${color}`;

  return (
    <HeadingComponent className={styles}>
      {children}
    </HeadingComponent>
  );
};

export default Heading;