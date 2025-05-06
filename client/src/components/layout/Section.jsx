import React from 'react';
import styles from '../../styles/common.module.css';
import { combineClasses } from '../../utils/styleUtils';

/**
 * Section component for consistent layout sections
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Section content
 * @param {string} [props.id] - Section ID for navigation
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.title] - Section title
 * @param {string} [props.subtitle] - Section subtitle
 * @param {string} [props.background] - Background color class
 * @param {boolean} [props.fullWidth=false] - Whether section should be full width
 * @param {Object} [props.style] - Additional inline styles
 * @returns {JSX.Element} Section component
 */
export default function Section({ 
  children, 
  id, 
  className,
  title,
  subtitle,
  background,
  fullWidth = false,
  style,
  ...props
}) {
  return (
    <section 
      id={id}
      className={combineClasses(
        styles.section,
        background,
        className
      )}
      style={style}
      {...props}
    >
      <div className={fullWidth ? null : styles.container}>
        {(title || subtitle) && (
          <div className={styles.sectionHeader}>
            {title && <h2 className={styles.sectionTitle}>{title}</h2>}
            {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}