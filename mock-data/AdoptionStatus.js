/**
 * Potential additions:
 *  "APPLICATIONS_RECEIVED" - stage between "None" and "Pending" to indicate applications have been received but none selected yet
 */

const adoption_status = {
  'NONE':     'none',     // 'Animal is not yet in the process of being adopted',
  'PENDING':  'pending',  // 'Animal has been matched with person, adoption is not yet finalized (usually means pending payment)',
  'ADOPTED':  'adopted',  // 'Animal has been adopted',
};
