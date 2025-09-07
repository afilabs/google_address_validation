/**
 * Tag component to display labels
 * @param {Object} props - Component props
 * @param {string} props.color - Tag color (green, orange, red)
 * @param {React.ReactNode} props.children - Tag content
 */
const Tag = ({ color, children }) => (
  <span className={`tag ${color ? `tag--${color}` : ''}`}>{children}</span>
);

export default Tag;
