/**
 * Card component to wrap content
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content inside card
 */
const Card = ({ children }) => <div className="card">{children}</div>;

export default Card;
