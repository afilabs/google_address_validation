import { dpvFootnoteDescription } from '../utils/helpers';
import Card from './ui/Card';
import Tag from './ui/Tag';

const UspsSection = ({ usps }) => {
  const renderDpv = code => {
    if (code === 'Y') return <Tag color="green">CONFIRMED</Tag>;
    if (code === 'N') return <Tag color="red">FAILED</Tag>;
    if (code === 'S')
      return (
        <>
          <Tag color="green">CONFIRMED</Tag>{' '}
          <span>(by excluding unit/apt)</span>
        </>
      );
    if (code === 'D')
      return (
        <>
          <Tag color="orange">INCOMPLETE</Tag> <span>(missing unit/apt)</span>
        </>
      );
    return <Tag color="red">UNKNOWN</Tag>;
  };

  return (
    <section className="UspsSection">
      <h4 className="h4">US Postal Service (USPS) data</h4>
      <p className="muted">
        Optionally you can return CASS-certified USPS data.
      </p>
      <div className="row g-3" style={{ marginTop: 12 }}>
        <div className="col-12 col-md-12">
          <Card>
            <h5 className="h5">Delivery Point Validation (DPV)</h5>
            <p className="muted">
              Does the USPS consider this a known address of record?
            </p>
            <div className="dpv">{renderDpv(usps?.dpvConfirmation)}</div>
            {Array.isArray(usps?.dpvFootnote) && usps.dpvFootnote.length > 0 ? (
              <>
                <h5 className="h5" style={{ marginTop: 16 }}>
                  Footnotes
                </h5>
                <ul className="list">
                  {usps.dpvFootnote.map(footnote => (
                    <li key={footnote}>{dpvFootnoteDescription(footnote)}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UspsSection;
