import { useState, useCallback } from 'react';
import './styles/main.scss';

import { AddressForm, ValidatedAddressTab } from './components';

export default function App() {
  // User input state
  const [addressInput, setAddressInput] = useState('');
  const [regionInput, setRegionInput] = useState('US');

  // App state
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  // API response data
  const [formattedAddress, setFormattedAddress] = useState('');
  const [verdict, setVerdict] = useState({
    inputGranularity: 'GRANULARITY_UNSPECIFIED',
    validationGranularity: 'GRANULARITY_UNSPECIFIED',
    geocodeGranularity: 'GRANULARITY_UNSPECIFIED',
    hasUnconfirmedComponents: false,
    hasInferredComponents: false,
    hasReplacedComponents: false,
    addressComplete: false,
  });
  const [postalAddress, setPostalAddress] = useState({});
  const [components, setComponents] = useState([]);
  const [summary, setSummary] = useState({
    missingComponentTypes: [],
    unconfirmedComponentTypes: [],
    unresolvedTokens: [],
  });
  const [metadata, setMetadata] = useState({});
  const [usps, setUsps] = useState({});

  const handleValidate = useCallback(async () => {
    if (!addressInput || regionInput === undefined || regionInput === null) {
      return;
    }

    setLoading(true);
    setApiError('');

    try {
      const res = await fetch(
        `https://addressvalidation.googleapis.com/v1:validateAddress?key=${import.meta.env.VITE_GOOGLE_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            address: {
              regionCode: regionInput || '',
              addressLines: [addressInput],
            },
          }),
        }
      );

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Failed to validate address.');
      }

      const data = await res.json();
      const result = data.result || {};

      setFormattedAddress(result?.address?.formattedAddress || '');
      setVerdict({
        inputGranularity:
          result?.verdict?.inputGranularity || 'GRANULARITY_UNSPECIFIED',
        validationGranularity:
          result?.verdict?.validationGranularity || 'GRANULARITY_UNSPECIFIED',
        geocodeGranularity:
          result?.verdict?.geocodeGranularity || 'GRANULARITY_UNSPECIFIED',
        hasUnconfirmedComponents: !!result?.verdict?.hasUnconfirmedComponents,
        hasInferredComponents: !!result?.verdict?.hasInferredComponents,
        hasReplacedComponents: !!result?.verdict?.hasReplacedComponents,
        addressComplete: !!result?.verdict?.addressComplete,
      });
      setPostalAddress(result?.address?.postalAddress || {});
      setComponents(result?.address?.addressComponents || []);
      setSummary({
        missingComponentTypes: result?.address?.missingComponentTypes || [],
        unconfirmedComponentTypes:
          result?.address?.unconfirmedComponentTypes || [],
        unresolvedTokens: result?.address?.unresolvedTokens || [],
      });
      setMetadata(result?.metadata || {});
      setUsps(result?.uspsData || {});
    } catch (error) {
      setApiError(
        error?.message ||
          'There was a temporary server error. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  }, [addressInput, regionInput]);

  return (
    <div className="validation-wrapper">
      <div className="container">
        <div className="title">
          <h1>Address Validation</h1>
        </div>

        <div className="app-shell">
          <AddressForm
            addressInput={addressInput}
            setAddressInput={setAddressInput}
            regionInput={regionInput}
            setRegionInput={setRegionInput}
            loading={loading}
            onValidate={handleValidate}
          />

          <ValidatedAddressTab
            loading={loading}
            apiError={apiError}
            formattedAddress={formattedAddress}
            verdict={verdict}
            postalAddress={postalAddress}
            components={components}
            summary={summary}
            metadata={metadata}
            usps={usps}
          />
        </div>
      </div>
    </div>
  );
}
