/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const safePrefix = require("./src/utils/safePrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {
  setHeadComponents([
    <React.Fragment>
      <script src={safePrefix("assets/js/loadCOVID.js")} />
    </React.Fragment>
  ]);

  setPostBodyComponents([
    <React.Fragment>
      <script src={safePrefix("assets/js/plugins.js")} />
      <script src={safePrefix("assets/js/prism.js")} data-manual />
      <script src={safePrefix("assets/js/main.js")} />
<script type="text/javascript">var subscribersSiteId='432c6f20-4f04-4803-b082-7d773aa19edc';</script>
<script type="text/javascript" src="https://cdn.subscribers.com/assets/subscribers.js"></script>
    </React.Fragment>
  ]);
};
