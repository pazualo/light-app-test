/**
 *
 * Asynchronously loads the component for SystemPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
