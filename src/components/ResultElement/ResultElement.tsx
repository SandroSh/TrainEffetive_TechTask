import { ResultBox, LeftDiv, TextDiv, ImageBox } from "./ResultElement.style";
import BlobIcon from '../../assets/Blob1.svg';
import BlobIcon2 from '../../assets/Blob1.svg';
import GoTo from '../../assets/GoTo.svg';
import { Details } from "../Details/Details";
import { useResultElement } from './useResultElement';
import { myUser } from "../../types";

export const ResultElement = ({ myUser }: myUser) => {
    const { isVisible, handleClick, detailedData } = useResultElement({ myUser });

    return (
        <>
            <ResultBox>
                <LeftDiv>
                    <ImageBox>
                        {myUser.id % 2 == 0 ? (
                            <img src={BlobIcon} alt="Image blob background" />
                        ) : (
                            <img src={BlobIcon2} alt="Image blob background" />
                        )}
                        <img src={myUser.avatar_url} alt="User Image" />
                    </ImageBox>
                    <TextDiv>
                        <h1>{myUser.login}</h1>
                        <p onClick={handleClick}>
                            {isVisible ? "Close Details" : "See Full Profile"}
                        </p>
                    </TextDiv>
                </LeftDiv>

                <a href={myUser.html_url} target="_blank">
                    <img src={GoTo} alt="Go to Icon" />
                </a>
            </ResultBox>
            {isVisible && detailedData ? (
                <Details userInfo={detailedData} />
            ) : null}
        </>
    );
};
