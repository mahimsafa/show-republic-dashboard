import { Wrapper } from "./styles";

interface LoaderInterface {
    topColor?: string
    sideColor?: string
    styleTwo?: boolean
    topPadding?: string
    bottomPadding?: string
    center?: boolean
}
const Loader: React.FC<LoaderInterface> = ({topColor, sideColor, styleTwo = false, center = false, topPadding = "0px", bottomPadding = "0px"}) => {

    return (
        <Wrapper 
        center={center} 
        topPadding={topPadding} 
        bottomPadding={bottomPadding} 
        topColor={styleTwo ? "#13B9FD" : topColor} 
        sideColor={styleTwo ? "#13B9FD44" : sideColor} />
    );
}
 
export default Loader;