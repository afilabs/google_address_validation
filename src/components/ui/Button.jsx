/**
 * Basic Button component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content inside button
 * @param {Function} props.onClick - Click handler function
 * @param {boolean} props.loading - Loading state
 * @param {string} props.type - Button type (primary, secondary)
 * @param {boolean} props.block - Whether button takes full width
 */
const Button = ({ children, onClick, loading, type = 'primary', block }) => (
  <button
    className={`btn ${type === 'primary' ? 'btn-primary' : 'btn-secondary'} ${block ? 'w-100' : ''}`}
    onClick={onClick}
    disabled={loading}
  >
    {loading ? 'Loading…' : children}
  </button>
);

export default Button;
