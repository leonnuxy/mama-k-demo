import React from 'react';
import styles from '../../styles/common.module.css';
import { combineClasses } from '../../utils/styleUtils';

/**
 * Button component for consistent button styling
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Button content
 * @param {string} [props.className] - Additional CSS classes
 * @param {'primary'|'secondary'|'outline'} [props.variant='primary'] - Button variant
 * @param {'button'|'submit'|'reset'} [props.type='button'] - Button type attribute
 * @param {Function} [props.onClick] - Click handler
 * @param {boolean} [props.disabled=false] - Disabled state
 * @param {boolean} [props.fullWidth=false] - Whether button should be full width
 * @param {string} [props.size='md'] - Button size (sm, md, lg)
 * @param {Object} [props.style] - Additional inline styles
 * @returns {JSX.Element} Button component
 */
export default function Button({
  children,
  className,
  variant = 'primary',
  type = 'button',
  onClick,
  disabled = false,
  fullWidth = false,
  size = 'md',
  style,
  ...props
}) {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return styles.buttonPrimary;
      case 'secondary':
        return styles.buttonSecondary;
      case 'outline':
        return styles.buttonOutline;
      default:
        return styles.buttonPrimary;
    }
  };
  
  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return styles.buttonSm;
      case 'lg':
        return styles.buttonLg;
      default:
        return ''; // Default is md size (defined in base button class)
    }
  };
  
  return (
    <button
      type={type}
      className={combineClasses(
        styles.button,
        getVariantClass(),
        getSizeClass(),
        fullWidth && styles.buttonFullWidth,
        disabled && styles.buttonDisabled,
        className
      )}
      onClick={onClick}
      disabled={disabled}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}