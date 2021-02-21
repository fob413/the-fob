import React from 'react';
import styled from 'styled-components';


const Text = styled.span`
  margin: ${({ margin }) => margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign || 'center'};
  font-size: ${(props) => props.fontSize || '18px'};
  font-family: Inter;
  font-weight: ${(props) => props.fontWeight || '300'};
  line-height: ${(props) => props.lineHeight || '25px'};
  color: ${(props) => props.color || '#000'};
  font-style: ${(props) => props.fontStyle || 'normal'};
`;

const Typography = ({ text, sup, ...props }) => {
    return (
        sup ?  <Text {...props}>{text}<sup>{sup}</sup></Text>: <Text {...props}>{text}</Text>
    )
}

export default Typography;
