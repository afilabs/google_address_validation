import Tag from './Tag';

/**
 * TagLevel component to display component levels
 * @param {Object} props - Component props
 * @param {string} props.level - Component level
 */
const TagLevel = ({ level }) => {
  if (level === 'CONFIRMED') {
    return <Tag color="green">CONFIRMED</Tag>;
  }
  if (level === 'UNCONFIRMED_BUT_PLAUSIBLE') {
    return <Tag color="orange">PLAUSIBLE</Tag>;
  }
  if (level === 'UNCONFIRMED_AND_SUSPICIOUS') {
    return <Tag color="red">SUSPICIOUS</Tag>;
  }
  return <Tag>UNKNOWN</Tag>;
};

export default TagLevel;
