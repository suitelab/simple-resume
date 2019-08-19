import React from 'react';
import * as icons from 'react-icons/fa';
import styled from 'styled-components';

export * from './ProgressBar';
export const Section = styled.section`
  padding: 0 2rem;
`;

export const SectionTitle = styled.h2`
`;

const StyledHeadline = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-bottom: 2px solid #3a7bd5;
`;

export const HeadLine = ({ icon, title }: { icon: string, title: string }) => {
  return (
    <StyledHeadline>
      <StyledH2>
        <FaIcon
          icon={icon}
          verticalAlign='-.5rem'
          marginRight='1rem'
          size='50'
        />
        {title}
      </StyledH2>
    </StyledHeadline>
  );
};

export const Contents = styled.div`
  padding: 1rem 0rem 1rem;
  border-bottom: 1px solid #eeeeee;
`;

export const Row = styled(Contents)`
  display: flex;
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
  margin: 1rem 0 1rem 0;
`;

export const StyledH5 = styled.h5`
  font-size: 1.3rem;
  margin: 0.5rem 0 0.5rem 0;
  color: #333333;
`;

interface FaIconProps {
  icon: string;
  verticalAlign?: string;
  marginLeft?: string;
  marginRight?: string;
  size?: string;
}

export const FaIcon = ({ icon, verticalAlign, marginRight, marginLeft, size }: FaIconProps) => {
  try {
    const Result = (icons as any)[icon];
    return (
      <Result style={{ verticalAlign, marginRight, marginLeft }} size={size} />
    );
  } catch {
    return <></>;
  }

};

interface DateProps {
  start: string;
  end?: string;
}

export const Date = ({ start, end }: DateProps) => {
  return (
    <StyledTime>
      <time dateTime={start}>
        {start}
      </time>
      {
        end &&
        <>
          -
          <time dateTime={end}>
            {end}
          </time>
        </>
      }
    </StyledTime>
  );
};

export const StyledTime = styled.span`
  display: block;
  margin-bottom: 1.5rem;
`;

export const StyledP = styled.p`
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  line-height: 1.4;
`;
