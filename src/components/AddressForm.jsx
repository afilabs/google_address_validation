import { COUNTRIES } from '../constants/countries';
import Button from './ui/Button';

const AddressForm = ({
  addressInput,
  setAddressInput,
  regionInput,
  setRegionInput,
  loading,
  onValidate,
}) => {
  return (
    <form className="request-form" onSubmit={e => e.preventDefault()}>
      <div className="row g-3 align-items-end">
        <div className="col-12 col-md-8">
          <label className="label" htmlFor="address">
            Address
          </label>
          <input
            id="address"
            className="input"
            placeholder="Enter address (e.g. 500 West 2nd Street Austin, TX 78701)"
            value={addressInput}
            onChange={e => setAddressInput(e.target.value)}
          />
        </div>

        <div className="col-6 col-md-2">
          <label className="label" htmlFor="region">
            Region
          </label>
          <select
            id="region"
            className="select"
            value={regionInput}
            onChange={e => setRegionInput(e.target.value)}
          >
            {COUNTRIES.map(country => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>

        <div className="col-6 col-md-2">
          <label className="label invisible">Validate</label>
          <Button type="primary" block loading={loading} onClick={onValidate}>
            Validate
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddressForm;
