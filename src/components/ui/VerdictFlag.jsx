/**
 * Component to display verdict flags with icons
 * @param {Object} props - Component props
 * @param {string} props.type - Type of flag (valid, warning, info, error)
 * @param {boolean} props.on - Whether the flag is active
 * @param {string} props.text1 - Text when flag is active
 * @param {string} props.text2 - Text when flag is inactive
 */
const VerdictFlag = ({ type, on, text1, text2 }) => {
  const getIcon = () => {
    switch (type) {
      case 'valid':
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2972_6307)">
              <path
                d="M15.9993 2.66675C8.63935 2.66675 2.66602 8.64008 2.66602 16.0001C2.66602 23.3601 8.63935 29.3334 15.9993 29.3334C23.3594 29.3334 29.3327 23.3601 29.3327 16.0001C29.3327 8.64008 23.3594 2.66675 15.9993 2.66675ZM15.9993 26.6667C10.1193 26.6667 5.33268 21.8801 5.33268 16.0001C5.33268 10.1201 10.1193 5.33341 15.9993 5.33341C21.8793 5.33341 26.666 10.1201 26.666 16.0001C26.666 21.8801 21.8793 26.6667 15.9993 26.6667ZM22.1194 10.1067L13.3327 18.8934L9.87935 15.4534L7.99935 17.3334L13.3327 22.6667L23.9993 12.0001L22.1194 10.1067Z"
                fill="#58A942"
              />
            </g>
            <defs>
              <clipPath id="clip0_2972_6307">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      case 'warning':
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0007 7.98675L26.0407 25.3334H5.96065L16.0007 7.98675ZM16.0007 2.66675L1.33398 28.0001H30.6673L16.0007 2.66675ZM17.334 21.3334H14.6673V24.0001H17.334V21.3334ZM17.334 13.3334H14.6673V18.6667H17.334V13.3334Z"
              fill="#AA0C00"
            />
          </svg>
        );
      case 'info':
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2972_6325)">
              <path
                d="M14.666 9.33342H17.3327V12.0001H14.666V9.33342ZM14.666 14.6667H17.3327V22.6667H14.666V14.6667ZM15.9993 2.66675C8.63935 2.66675 2.66602 8.64008 2.66602 16.0001C2.66602 23.3601 8.63935 29.3334 15.9993 29.3334C23.3594 29.3334 29.3327 23.3601 29.3327 16.0001C29.3327 8.64008 23.3594 2.66675 15.9993 2.66675ZM15.9993 26.6667C10.1193 26.6667 5.33268 21.8801 5.33268 16.0001C5.33268 10.1201 10.1193 5.33341 15.9993 5.33341C21.8793 5.33341 26.666 10.1201 26.666 16.0001C26.666 21.8801 21.8793 26.6667 15.9993 26.6667Z"
                fill="#888888"
              />
            </g>
            <defs>
              <clipPath id="clip0_2972_6325">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
    }
  };

  return (
    <div className="verdict-flag">
      <div className="icon">{getIcon()}</div>
      <div className="text">{on ? text1 : text2}</div>
    </div>
  );
};

export default VerdictFlag;
