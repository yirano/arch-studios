import { FunctionComponent, ReactNode } from 'react';

interface ComponentWrapperProps {
  children: ReactNode,
  customClass?: string,
}
const ComponentWrapper: FunctionComponent<ComponentWrapperProps> = ({ children, customClass }) => {
  return (
    <div className={`py-[100px] ${customClass}`}>{children}</div>
  );
};

export default ComponentWrapper;