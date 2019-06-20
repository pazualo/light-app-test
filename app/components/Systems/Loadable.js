/**
 *
 * Asynchronously loads the component for Systems
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
