/** Convert text to title case (first letter of each word capitalized) */
export const toTitle = text => {
  if (!text) return 'Unspecified';
  return text
    .replace(/_/g, ' ')
    .replace(/\b\w/g, match => match.toUpperCase())
    .trim();
};

/** Description for DPV footnote codes */
export const dpvFootnoteDescription = footnote => {
  const descriptions = {
    AA: 'Input address matched to the ZIP+4 file',
    A1: 'Input address was not matched to the ZIP+4 file',
    BB: 'Matched to DPV (all components)',
    CC: 'Secondary number not matched (present but invalid)',
    N1: 'High-rise address missing secondary number',
    M1: 'Primary number missing',
    M3: 'Primary number invalid',
    P1: 'RR or HC box number missing',
    P3: 'PO, RR, or HC Box number invalid',
    F1: 'Matched to a military address',
    G1: 'Matched to general delivery',
    U1: 'Matched to a unique ZIP code',
    PB: 'Matched to PBSA record',
    RR: 'DPV confirmed with PMB info',
    R1: 'DPV confirmed without PMB info',
    R7: 'Carrier Route R777 or R779',
  };

  return descriptions[footnote] || footnote;
};

/** Map for granularity levels */
export const GRANULARITY_MAP = {
  GRANULARITY_UNSPECIFIED: ['Unspecified', ''],
  SUB_PREMISE: ['Subpremise', '(apartment/unit)'],
  PREMISE: ['Premise', '(building)'],
  PREMISE_PROXIMITY: ['Premise Proximity', '(close to a building)'],
  BLOCK: ['Block', '(blocks in Japan)'],
  ROUTE: ['Route', '(street/road/highway)'],
  OTHER: ['Other', ''],
};
