import { signalStoreFeature, withState } from '@ngrx/signals';

/**
 * creation of shared store feature to handle the
 * RequestStatus
 */
export const withRequestStatus = () => {
  return signalStoreFeature(withState({}));
};
