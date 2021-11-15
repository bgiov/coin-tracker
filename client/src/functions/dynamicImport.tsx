export const CoinImage = ({ name, size }: { name: string; size: string[] }) => {
  let Module: any = {};

  try {
    require(`../../node_modules/cryptocurrency-icons/svg/color/${name}.svg`);
    Module = require(`../../node_modules/cryptocurrency-icons/svg/color/${name}.svg`);
    if (Module) {
      return icon(Module.default);
    }
  } catch (e) {
    return genericIcon();
  }

  function icon(name: string) {
    return <img src={name} style={{ height: size[0], width: size[1] }} />;
  }

  function genericIcon() {
    Module = require(`../../node_modules/cryptocurrency-icons/svg/color/generic.svg`);
    if (Module) {
      return (
        <img src={Module.default} style={{ height: size[0], width: size[1] }} />
      );
    } else {
      return Module.default;
    }
  }
};
