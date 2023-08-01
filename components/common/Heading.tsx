import { FC, ReactNode } from 'react';

interface HeadingProps {
  size: 'sm' | 'md' | 'lg' | 'xl',
  type: 'h1' | 'h2' | 'h3' | 'h4',
  color?: 'primary' | 'secondary',
  children: ReactNode;
  customClass?: string;
}

const Heading: FC<HeadingProps> = ({ size = "md", color = "secondary", type, children, customClass }) => {
  const HeadingComponent = type;
  const styles = `text-heading-${size} text-${color}`;

  return (
    <HeadingComponent className={`${styles} ${customClass}`}>
      {children}
    </HeadingComponent>
  );
};

export default Heading;