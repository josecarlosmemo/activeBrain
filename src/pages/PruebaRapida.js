import React, { Fragment } from "react";

import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "/assets/unity/unity.loader.js",
  dataUrl: "/assets/unity/unity.data.unityweb",
  frameworkUrl: "/assets/unity/unity.framework.js.unityweb",
  codeUrl: "/assets/unity/unity.wasm.unityweb",
});

function PruebaRapida() {
  return (
    <Fragment>
      <Unity style={{ width: "100%" }} unityContext={unityContext}></Unity>
    </Fragment>
  );
}

export default PruebaRapida;
