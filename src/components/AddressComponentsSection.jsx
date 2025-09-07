import AddressComponents from './AddressComponents';

const AddressComponentsSection = ({ components }) => {
  return (
    <section className="AddressComponentsSection">
      <h5 className="h5" style={{ marginTop: 24 }}>
        Address components
      </h5>
      <div className="row g-3">
        <AddressComponents components={components} />
      </div>
    </section>
  );
};

export default AddressComponentsSection;
