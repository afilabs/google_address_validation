const MetadataSection = ({ metadata }) => {
  const getIcon = type => {
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
            <g clipPath="url(#clip0_2974_6466)">
              <path
                d="M12.0002 21.56L6.44021 16L4.54688 17.88L12.0002 25.3334L28.0002 9.33337L26.1202 7.45337L12.0002 21.56Z"
                fill="#58A942"
              />
            </g>
            <defs>
              <clipPath id="clip0_2974_6466">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      case 'Invalid':
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2974_6469)">
              <path
                d="M25.3327 8.54663L23.4527 6.66663L15.9993 14.12L8.54602 6.66663L6.66602 8.54663L14.1193 16L6.66602 23.4533L8.54602 25.3333L15.9993 17.88L23.4527 25.3333L25.3327 23.4533L17.8793 16L25.3327 8.54663Z"
                fill="#FF1100"
              />
            </g>
            <defs>
              <clipPath id="clip0_2974_6469">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
    }
  };
  return (
    <section className="MetadataSection">
      <h3 className="h3">Metadata</h3>
      <div className="d-flex flex-column gap-3">
        <div className="col-12 d-flex align-items-center">
          <div className="icon">
            {getIcon(metadata.business ? 'valid' : 'Invalid')}
          </div>
          <div className="text">
            {metadata.business ? 'True' : 'False'}.............. Business
          </div>
        </div>
        <div className="col-12 d-flex align-items-center">
          <div className="icon">
            {getIcon(metadata.poBox ? 'valid' : 'Invalid')}
          </div>
          <div className="text">
            {metadata.poBox ? 'True' : 'False'}.............. PO Box
          </div>
        </div>
        <div className="col-12 d-flex align-items-center">
          <div className="icon">
            {getIcon(metadata.residential ? 'valid' : 'Invalid')}
          </div>
          <div className="text">
            {metadata.residential ? 'True' : 'False'}.............. Residential
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetadataSection;
