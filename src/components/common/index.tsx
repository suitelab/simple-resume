import React from 'react';
import * as icons from 'react-icons/fa';
import styled from 'styled-components';

export const Section = styled.section`
  padding: 0 2rem;
`;

export const Row = styled.div`
  display: flex;
  padding: 3rem 0;
  border-bottom: 1px solid #eeeeee;
`;

export const RowLeft = styled.div`
  flex-basis: 18rem;
  padding-right: 1rem;
  flex-shrink: 0;
`;

export const RowRight = styled.div`
  flex-grow: 1;
`;

export const StyledUl = styled.ul`
  list-style:none;
  padding:0;
  margin:0 0 1rem;
  font-size:1.1rem;
`;

export const ALink = styled.a`
  color: #3a7bd5;
  transition: color 0.3s ease;
  &:hover {
    color: #00d2ff;
  }
`;

export const StyledLi = styled.li`
  ${StyledUl} > & {
    position:relative;
    padding:.2rem 0 0rem 1rem;
  }
  &:before {
    position:absolute;
    left:0;
    display:inline-block;
    content:"•";
    color:#3a7bd5;
  }
`;

export const StyledH2 = styled.h2`
  font-size:2.5rem;
  margin:3rem 0 2rem;
`;

export const StyledH3 = styled.h3`
  font-size: 2rem;
  margin: 0 0 1rem 0;
`;

export const StyledH4 = styled.h4`
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
`;

export const FaIcon = ({ icon, verticalAlign, marginRight }: { icon: string, verticalAlign?: string, marginRight?: string }) => {
  try {
    const Result = (icons as any)[icon];
    return (
      <Result style={{ verticalAlign, marginRight }} />
    );
  } catch {
    return <></>;
  }

};