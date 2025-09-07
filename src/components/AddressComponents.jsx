import { toTitle } from '../utils/helpers';
import Card from './ui/Card';
import TagLevel from './ui/TagLevel';
import InfoTag from './ui/InfoTag';

const AddressComponents = ({ components }) => {
  if (!components || components.length === 0) {
    return (
      <div className="col-12">
        <span className="muted">No components.</span>
      </div>
    );
  }

  return components.map((component, index) => (
    <div className="col-12 col-md-4" key={index}>
      <Card>
        <h5 className="h5" style={{ marginBottom: 8 }}>
          {toTitle(component.componentType)}
        </h5>
        <div>
          {component?.componentName?.text || <span className="muted">—</span>}
        </div>
        <div className="tags">
          <TagLevel level={component.confirmationLevel} />
          {component.inferred && <InfoTag>INFERRED</InfoTag>}
          {component.spellCorrected && <InfoTag>SPELL CORRECTED</InfoTag>}
          {component.replaced && <InfoTag>REPLACED</InfoTag>}
          {component.unexpected && <InfoTag color="red">UNEXPECTED</InfoTag>}
        </div>
      </Card>
    </div>
  ));
};

export default AddressComponents;
