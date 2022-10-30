import React from 'react';

function HamburgerButton(props) {
  const width = props.width || 40;
  const height = props.height || 30;
  const halfHeight = Math.round(height / 2);
  const isOpen = props.open || false;
  const strokeWidth = props.strokeWidth || 2;
  const halfStrokeWidth = Math.round(strokeWidth / 2);
  const animationDuration = props.animationDuration || 0.4;

  const getTransformValue = (isOpen, basePos, rotate, halfHeight) => {
    return `translate3d(0,${isOpen ? halfHeight + 'px' : basePos + 'px'},0) rotate(${
      isOpen ? `${rotate}deg` : '0'
    })`;
  };

  const containerStyle = {
    width,
    height,
    position: 'relative',
  };

  const baseStyle = {
    display: 'block',
    height: `${strokeWidth}px`,
    width: '100%',
    background: props.color || '#000',
    transitionTimingFunction: 'ease',
    transitionDuration: `${animationDuration}s`,
    transformOrigin: 'center',
    position: 'absolute',
    marginTop: -halfStrokeWidth,
  };

  const firstLineStyle = {
    transform: getTransformValue(isOpen, 0, '45', halfHeight),
  };

  const secondLineStyle = {
    transitionTimingFunction: 'ease-out',
    transitionDuration: `${animationDuration / 4}s`,
    opacity: isOpen ? 0 : 1,
    top: halfHeight,
  };

  const thirdLineStyle = {
    transform: getTransformValue(isOpen, height, '-45', halfHeight),
  };

  return (
    <div style={containerStyle} onClick={props.onClick} className={props.className}>
      <span style={{ ...baseStyle, ...firstLineStyle }} />
      <span style={{ ...baseStyle, ...secondLineStyle }} />
      <span style={{ ...baseStyle, ...thirdLineStyle }} />
    </div>
  );
}

export default HamburgerButton;
