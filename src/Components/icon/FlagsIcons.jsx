import IconEng from "./IconEng";
import IconJp from "./IconJp";
import IconSpa from "./IconSpa";

const FlagsIcons = ({ code }) => {
  let flag;

  switch (code) {
    case 'es':
      flag = <IconSpa/>;
      break;
    case 'en':
      flag = <IconEng/>;
      break;
    case 'jp':
      flag = <IconJp/>;
      break;
    }
    return <span className="relative w-8 hidden md:block">{flag}</span>;
  }
  export default FlagsIcons;