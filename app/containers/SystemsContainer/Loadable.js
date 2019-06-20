/**
 *
 * Asynchronously loads the component for SystemsContainer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
