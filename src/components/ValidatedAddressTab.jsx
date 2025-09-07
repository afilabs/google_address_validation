import Alert from './ui/Alert';
import FormattedAddress from './FormattedAddress';
import VerdictSection from './VerdictSection';
import PostalAddressSection from './PostalAddressSection';
import AddressComponentsSection from './AddressComponentsSection';
import AddressComponentsSummarySection from './AddressComponentsSummarySection';
import MetadataSection from './MetadataSection';
import UspsSection from './UspsSection';

const ValidatedAddressTab = ({
  loading,
  apiError,
  formattedAddress,
  verdict,
  postalAddress,
  components,
  summary,
  metadata,
  usps,
}) => {
  return (
    <div className="tab-pane">
      {loading && (
        <Alert type="info" message="Waiting for server response..." />
      )}
      {apiError && <Alert type="warning" message={apiError} />}

      <FormattedAddress formattedAddress={formattedAddress} />

      <VerdictSection verdict={verdict} />
      <PostalAddressSection postalAddress={postalAddress} />
      <AddressComponentsSection components={components} />
      <AddressComponentsSummarySection summary={summary} />
      <MetadataSection metadata={metadata} />
      <UspsSection usps={usps} />
    </div>
  );
};

export default ValidatedAddressTab;
