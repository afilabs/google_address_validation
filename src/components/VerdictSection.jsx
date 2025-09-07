import { GRANULARITY_MAP } from '../utils/helpers';
import Card from './ui/Card';
import VerdictFlag from './ui/VerdictFlag';

const VerdictSection = ({ verdict }) => {
  return (
    <section className="VerdictSection strip">
      <h3 className="h3">Verdict</h3>
      <h5 className="h5" style={{ marginTop: 16 }}>
        Granularity
      </h5>
      <p className="muted">How specific is the address?</p>

      <div className="row g-3">
        {[
          ['Entered', verdict.inputGranularity],
          ['Validated', verdict.validationGranularity],
          ['Geocoded', verdict.geocodeGranularity],
        ].map(([title, granularity]) => {
          const [label, description] = GRANULARITY_MAP[granularity] || [
            granularity
              ?.replace(/_/g, ' ')
              .replace(/\b\w/g, m => m.toUpperCase()),
            '',
          ];
          return (
            <div className="col-12 col-md-4" key={title}>
              <Card>
                <h5 className="h5" style={{ marginBottom: 8 }}>
                  {title}
                </h5>
                <div>{label}</div>
                <p className="muted">{description}</p>
              </Card>
            </div>
          );
        })}
      </div>

      <h5 className="h5" style={{ marginTop: 24 }}>
        Validated address verdict
      </h5>
      <div className="flags-container">
        <VerdictFlag
          type={verdict.addressComplete ? 'valid' : 'warning'}
          on={verdict.addressComplete}
          text1="The API found no unresolved, unexpected, or missing address elements"
          text2="At least one address element is unresolved, unexpected, or missing"
        />
        <VerdictFlag
          type={verdict.hasUnconfirmedComponents ? 'warning' : 'valid'}
          on={verdict.hasUnconfirmedComponents}
          text1="The API can't confirm at least one address component"
          text2="The API confirmed all address components"
        />
        <VerdictFlag
          type={verdict.hasInferredComponents ? 'info' : 'valid'}
          on={verdict.hasInferredComponents}
          text1="The API inferred (added) at least one address component"
          text2="The API did not infer (add) any address components"
        />
        <VerdictFlag
          type={verdict.hasReplacedComponents ? 'info' : 'valid'}
          on={verdict.hasReplacedComponents}
          text1="The API replaced at least one address component"
          text2="The API did not replace any address components"
        />
      </div>
    </section>
  );
};

export default VerdictSection;
