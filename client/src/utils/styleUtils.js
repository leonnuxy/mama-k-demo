/**
 * Utility functions for styling and responsive design
 */

/**
 * Combines multiple CSS class names, filtering out falsy values
 * @param {...string} classes - CSS class names to combine
 * @returns {string} Combined class names as a string
 */
export function combineClasses(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Breakpoints for responsive design
 * Use these constants for consistent breakpoints across components
 */
export const breakpoints = {
  sm: '640px',  // Small devices (phones)
  md: '768px',  // Medium devices (tablets)
  lg: '1024px', // Large devices (laptops/desktops)
  xl: '1280px'  // Extra large devices (large desktops)
};

/**
 * Common animation durations and timing functions
 * Use these for consistent animations across components
 */
export const animation = {
  duration: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s'
  },
  timing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out'
  }
};

/**
 * Common spacing values (in rem)
 * Use these for consistent spacing across components
 */
export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem'
};