const FormattedAddress = ({ formattedAddress }) => {
  return (
    <div id="formatted-address-container" className="strip">
      <h4 className="h4" style={{ margin: 0 }}>
        Formatted address
      </h4>
      <span>A post-processed, region-formatted, single-line address</span>
      <div id="formatted-address" className="formatted-text">
        {formattedAddress || '—'}
      </div>
    </div>
  );
};

export default FormattedAddress;
