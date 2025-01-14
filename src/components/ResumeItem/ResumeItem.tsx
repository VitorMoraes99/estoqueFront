import React from 'react';
import * as C from "./styles";

interface ResumeItemProps {
  title: string;
  Icon: React.ElementType; 
  value: number; 
}

const ResumeItem: React.FC<ResumeItemProps> = ({ title, Icon, value }) => {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon />
      </C.Header>
      <C.Total>{value}</C.Total>
    </C.Container>
  );
};

export default ResumeItem;
