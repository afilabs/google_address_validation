import Card from './ui/Card';

const PostalAddressSection = ({ postalAddress }) => {
  return (
    <section className="PostalAddressSection">
      <h4 className="h4">Validated address</h4>

      <h5 className="h5" style={{ margin: '12px 0' }}>
        Postal address
      </h5>
      <Card>
        <dl className="desc">
          <div className="desc__row">
            <dt>Region code</dt>
            <dd>{postalAddress.regionCode ?? '—'}</dd>
          </div>
          <div className="desc__row">
            <dt>Language code</dt>
            <dd>{postalAddress.languageCode ?? '—'}</dd>
          </div>
          <div className="desc__row">
            <dt>Postal code</dt>
            <dd>{postalAddress.postalCode ?? '—'}</dd>
          </div>
          <div className="desc__row">
            <dt>Administrative area</dt>
            <dd>{postalAddress.administrativeArea ?? '—'}</dd>
          </div>
          <div className="desc__row">
            <dt>Locality</dt>
            <dd>{postalAddress.locality ?? '—'}</dd>
          </div>
          <div className="desc__row">
            <dt>Address lines</dt>
            <dd>
              {Array.isArray(postalAddress.addressLines)
                ? postalAddress.addressLines.join(', ')
                : (postalAddress.addressLines ?? '—')}
            </dd>
          </div>
        </dl>
      </Card>
    </section>
  );
};

export default PostalAddressSection;
