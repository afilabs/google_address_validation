import Tag from './Tag';

/**
 * InfoTag component to display additional information
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Tag content
 */
const InfoTag = ({ children }) => <Tag>{children}</Tag>;

export default InfoTag;
