import { ResultBox, LeftDiv, TextDiv, ImageBox } from "./styles/ResultElement.style"
import BlobIcon from '../assets/Blob.svg';
import BlobIcon2 from '../assets/Blob1.svg';
import GoTo from '../assets/GoTo.svg';
import { myUser } from "../types";



export const ResultElement = ({ myUser }: myUser) => {
    return (
        <ResultBox>
            <LeftDiv>
                <ImageBox>
                    {
                        myUser.id % 2 == 0 ?
                            <img src={BlobIcon} alt="Image blob background" />
                            :
                            <img src={BlobIcon2} alt="Image blob background" />
                    }
                    <img src={myUser.avatar_url} alt="User Image" />
                </ImageBox>
                <TextDiv>
                    <h3>{myUser.login}</h3>
                    <p>See Full Profile</p>
                </TextDiv>
            </LeftDiv>

            <a href={myUser.html_url} target="_blank"  ><img src={GoTo} alt="Go to Icon" /></a>

        </ResultBox>
    )
}
