import { ReactNode } from 'react';

interface TextProps {
   className?: string;
   children: ReactNode;
}

export const Text = (props: TextProps) => {
   const { className, children } = props;
   return <p className={`${className} text-balance`}>{children}</p>;
};
