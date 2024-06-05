import { FC, ReactNode } from 'react';

interface FormSectionProps {
  children: ReactNode;
}
const FormSection: FC<FormSectionProps> = ({ children }) => (
  <div className="flex flex-col mt-[16px]">{children}</div>
);

export default FormSection;
