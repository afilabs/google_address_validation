/**
 * Alert component to display notifications
 * @param {Object} props - Component props
 * @param {string} props.type - Alert type (info, warning, error)
 * @param {string} props.message - Notification message
 */
const Alert = ({ type = 'info', message }) => (
  <div className={`alert alert--${type}`}>
    <span className="alert__icon" aria-hidden>
      {type === 'info' ? 'ℹ️' : type === 'warning' ? '⚠️' : '❌'}
    </span>
    <span>{message}</span>
  </div>
);

export default Alert;
