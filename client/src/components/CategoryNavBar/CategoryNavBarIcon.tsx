import React from 'react';
import styled from 'styled-components';

const unstyledButton = styled.button`
  background: none;
  color: inherit;
  padding: 0;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`

// TODO: update icon placeholder div to images
// TODO: add on hover styling
const Icon = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  background: ${props => props.isActive ? '#3e91d3' : '#a5c7c6'};
  width: ${props => props.isActive ? '70%' : '50%'};
  height: ${props => props.isActive ? '70%' : '50%'};
  border-radius: 50px;
`

// TODO: update width and height to be dynamic
const IconBackground = styled.div`
  background: #c1e1dc;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`

const IconButton = styled(unstyledButton)`
  position: relative;
`

interface IProps {
  onClick: () => void;
  isActive: boolean;
}

class CategoryNavBarIcon extends React.Component<IProps> {
  public render() {
    const { onClick, isActive } = this.props;

    return (
      <IconButton onClick={onClick}>
        <Icon isActive={isActive} />
        <IconBackground />
      </IconButton>
    );
  }
}

export default CategoryNavBarIcon;