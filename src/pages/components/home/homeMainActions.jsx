import InfoInicio from "./InfoGeneral/infoInicio";
import InfoTutoriales from "./InfoGeneral/infoTutoriales";

const HomeMainActions = ({ activeComponent }) => {
    return (
        <main style={{ float: "right" }}>
            {activeComponent === "InfoInicio" && <InfoInicio />}
            {activeComponent === "InfoTutoriales" && <InfoTutoriales />}
        </main>
    );
};

export default HomeMainActions;
