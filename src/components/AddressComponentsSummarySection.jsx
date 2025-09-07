import { toTitle } from '../utils/helpers';
import Card from './ui/Card';

const AddressComponentsSummarySection = ({ summary }) => {
  return (
    <section className="AddressComponentsSummarySection">
      <h5 className="h5" style={{ margin: '16px 0' }}>
        Address components summary
      </h5>
      <div className="row g-3">
        <div className="col-12 col-md-4">
          <Card>
            <h5 className="h5">Missing</h5>
            <p className="muted">
              Components that were not found but are needed for a complete
              address
            </p>
            {!!summary.missingComponentTypes?.length && (
              <ul className="list">
                {summary.missingComponentTypes.map(item => (
                  <li key={item}>{toTitle(item)}</li>
                ))}
              </ul>
            )}
            {!summary.missingComponentTypes?.length && (
              <div className="text-large">None</div>
            )}
          </Card>
        </div>
        <div className="col-12 col-md-4">
          <Card>
            <h5 className="h5">Unconfirmed</h5>
            <p className="muted">
              Components present but cannot be confirmed as correct
            </p>
            {!!summary.unconfirmedComponentTypes?.length && (
              <ul className="list">
                {summary.unconfirmedComponentTypes.map(item => (
                  <li key={item}>{toTitle(item)}</li>
                ))}
              </ul>
            )}
            {!summary.unconfirmedComponentTypes?.length && (
              <div className="text-large">None</div>
            )}
          </Card>
        </div>
        <div className="col-12 col-md-4">
          <Card>
            <h5 className="h5">Unresolved</h5>
            <p className="muted">
              Parts of the input that cannot be parsed into components
            </p>
            {!!summary.unresolvedTokens?.length && (
              <ul className="list">
                {summary.unresolvedTokens.map(item => (
                  <li key={item}>{toTitle(item)}</li>
                ))}
              </ul>
            )}
            {!summary.unresolvedTokens?.length && (
              <div className="text-large">None</div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AddressComponentsSummarySection;
