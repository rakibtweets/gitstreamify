import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ProductsView } from 'src/sections/feed/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Feeds - ${CONFIG.appName}`}</title>
      </Helmet>

      <ProductsView />
    </>
  );
}
