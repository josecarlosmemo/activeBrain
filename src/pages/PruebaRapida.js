import React, { Fragment } from "react";

import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "/assets/unity/Build/unity.loader.js",
  dataUrl: "/assets/unity/Build/unity.data.unityweb",
  frameworkUrl: "/assets/unity/Build/unity.framework.js.unityweb",
  codeUrl: "/assets/unity/Build/unity.wasm.unityweb",
});

function PruebaRapida() {
  return (
    <Fragment>
      <Unity style={{ width: "100%" }} unityContext={unityContext}></Unity>
    </Fragment>
  );
}

export default PruebaRapida;
